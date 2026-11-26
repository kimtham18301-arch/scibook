(function(){
'use strict';

// Bộ định dạng Công thức & Giải thích Đại lượng Toán – Lý – Hóa (Stacked Vertical Fractions, Subscripts & Symbol Legend)
// Hiển thị rõ: (1) Tên/ý nghĩa công thức, (2) Phân số tử trên – mẫu dưới có gạch ngang, (3) Giải thích từng kí hiệu & đơn vị.

function escHtml(s){
  return String(s == null ? '' : s).replace(/[&<>"]/g, function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];
  });
}

// Parse nested \frac{num}{den} safely
function replaceExplicitFrac(html){
  var out = '';
  var i = 0;
  while (i < html.length) {
    var idx = html.indexOf('\\frac{', i);
    if (idx === -1) {
      out += html.slice(i);
      break;
    }
    out += html.slice(i, idx);
    var p = idx + 6; // after \frac{
    var depth = 1;
    var numStart = p;
    while (p < html.length && depth > 0) {
      if (html[p] === '{') depth++;
      else if (html[p] === '}') depth--;
      p++;
    }
    if (depth !== 0 || html[p] !== '{') {
      out += html.slice(idx, p);
      i = p;
      continue;
    }
    var num = html.slice(numStart, p - 1);
    p++; // skip '{' of denominator
    depth = 1;
    var denStart = p;
    while (p < html.length && depth > 0) {
      if (html[p] === '{') depth++;
      else if (html[p] === '}') depth--;
      p++;
    }
    var den = html.slice(denStart, p - 1);
    out += '<span class="mfrac"><span class="mnum">' + replaceExplicitFrac(num) + '</span><span class="mden">' + replaceExplicitFrac(den) + '</span></span>';
    i = p;
  }
  return out;
}

// Format subscripts like d_(A/B), m_(thực tế), m_ct, V_khí, C_M, C%_bh, F_A
function formatSubscripts(html){
  // 1. Parenthesized subscripts: X_(...)
  html = html.replace(/([A-Za-zĐđ%₀-₉⁰-⁹]+)_(\(([^()<>]+)\))/g, function(_, base, _full, sub){
    return base + '<sub>' + sub + '</sub>';
  });
  // 2. Word subscripts: X_word (supports Vietnamese letters & digits)
  html = html.replace(/([A-Za-zĐđ%]+)_([A-Za-zÀ-ỹ0-9]+)/g, function(_, base, sub){
    return base + '<sub>' + sub + '</sub>';
  });
  return html;
}

// Convert inline math divisions (in explanations/examples/hints without \frac) when clearly mathematical
var UNIT_TOKENS = /^(g|kg|mg|mol|mmol|L|mL|m|cm|mm|km|s|ms|h|phút|giờ|ngày|N|kN|Pa|kPa|J|kJ|W|kW|V|A|mA|Ω|K|cm²|m²|cm³|m³)$/i;

function formatAutoFractions(html){
  // Numeric fractions like 1/3, 1/15, 24/5 (when not part of dates like 15/11/2026)
  html = html.replace(/(^|[\s(+=×·−-])(\d{1,4})\/(\d{1,4})(?=[\s).,;:%]|$)/g, function(m, pre, a, b){
    return pre + '<span class="mfrac"><span class="mnum">' + a + '</span><span class="mden">' + b + '</span></span>';
  });

  // Spaced mathematical fractions: (expr) / (expr), (expr) / token, token / (expr), or var / var after =, ⇒, ≈
  var tokPat = '(?:[0-9A-Za-zÀ-ỹ%,.₀-₉⁰-⁹·×]+(?:<sub>[^<]+<\\/sub>)*)';
  html = html.replace(/\(([^()<>]{1,48})\)\s+\/\s+\(([^()<>]{1,48})\)/g, function(_, a, b){
    return '<span class="mfrac"><span class="mnum">' + a.trim() + '</span><span class="mden">' + b.trim() + '</span></span>';
  });
  html = html.replace(new RegExp('\\(([^()<>]{1,48})\\)\\s+\\/\\s+(' + tokPat + ')(?=[\\s).,;×·+−=-]|$)', 'g'), function(m, a, b){
    if (UNIT_TOKENS.test(b)) return m;
    return '<span class="mfrac"><span class="mnum">' + a.trim() + '</span><span class="mden">' + b.trim() + '</span></span>';
  });
  html = html.replace(new RegExp('([=⇒≈]\\s*)(' + tokPat + ')\\s+\\/\\s+\\(([^()<>]{1,48})\\)', 'g'), function(_, eq, a, b){
    return eq + '<span class="mfrac"><span class="mnum">' + a.trim() + '</span><span class="mden">' + b.trim() + '</span></span>';
  });
  html = html.replace(new RegExp('([=⇒≈]\\s*)(' + tokPat + ')\\s+\\/\\s+(' + tokPat + ')', 'g'), function(m, eq, a, b){
    if (UNIT_TOKENS.test(a) || UNIT_TOKENS.test(b)) return m;
    return eq + '<span class="mfrac"><span class="mnum">' + a.trim() + '</span><span class="mden">' + b.trim() + '</span></span>';
  });
  return html;
}

function coreFormat(raw){
  if (raw == null || raw === '') return '';
  var s = escHtml(raw);
  s = formatSubscripts(s);
  s = replaceExplicitFrac(s);
  s = formatAutoFractions(s);
  return s;
}

window.KHTNMath = {
  // Inline formatting (for questions, choices, hints, steps): turns ' || ' into a clean dash separator
  format: function(raw){
    if (raw == null || raw === '') return '';
    var parts = String(raw).split(' || ');
    if (parts.length > 1) {
      return coreFormat(parts[0]) + ' <span style="opacity:.86">(' + coreFormat(parts.slice(1).join(' · ')) + ')</span>';
    }
    return coreFormat(raw);
  },

  // Structured Formula Block formatting (for Lesson Formulas, Notebook & PDF Formula Sheets):
  // Supports 'Tên công thức: Biểu thức || Giải thích đại lượng & đơn vị'
  // When interactive === true (web UI), symbol explanations stay hidden until clicked.
  formatFormula: function(raw, interactive){
    if (raw == null || raw === '') return '';
    var parts = String(raw).split(' || ');
    var mainRaw = parts[0] || '';
    var descRaw = parts.slice(1).join(' · ');

    var mainHtml = '';
    var colonIdx = mainRaw.indexOf(': ');
    // Bold the formula title if ': ' appears before any '=', '→', '⇄', or '\frac'
    if (colonIdx > 1 && colonIdx < 78) {
      var head = mainRaw.slice(0, colonIdx);
      var rest = mainRaw.slice(colonIdx + 2);
      if (!/[=⇒→⇄]|\\frac/.test(head)) {
        mainHtml = '<span class="f-title">' + coreFormat(head) + ':</span> <span class="f-expr">' + coreFormat(rest) + '</span>';
      } else {
        mainHtml = '<span class="f-expr">' + coreFormat(mainRaw) + '</span>';
      }
    } else {
      mainHtml = '<span class="f-expr">' + coreFormat(mainRaw) + '</span>';
    }

    if (descRaw) {
      var formattedDesc = coreFormat(descRaw).replace(/^(Trong đó:|Ý nghĩa:|Lưu ý:|Cách tính:|Cách đổi:|Bản chất:|Hiện tượng:|Điều kiện xảy ra:|Ví dụ:)/, '<i>$1</i>');
      if (interactive) {
        return (
          '<details class="formula-acc">' +
            '<summary class="f-main f-sum">' +
              '<span class="f-main-txt">' + mainHtml + '</span>' +
              '<span class="f-pill">Giải thích <span class="chev"></span></span>' +
            '</summary>' +
            '<div class="f-desc">– ' + formattedDesc + '</div>' +
          '</details>'
        );
      }
      return '<div class="f-main">' + mainHtml + '</div><div class="f-desc">– ' + formattedDesc + '</div>';
    }
    return '<div class="f-main">' + mainHtml + '</div>';
  },

  // CSS snippet embedded inside standalone downloaded HTML files so printed/saved files also render stacked fractions & legends
  cssString: function(){
    return (
      '.mfrac{display:inline-flex;flex-direction:column;vertical-align:middle;text-align:center;margin:0 .22em;line-height:1.18;font-size:.96em}' +
      '.mfrac>.mnum{padding:0 .28em .12em;border-bottom:1.35px solid currentColor;display:block}' +
      '.mfrac>.mden{padding:.12em .28em 0;display:block}' +
      'sub{font-size:.74em;line-height:0;vertical-align:sub}' +
      '.f-main{line-height:1.85}' +
      '.f-title{font-weight:700;color:#111}' +
      '.f-desc{margin-top:2px;padding-left:12px;font-size:.91em;color:#333;line-height:1.55}'
    );
  }
};
})();
