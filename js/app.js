(function(){
'use strict';

var D = window.KHTN || [];
var EXAMS = window.KHTN_EXAMS || [];
var BANK = window.KHTNBank;
var app = document.getElementById('app');

var SUBJ = { hoa:'Hóa', ly:'Lí', sinh:'Sinh', td:'Mở đầu / Trái Đất' };
var SUBJ_SHORT = { hoa:'Hóa', ly:'Lí', sinh:'Sinh', td:'Chung' };
var DIFF = {
  1:'Mức 1 · Dễ',
  2:'Mức 2 · Trung bình',
  3:'Mức 3 · Khá',
  4:'Mức 4 · Khó'
};
var DIFF_SHORT = {
  1:'Dễ',
  2:'TB',
  3:'Khá',
  4:'Khó'
};
var STAGE_META = {
  1: { term:'HK1', title:'Nửa đầu Học kì I · Kiểm tra Giữa kì I' },
  2: { term:'HK1', title:'Nửa sau Học kì I · Kiểm tra Cuối kì I' },
  3: { term:'HK2', title:'Nửa đầu Học kì II · Kiểm tra Giữa kì II' },
  4: { term:'HK2', title:'Nửa sau Học kì II · Kiểm tra Cuối kì II' },
  5: { term:'Cả năm', title:'Đề Tổng hợp & Bồi dưỡng Nâng cao' }
};

var SGK_PDF_URLS = {
  6: 'https://thuvienhoclieu.com/sach-giao-khoa-mon-khtn-lop-6-thong-nhat-file-pdf/',
  7: 'https://thuvienhoclieu.com/sach-giao-khoa-mon-khtn-lop-7-thong-nhat-file-pdf/',
  8: 'https://thuvienhoclieu.com/sach-giao-khoa-mon-khtn-lop-8-thong-nhat-file-pdf/',
  9: 'https://thuvienhoclieu.com/sach-giao-khoa-mon-khtn-lop-9-thong-nhat-file-pdf/'
};

var GRADE_BOOK_META = {
  6: { sub:'Khoa học tự nhiên 6', topics:'Chất quanh ta · Tế bào · Lực & Năng lượng · Trái Đất' },
  7: { sub:'Khoa học tự nhiên 7', topics:'Nguyên tử & Hóa trị · Tốc độ · Ánh sáng · Sinh vật' },
  8: { sub:'Khoa học tự nhiên 8', topics:'Phản ứng & Mol · Áp suất · Điện – Nhiệt · Cơ thể người' },
  9: { sub:'Khoa học tự nhiên 9', topics:'Cơ – Điện – Quang · Kim loại & Hữu cơ · Di truyền' }
};

function setShellMode(mode, gradeNum){
  var shell = document.getElementById('book-shell') || document.querySelector('.book-shell');
  if (!shell) return;
  if (mode === 'shelf') {
    shell.classList.add('is-shelf');
    shell.removeAttribute('data-book-grade');
  } else {
    shell.classList.remove('is-shelf');
    if ([6,7,8,9].indexOf(Number(gradeNum)) > -1) {
      shell.setAttribute('data-book-grade', String(gradeNum));
    } else {
      shell.removeAttribute('data-book-grade');
    }
  }
}

var byId = {};
D.forEach(function(t){ byId[t.id] = t; });
var examById = {};
EXAMS.forEach(function(ex){ examById[ex.id] = ex; });

var KEY_PROG = 'khtn-progress-v1';
var KEY_MISTAKE = 'khtn-mistakes-v1';
var KEY_EXAMS = 'khtn-exams-v1';
var KEY_META = 'khtn-meta-v1';
var KEY_THEME = 'khtn-theme';
var KEY_FONTSIZE = 'khtn-fontsize';

var PUBLIC_URL = 'https://kimtham18301-arch.github.io/scibook/';
var currentCleanup = null;
var quickExamSpecs = {};
var toastTimer = null;

// --- Storage helpers ---
function readJSON(key, fallback){
  try {
    var raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) { return fallback; }
}
function writeJSON(key, val){
  try { localStorage.setItem(key, JSON.stringify(val)); return true; }
  catch (e) { return false; }
}
function loadProg(){ return readJSON(KEY_PROG, {}); }
function saveProg(p){ return writeJSON(KEY_PROG, p); }
function loadMistakes(){ return readJSON(KEY_MISTAKE, {}); }
function saveMistakes(m){ return writeJSON(KEY_MISTAKE, m); }
function loadExams(){ return readJSON(KEY_EXAMS, {}); }
function saveExams(x){ return writeJSON(KEY_EXAMS, x); }
function loadMeta(){ return readJSON(KEY_META, {}); }
function saveMeta(m){ return writeJSON(KEY_META, m); }

function getPrefGrade(){
  var m = loadMeta();
  var g = Number(m.prefGrade);
  return [6,7,8,9].indexOf(g) > -1 ? g : 7;
}
function setPrefGrade(g){
  if ([6,7,8,9].indexOf(Number(g)) === -1) return;
  var m = loadMeta();
  m.prefGrade = Number(g);
  saveMeta(m);
  syncGradeNavLinks();
}
function syncGradeNavLinks(){
  var g = getPrefGrade();
  var navEx = document.getElementById('nav-exam-link');
  var bExam = document.getElementById('bnav-exam-link');
  if (navEx) navEx.setAttribute('href', '#/de-kiem-tra/' + g);
  if (bExam) bExam.setAttribute('href', '#/de-kiem-tra/' + g);
}

// --- Toast & Speech ---
function showToast(msg){
  var el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.hidden = false;
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(function(){ el.hidden = true; }, 3000);
}
function stopSpeech(){
  try {
    if (window.speechSynthesis && window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
  } catch (e) {}
}

// --- Copy & Info / Share Modals ---
function copyText(txt, okMsg){
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(txt).then(function(){
      showToast(okMsg || '✓ Đã sao chép đường link.');
    }).catch(function(){ fallbackCopy(txt, okMsg); });
  } else {
    fallbackCopy(txt, okMsg);
  }
}
function fallbackCopy(txt, okMsg){
  var ta = document.createElement('textarea');
  ta.value = txt;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand('copy');
    showToast(okMsg || '✓ Đã sao chép đường link.');
  } catch (e) {
    prompt('Sao chép đường link:', txt);
  }
  document.body.removeChild(ta);
}
function getShareableBaseUrl(){
  if (location.hostname && location.hostname.indexOf('github.io') > -1) {
    return location.origin + location.pathname;
  }
  return PUBLIC_URL;
}
function getShareableCurrentUrl(){
  var base = getShareableBaseUrl();
  var h = location.hash || '';
  return h && h !== '#/' ? (base + h) : base;
}
function openInfoModal(titleHtml, bodyHtml, onMount){
  var modal = document.getElementById('info-modal');
  if (!modal) return;
  function onKey(e){ if (e.key === 'Escape') close(); }
  function close(){
    modal.hidden = true;
    modal.innerHTML = '';
    document.removeEventListener('keydown', onKey);
  }
  modal.innerHTML =
    '<div class="modal-card narrow">' +
      '<div class="modal-head">' +
        '<b id="info-modal-title">' + titleHtml + '</b>' +
        '<button type="button" class="btn sm subtle" data-act="close-info">✕ Đóng</button>' +
      '</div>' +
      '<div class="modal-body" style="background:var(--card)">' + bodyHtml + '</div>' +
    '</div>';
  modal.querySelector('[data-act="close-info"]').onclick = close;
  modal.onclick = function(e){ if (e.target === modal) close(); };
  document.addEventListener('keydown', onKey);
  modal.hidden = false;
  if (typeof onMount === 'function') onMount(modal, close);
}

function openShareModal(customLabel){
  var homeUrl = getShareableBaseUrl();
  var curUrl = getShareableCurrentUrl();
  var hasSpecificPage = curUrl !== homeUrl;
  var canNativeShare = typeof navigator.share === 'function';

  var html = '';
  if (hasSpecificPage) {
    html +=
      '<div class="card highlight" style="margin-bottom:10px">' +
        '<b>Link mục đang mở' + (customLabel ? ' (' + esc(customLabel) + ')' : '') + ':</b>' +
        '<div style="margin:6px 0;padding:7px 10px;background:var(--bg);border:1px solid var(--line);border-radius:8px;word-break:break-all;font-size:.86rem">' + esc(curUrl) + '</div>' +
        '<div class="row">' +
          '<button type="button" class="btn sm" id="sh-copy-cur">Sao chép link</button>' +
          (canNativeShare ? '<button type="button" class="btn sm alt" id="sh-native-cur">Gửi nhanh</button>' : '') +
        '</div>' +
      '</div>';
  }
  html +=
    '<div class="card">' +
      '<b>Link Trang chủ (Lớp 6–9):</b>' +
      '<div style="margin:6px 0;padding:7px 10px;background:var(--surface);border:1px solid var(--line);border-radius:8px;word-break:break-all;font-size:.88rem;font-weight:600">' + esc(homeUrl) + '</div>' +
      '<div class="row">' +
        '<button type="button" class="btn ' + (hasSpecificPage ? 'sm alt' : 'sm') + '" id="sh-copy-home">Sao chép Trang chủ</button>' +
      '</div>' +
    '</div>';

  openInfoModal('Chia sẻ đường link', html, function(modal){
    var bCur = modal.querySelector('#sh-copy-cur');
    if (bCur) bCur.onclick = function(){ copyText(curUrl, '✓ Đã sao chép link mục đang mở.'); };
    var bHome = modal.querySelector('#sh-copy-home');
    if (bHome) bHome.onclick = function(){ copyText(homeUrl, '✓ Đã sao chép link Trang chủ.'); };
    var bNatCur = modal.querySelector('#sh-native-cur');
    if (bNatCur) bNatCur.onclick = function(){
      navigator.share({ title: customLabel || 'SciBook', url: curUrl }).catch(function(){});
    };
  });
}

function openAboutModal(){
  var html =
    '<p style="margin-top:0"><b>SciBook</b> – Mục lục &amp; Luyện tập Khoa học tự nhiên Lớp 6–9 (Bộ SGK <i>Kết nối tri thức với cuộc sống</i> – sử dụng thống nhất toàn quốc).</p>' +
    '<ul class="tight">' +
      '<li>Bám sát đúng chương, bài SGK và các mốc kiểm tra 15 phút, Giữa kì, Cuối kì.</li>' +
      '<li>Miễn phí, không cần tài khoản; tiến độ học và sổ điểm tự lưu trên thiết bị.</li>' +
      '<li>Xuất / in đề A4 kèm tờ đáp án riêng một chạm.</li>' +
    '</ul>';
  openInfoModal('Giới thiệu SciBook', html);
}

// --- Top Bar Controls Init ---
(function initTopControls(){
  var themeBtn = document.getElementById('theme-toggle');
  var savedTheme = null;
  try { savedTheme = localStorage.getItem(KEY_THEME); } catch (e) {}
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  var theme = savedTheme || (prefersDark ? 'dark' : 'light');

  function applyTheme(t){
    theme = t;
    document.documentElement.dataset.theme = t;
    if (themeBtn) themeBtn.textContent = t === 'dark' ? 'Sáng' : 'Tối';
  }
  applyTheme(theme);
  if (themeBtn) {
    themeBtn.onclick = function(){
      var next = theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(KEY_THEME, next); } catch (e) {}
      applyTheme(next);
    };
  }

  var fontBtn = document.getElementById('font-toggle');
  var savedFont = 'normal';
  try { savedFont = localStorage.getItem(KEY_FONTSIZE) || 'normal'; } catch (e) {}
  var fontModes = ['normal', 'large', 'xlarge'];
  if (fontModes.indexOf(savedFont) === -1) savedFont = 'normal';

  function applyFont(f){
    savedFont = f;
    document.documentElement.dataset.fontsize = f;
    if (fontBtn) {
      fontBtn.classList.toggle('active', f !== 'normal');
      fontBtn.textContent = f === 'xlarge' ? 'A++' : 'A+';
    }
  }
  applyFont(savedFont);
  if (fontBtn) {
    fontBtn.onclick = function(){
      var nextF = fontModes[(fontModes.indexOf(savedFont) + 1) % fontModes.length];
      try { localStorage.setItem(KEY_FONTSIZE, nextF); } catch (e) {}
      applyFont(nextF);
    };
  }

  var shareBtn = document.getElementById('share-btn');
  if (shareBtn) shareBtn.onclick = function(){ openShareModal(); };

  var aboutBtn = document.getElementById('about-btn');
  if (aboutBtn) aboutBtn.onclick = openAboutModal;

  syncGradeNavLinks();
})();

// --- Formatting & Progressive Disclosure Utilities ---
function esc(s){
  return String(s == null ? '' : s).replace(/[&<>"]/g, function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];
  });
}
function fmtMath(s){
  return (window.KHTNMath && typeof window.KHTNMath.format === 'function')
    ? window.KHTNMath.format(s)
    : esc(s);
}
function fmtFormulaInteractive(s){
  return (window.KHTNMath && typeof window.KHTNMath.formatFormula === 'function')
    ? window.KHTNMath.formatFormula(s, true)
    : fmtMath(s);
}
function normVi(s){
  return String(s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .trim();
}
function shuffle(a){
  a = a.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}
function fmtNum(n){ return String(n).replace('.', ','); }
function score10(ratio){ return (Math.round(ratio * 100) / 10).toFixed(1).replace('.', ','); }
function round1(val){ return Math.round(val * 10) / 10; }

// Extract short scannable title from a long theory bullet so user taps to read full text
function splitTheoryItem(raw){
  var s = String(raw || '').trim();
  var colonIdx = s.indexOf(': ');
  if (colonIdx >= 3 && colonIdx <= 85) {
    var head = s.slice(0, colonIdx);
    if (head.indexOf('(') === -1 || head.indexOf(')') > head.indexOf('(')) {
      return { lead: head, body: s.slice(colonIdx + 2) };
    }
  }
  var mParen = s.match(/^([^(]{4,58}?)\s*\(/);
  if (mParen) {
    return { lead: mParen[1].trim(), body: s };
  }
  var mVerb = s.match(/^(.{4,62}?)\s+(?:là|gồm|chỉ|xuất hiện|xảy ra|nghiên cứu|tự quay|không tự|có ở)\s+/);
  if (mVerb) {
    return { lead: mVerb[1].trim(), body: s };
  }
  if (s.length <= 64) return { lead: s, body: '' };
  var cut = s.slice(0, 56);
  var sp = cut.lastIndexOf(' ');
  return { lead: (sp > 20 ? cut.slice(0, sp) : cut) + '…', body: s };
}

function renderTheoryInteractive(theoryArr){
  if (!theoryArr || !theoryArr.length) return '';
  var html =
    '<div class="theory-box">' +
      (theoryArr.length > 1
        ? '<div class="theory-toolbar"><button type="button" class="btn-ghost-xs" data-toggle-details=".theory-acc" data-open-txt="Mở hết ý" data-close-txt="Thu gọn ý">Mở hết ý</button></div>'
        : '');
  theoryArr.forEach(function(item, idx){
    var parts = splitTheoryItem(item);
    if (!parts.body) {
      html +=
        '<div class="theory-acc" style="padding:9px 13px;font-size:.92rem">' +
          '<span class="theory-num">' + (idx + 1) + '</span>' + fmtMath(parts.lead) +
        '</div>';
    } else {
      html +=
        '<details class="theory-acc">' +
          '<summary class="theory-sum">' +
            '<span style="display:flex;align-items:center;min-width:0"><span class="theory-num">' + (idx + 1) + '</span><span>' + fmtMath(parts.lead) + '</span></span>' +
            '<span class="chev"></span>' +
          '</summary>' +
          '<div class="theory-body">' + fmtMath(parts.body) + '</div>' +
        '</details>';
    }
  });
  html += '</div>';
  return html;
}

function wireToggleDetailsButtons(rootEl){
  if (!rootEl) return;
  rootEl.querySelectorAll('[data-toggle-details]').forEach(function(btn){
    var sel = btn.getAttribute('data-toggle-details');
    var scopeSel = btn.getAttribute('data-scope');
    var openTxt = btn.getAttribute('data-open-txt') || 'Mở tất cả';
    var closeTxt = btn.getAttribute('data-close-txt') || 'Thu gọn';
    btn.onclick = function(){
      var scope = scopeSel ? (rootEl.querySelector(scopeSel) || rootEl) : (btn.closest('.book-part-body, .acc-body, .theory-box') || rootEl);
      var targets = scope.querySelectorAll(sel);
      if (!targets.length) return;
      var anyClosed = Array.prototype.some.call(targets, function(d){ return !d.open; });
      targets.forEach(function(d){ d.open = anyClosed; });
      btn.textContent = anyClosed ? closeTxt : openTxt;
    };
  });
}

// Accordion helper: clicking a closed <summary> closes open sibling <details> at the same level
function wireExclusiveDetails(rootEl, selector){
  if (!rootEl) return;
  rootEl.querySelectorAll(selector).forEach(function(det){
    var sum = det.firstElementChild;
    if (!sum || sum.tagName !== 'SUMMARY' || sum._exclusiveWired) return;
    sum._exclusiveWired = true;
    sum.addEventListener('click', function(){
      if (!det.open) {
        var hadAbove = false;
        var parent = det.parentElement;
        if (parent) {
          Array.prototype.forEach.call(parent.children, function(sib){
            if (sib !== det && sib.matches && sib.matches(selector) && sib.open) {
              if (sib.offsetTop < det.offsetTop) hadAbove = true;
              sib.open = false;
            }
          });
        }
        if (hadAbove) {
          requestAnimationFrame(function(){
            det.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          });
        }
      }
    });
  });
}

function parseNumInput(raw, unitHint){
  var s = String(raw || '').trim();
  if (!s) return NaN;
  if (unitHint) {
    var uEsc = String(unitHint).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    s = s.replace(new RegExp('\\s*' + uEsc + '\\s*$', 'i'), '').trim();
  }
  s = s.replace(/\s*(cm\/s|m\/s²|m\/s|km\/h|mmol|mol|kcal|gam|kg|mg|ml|ms|hz|kpa|pa|kj|kw|amu|giờ|phút|độ|cm²|m²|cm³|m³|cm|mm|km|lít|%|°|g|h|s|l|m|n|j|v|a|w)\s*$/i, '').trim();
  var clean = s.replace(/\s+/g, '').replace(',', '.');
  if (/^[+-]?\d+(\.\d+)?\/[+-]?\d+(\.\d+)?$/.test(clean)) {
    var parts = clean.split('/');
    var den = parseFloat(parts[1]);
    return den !== 0 ? parseFloat(parts[0]) / den : NaN;
  }
  if (!/^[+-]?(\d+(\.\d+)?|\.\d+)$/.test(clean)) return NaN;
  return parseFloat(clean);
}

function getDiff(q){
  if (q && (q.d === 1 || q.d === 2 || q.d === 3 || q.d === 4)) return q.d;
  return q && q.n != null ? 2 : 1;
}
function diffBadge(q){
  var d = getDiff(q);
  return '<span class="badge d' + d + '">' + DIFF_SHORT[d] + '</span>';
}
function best(id){
  var p = loadProg()[id];
  return p && typeof p.best === 'number' ? p.best : null;
}
function isMastered(id){
  var b = best(id);
  return b != null && b >= 0.67;
}
function tag(s){ return '<span class="tag ' + s + '">' + (SUBJ[s] || s) + '</span>'; }
function pct(list){
  if (!list.length) return 0;
  var d = 0;
  list.forEach(function(t){ if (isMastered(t.id)) d++; });
  return Math.round((d / list.length) * 100);
}
function displayLessonTitle(t){
  return (t.sgk ? t.sgk + ': ' : '') + t.title;
}
function pickHint(topic, q){
  if (!topic) return '';
  var candidates = (topic.formulas || []).concat(topic.theory || []);
  if (!candidates.length) return '';
  var qWords = normVi((q.q || '') + ' ' + (q.u || '')).split(/[^a-z0-9]+/).filter(function(w){ return w.length >= 2; });
  var bestCand = candidates[0], bestScore = -1;
  candidates.forEach(function(c, idx){
    var cn = normVi(c);
    var sc = idx < (topic.formulas || []).length ? 0.5 : 0;
    qWords.forEach(function(w){ if (cn.indexOf(w) > -1) sc += (w.length >= 3 ? 2 : 1); });
    if (sc > bestScore) { bestScore = sc; bestCand = c; }
  });
  return bestCand;
}

function plainSpeechText(raw){
  var s = String(raw || '').split(' || ')[0];
  var subMap = {'₀':'0','₁':'1','₂':'2','₃':'3','₄':'4','₅':'5','₆':'6','₇':'7','₈':'8','₉':'9'};
  s = s.replace(/[₀-₉]/g, function(c){ return subMap[c] || c; });
  s = s.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '$1 chia $2');
  s = s.replace(/→|⇒/g, ', suy ra ');
  s = s.replace(/⇄/g, ' thuận nghịch ');
  s = s.replace(/·|×/g, ' nhân ');
  return s;
}

// Mistake tracking
function mistakeKey(topicId, qObj){
  return topicId + '::' + normVi(qObj && qObj.q ? qObj.q : '').slice(0, 90);
}
function recordMistake(topicId, qIdx, ok, qObj){
  if (!topicId || !qObj) return;
  var m = loadMistakes();
  var k = mistakeKey(topicId, qObj);
  var legacyKey = qIdx != null ? (topicId + '::' + qIdx) : null;
  if (ok) {
    var changed = false;
    if (m[k]) { delete m[k]; changed = true; }
    if (legacyKey && m[legacyKey]) { delete m[legacyKey]; changed = true; }
    if (changed) saveMistakes(m);
  } else {
    var prev = m[k] || { topicId: topicId, qIndex: qIdx, qSnap: JSON.parse(JSON.stringify(qObj)), count: 0 };
    prev.count = (prev.count || 0) + 1;
    prev.qSnap = JSON.parse(JSON.stringify(qObj));
    prev.lastWrongAt = Date.now();
    m[k] = prev;
    if (Object.keys(m).length > 120) {
      var sortedKeys = Object.keys(m).sort(function(a,b){ return (m[b].lastWrongAt||0) - (m[a].lastWrongAt||0); });
      var nextM = {};
      sortedKeys.slice(0, 100).forEach(function(sk){ nextM[sk] = m[sk]; });
      m = nextM;
    }
    saveMistakes(m);
  }
}
function getMistakeQuestion(entry){
  if (!entry) return null;
  if (entry.qSnap && entry.qSnap.q) return entry.qSnap;
  var t = byId[entry.topicId];
  if (t && entry.qIndex != null && t.questions[entry.qIndex]) return t.questions[entry.qIndex];
  return null;
}

function getTopicPool(topic, rounds){
  if (BANK && typeof BANK.getPoolForTopic === 'function') {
    return BANK.getPoolForTopic(topic, rounds || 5);
  }
  return (topic.questions || []).map(function(q, i){ return { q: q, staticIdx: i, d: getDiff(q) }; });
}

function getSortedGradeLessons(g){
  return D.filter(function(t){ return t.grade === g; }).slice().sort(function(a, b){
    return (a.order || 99) - (b.order || 99);
  });
}

function updateNavActive(routeKey){
  document.querySelectorAll('#main-nav a').forEach(function(a){
    var active = a.dataset.nav === routeKey;
    a.classList.toggle('active', active);
    if (active) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
  document.querySelectorAll('#bottom-nav a').forEach(function(a){
    var active = a.dataset.bnav === routeKey;
    a.classList.toggle('active', active);
  });
}

// ============================================================================
// SỔ ĐIỂM THÔNG TƯ 22 CHO ĐỦ CẢ 4 KHỐI LỚP 6, 7, 8, 9 (TINH GỌN)
// ============================================================================
function computeCircular22Gradebook(g){
  var examStats = loadExams();
  var gExams = EXAMS.filter(function(ex){ return ex.grade === g && ex.col; });
  var byCol = {};
  gExams.forEach(function(ex){
    var st = examStats[ex.id];
    byCol[ex.col] = {
      exam: ex,
      val: st && typeof st.best === 'number' ? round1(st.best * 10) : null
    };
  });

  function calcTermAvg(prefix){
    var cols = [prefix + '-tx1', prefix + '-tx2', prefix + '-tx3', prefix + '-tx4'];
    var gk = byCol[prefix + '-gk'] ? byCol[prefix + '-gk'].val : null;
    var ck = byCol[prefix + '-ck'] ? byCol[prefix + '-ck'].val : null;
    var presentTxs = cols.map(function(c){ return byCol[c] ? byCol[c].val : null; }).filter(function(v){ return v != null; });
    if (presentTxs.length < 3 || gk == null || ck == null) return null;
    var sumTx = presentTxs.reduce(function(a, b){ return a + b; }, 0);
    return round1((sumTx + 2 * gk + 3 * ck) / (presentTxs.length + 5));
  }

  var hk1 = calcTermAvg('hk1');
  var hk2 = calcTermAvg('hk2');
  var cn = (hk1 != null && hk2 != null) ? round1((hk1 + 2 * hk2) / 3) : null;
  return { byCol: byCol, hk1: hk1, hk2: hk2, cn: cn };
}

function rankLabel(score){
  if (score == null || isNaN(score)) return 'Chưa đủ cột';
  if (score >= 8.0) return 'Tốt (Giỏi)';
  if (score >= 6.5) return 'Khá';
  if (score >= 5.0) return 'Đạt';
  return 'Chưa đạt';
}

function mountGradebookWidget(containerEl, g){
  if (!containerEl) return;
  var gb = computeCircular22Gradebook(g);
  var simMode = false;

  function cellHtml(colKey, isMilestone){
    var info = gb.byCol[colKey];
    var cls = isMilestone ? ' class="gb-milestone"' : '';
    if (!info) return '<td' + cls + '>—</td>';
    var v = info.val;
    if (simMode) {
      return '<td' + cls + '><input type="text" class="gb-inp" data-col="' + colKey + '" value="' + (v != null ? fmtNum(v) : '8,0') + '"></td>';
    }
    if (v != null) {
      return '<td' + cls + '><a class="gb-cell-link ' + (v >= 6.5 ? 'done' : '') + '" href="#/lam-de/' + info.exam.id + '" title="' + esc(info.exam.title) + '">' + fmtNum(v.toFixed(1)) + '</a></td>';
    }
    return '<td' + cls + '><a class="gb-cell-link" href="#/lam-de/' + info.exam.id + '" title="' + esc(info.exam.title) + '">Làm ›</a></td>';
  }

  function render(){
    var h =
      '<div class="row between" style="margin-bottom:6px">' +
        '<span id="gb-year-summary" style="font-size:.88rem"><b>ĐTB cả năm:</b> ' + (gb.cn != null ? ('<b class="done">' + fmtNum(gb.cn.toFixed(1)) + '</b> (' + rankLabel(gb.cn) + ')') : '—') + '</span>' +
        '<button type="button" class="btn sm ' + (simMode ? 'on' : 'alt') + '" id="gb-sim-btn">' + (simMode ? '✕ Đóng nhẩm điểm' : 'Nhập thử điểm') + '</button>' +
      '</div>' +
      '<div class="gb-wrap">' +
        '<table class="gb-table">' +
          '<thead>' +
            '<tr>' +
              '<th>Kì</th>' +
              '<th>15p 1</th>' +
              '<th>15p 2</th>' +
              '<th class="gb-milestone">GK (×2)</th>' +
              '<th>15p 3</th>' +
              '<th>15p 4</th>' +
              '<th class="gb-milestone">CK (×3)</th>' +
              '<th>ĐTB</th>' +
            '</tr>' +
          '</thead>' +
          '<tbody>' +
            '<tr>' +
              '<td style="white-space:nowrap"><b>HK I</b></td>' +
              cellHtml('hk1-tx1', false) + cellHtml('hk1-tx2', false) + cellHtml('hk1-gk', true) +
              cellHtml('hk1-tx3', false) + cellHtml('hk1-tx4', false) + cellHtml('hk1-ck', true) +
              '<td id="gb-avg-hk1"><b>' + (gb.hk1 != null ? fmtNum(gb.hk1.toFixed(1)) : '—') + '</b></td>' +
            '</tr>' +
            '<tr>' +
              '<td style="white-space:nowrap"><b>HK II</b></td>' +
              cellHtml('hk2-tx1', false) + cellHtml('hk2-tx2', false) + cellHtml('hk2-gk', true) +
              cellHtml('hk2-tx3', false) + cellHtml('hk2-tx4', false) + cellHtml('hk2-ck', true) +
              '<td id="gb-avg-hk2"><b>' + (gb.hk2 != null ? fmtNum(gb.hk2.toFixed(1)) : '—') + '</b></td>' +
            '</tr>' +
          '</tbody>' +
        '</table>' +
      '</div>' +
      '<details class="inline-details">' +
        '<summary>Cách tính điểm Thông tư 22 <span class="chev"></span></summary>' +
        '<div class="inline-details-body">' +
          fmtMath('ĐTB_kì = \\frac{Tổng 15p + 2·GK + 3·CK}{Số bài 15p + 5}') +
          ' · ' + fmtMath('ĐTB_năm = \\frac{HK1 + 2·HK2}{3}') +
        '</div>' +
      '</details>';

    containerEl.innerHTML = h;
    containerEl.querySelector('#gb-sim-btn').onclick = function(){
      simMode = !simMode;
      render();
      if (simMode) recalcSim();
    };

    function recalcSim(){
      var vals = {};
      containerEl.querySelectorAll('.gb-inp').forEach(function(inp){
        var v = parseNumInput(inp.value);
        vals[inp.dataset.col] = (!isNaN(v) && v >= 0 && v <= 10) ? v : null;
      });
      function termSim(p){
        var txs = [vals[p+'-tx1'], vals[p+'-tx2'], vals[p+'-tx3'], vals[p+'-tx4']].filter(function(x){ return x != null; });
        var gk = vals[p+'-gk'], ck = vals[p+'-ck'];
        if (txs.length < 3 || gk == null || ck == null) return null;
        var sumTx = txs.reduce(function(a, b){ return a + b; }, 0);
        return round1((sumTx + 2*gk + 3*ck) / (txs.length + 5));
      }
      var s1 = termSim('hk1'), s2 = termSim('hk2');
      var scn = (s1 != null && s2 != null) ? round1((s1 + 2*s2) / 3) : null;
      containerEl.querySelector('#gb-avg-hk1').innerHTML = '<b>' + (s1 != null ? fmtNum(s1.toFixed(1)) : '—') + '</b>';
      containerEl.querySelector('#gb-avg-hk2').innerHTML = '<b>' + (s2 != null ? fmtNum(s2.toFixed(1)) : '—') + '</b>';
      containerEl.querySelector('#gb-year-summary').innerHTML =
        '<b>ĐTB nhẩm thử:</b> ' + (scn != null ? ('<b class="done">' + fmtNum(scn.toFixed(1)) + '</b> (' + rankLabel(scn) + ')') : 'Nhập điểm 0–10');
    }
    if (simMode) {
      containerEl.querySelectorAll('.gb-inp').forEach(function(inp){ inp.oninput = recalcSim; });
    }
  }
  render();
}

// ============================================================================
// QUESTION RENDERER & STEP-BY-STEP QUESTION DECK (1 CÂU MỖI LƯỢT / HIỆN CẢ BỘ)
// ============================================================================
function renderQ(q, displayIdx, opts){
  opts = opts || {};
  var deferred = !!opts.deferred;
  var box = document.createElement('article');
  box.className = 'q';

  var choices = q.o ? (opts.order && opts.order.length === q.o.length ? opts.order : shuffle(q.o)) : null;
  var topicBadge = opts.showTopic && opts.topic
    ? '<span class="badge">L' + opts.topic.grade + ' · ' + esc(opts.topic.sgk || opts.topic.title) + '</span>'
    : '';
  var secBadge = opts.sectionLabel
    ? '<span class="badge pri">' + esc(opts.sectionLabel) + '</span>'
    : '';

  var h =
    '<div class="q-head">' +
      '<div class="q-meta">' + secBadge + diffBadge(q) + topicBadge + '</div>' +
      '<div class="q-text"><b>Câu ' + (displayIdx + 1) + '.</b> ' + fmtMath(q.q) + '</div>' +
    '</div>';

  if (choices) {
    var letters = ['A', 'B', 'C', 'D'];
    choices.forEach(function(o, oi){
      h += '<button type="button" class="opt" data-val="' + esc(o) + '"><b>' + (letters[oi] || '') + '.</b> ' + fmtMath(o) + '</button>';
    });
  } else {
    h +=
      '<div class="num">' +
        '<input type="text" inputmode="decimal" placeholder="Nhập số (VD: 1,5)" aria-label="Nhập đáp án số">' +
        (q.u ? '<span class="badge">' + esc(q.u) + '</span>' : '') +
        (deferred ? '' : '<button type="button" class="btn sm" data-act="check">Kiểm tra</button>') +
      '</div>' +
      '<div class="fb-err" hidden></div>';
  }

  if (opts.hintText && !deferred) {
    h += '<div class="row" style="margin-top:6px"><button type="button" class="btn-ghost-xs" data-act="hint">Gợi ý</button></div>' +
         '<div class="q-hint" hidden>' + fmtMath(opts.hintText) + '</div>';
  }
  h += '<div class="fb" hidden></div>';
  box.innerHTML = h;

  var fb = box.querySelector('.fb');
  var errEl = box.querySelector('.fb-err');
  var hintBtn = box.querySelector('[data-act="hint"]');
  var hintBox = box.querySelector('.q-hint');
  var done = false;
  var lastOk = false;
  var selectedVal = null;

  if (hintBtn && hintBox) {
    hintBtn.onclick = function(){
      hintBox.hidden = !hintBox.hidden;
      hintBtn.textContent = hintBox.hidden ? 'Gợi ý' : 'Ẩn gợi ý';
    };
  }

  function applyResult(ok, answerState, silent, skipped){
    if (done) return;
    done = true;
    lastOk = !!ok;
    if (errEl) errEl.hidden = true;
    fb.hidden = false;
    fb.className = 'fb ' + (ok ? 'ok' : 'bad');

    var ansLine = '';
    if (!ok) {
      if (q.o) ansLine = ' · Đáp án: <b>' + fmtMath(q.o[0]) + '</b>';
      else if (q.n != null) ansLine = ' · Đáp số: <b>' + fmtNum(q.n) + (q.u ? ' ' + esc(q.u) : '') + '</b>';
    }
    var headText = ok ? '✓ Chính xác!' : (skipped ? 'Chưa làm' : '✕ Chưa đúng');
    fb.innerHTML =
      '<div><b>' + headText + '</b>' + ansLine + '</div>' +
      (q.w
        ? '<details class="fb-exp"><summary>Xem lời giải</summary><div class="fb-exp-body">' + fmtMath(q.w) + '</div></details>'
        : '');

    box.querySelectorAll('.opt, input, [data-act="check"]').forEach(function(x){ x.disabled = true; });
    if (hintBtn) hintBtn.hidden = true;
    if (!silent && typeof opts.onAnswer === 'function') opts.onAnswer(ok, answerState);
  }

  if (choices) {
    var optBtns = box.querySelectorAll('.opt');
    optBtns.forEach(function(b){
      b.onclick = function(){
        if (done) return;
        var val = b.dataset.val;
        if (deferred) {
          selectedVal = val;
          optBtns.forEach(function(x){ x.classList.toggle('selected', x === b); });
          if (typeof opts.onSelect === 'function') opts.onSelect();
          return;
        }
        var ok = val === q.o[0];
        b.classList.add(ok ? 'ok' : 'bad');
        if (!ok) {
          optBtns.forEach(function(x){ if (x.dataset.val === q.o[0]) x.classList.add('ok'); });
        }
        applyResult(ok, { ok: ok, chosen: val }, false, false);
      };
    });
    if (!deferred && opts.savedAnswer) {
      optBtns.forEach(function(b){
        if (b.dataset.val === opts.savedAnswer.chosen) b.classList.add(opts.savedAnswer.ok ? 'ok' : 'bad');
        if (!opts.savedAnswer.ok && b.dataset.val === q.o[0]) b.classList.add('ok');
      });
      applyResult(!!opts.savedAnswer.ok, opts.savedAnswer, true, false);
    }
  } else {
    var inp = box.querySelector('input');
    var chk = box.querySelector('[data-act="check"]');
    if (deferred) {
      inp.oninput = function(){ if (typeof opts.onSelect === 'function') opts.onSelect(); };
    } else {
      chk.onclick = function(){
        var v = parseNumInput(inp.value, q.u);
        if (isNaN(v)) {
          errEl.textContent = 'Nhập con số kết quả (VD: 2,5).';
          errEl.hidden = false;
          inp.focus();
          return;
        }
        var ok = Math.abs(v - q.n) <= (q.t || 0) + 1e-9;
        applyResult(ok, { ok: ok, input: inp.value.trim() }, false, false);
      };
      inp.onkeydown = function(e){ if (e.key === 'Enter') chk.click(); };
      if (opts.savedAnswer) {
        inp.value = opts.savedAnswer.input || '';
        applyResult(!!opts.savedAnswer.ok, opts.savedAnswer, true, false);
      }
    }
  }

  box._isAnswered = function(){
    if (choices) return selectedVal != null;
    var inputEl = box.querySelector('input');
    return inputEl && inputEl.value.trim().length > 0;
  };
  box._status = function(){
    if (done) return lastOk ? 'ok' : 'bad';
    if (box._isAnswered()) return 'ans';
    return '';
  };
  box._grade = function(){
    if (choices) {
      var skipped = selectedVal == null;
      var ok = !skipped && selectedVal === q.o[0];
      box.querySelectorAll('.opt').forEach(function(b){
        b.classList.remove('selected');
        if (b.dataset.val === q.o[0]) b.classList.add('ok');
        else if (b.dataset.val === selectedVal && !ok) b.classList.add('bad');
      });
      applyResult(ok, { ok: ok, chosen: selectedVal }, true, skipped);
      return { ok: ok, skipped: skipped, diff: getDiff(q) };
    } else {
      var inputEl = box.querySelector('input');
      var raw = inputEl ? inputEl.value.trim() : '';
      var skippedNum = raw.length === 0;
      var v = parseNumInput(raw, q.u);
      var okNum = !skippedNum && !isNaN(v) && Math.abs(v - q.n) <= (q.t || 0) + 1e-9;
      applyResult(okNum, { ok: okNum, input: raw }, true, skippedNum);
      return { ok: okNum, skipped: skippedNum, diff: getDiff(q) };
    }
  };
  box._choices = choices;
  return box;
}

function mountQuestionDeck(qsContainer, qNodes){
  qsContainer.innerHTML = '';
  if (!qNodes || !qNodes.length) {
    return { refresh: function(){}, goTo: function(){} };
  }

  var viewMode = 'step';
  var curIdx = 0;
  for (var k = 0; k < qNodes.length; k++) {
    if (qNodes[k]._status() === '') { curIdx = k; break; }
  }

  var bar = document.createElement('div');
  bar.className = 'q-deck-bar';
  var dotsEl = document.createElement('div');
  dotsEl.className = 'q-dots';
  var toggleBtn = document.createElement('button');
  toggleBtn.type = 'button';
  toggleBtn.className = 'btn-ghost-xs';

  bar.appendChild(dotsEl);
  if (qNodes.length > 1) bar.appendChild(toggleBtn);

  var cardsWrap = document.createElement('div');
  qNodes.forEach(function(n){ cardsWrap.appendChild(n); });

  var nav = document.createElement('div');
  nav.className = 'q-step-nav';
  nav.innerHTML =
    '<button type="button" class="btn sm subtle" data-act="prev">← Câu trước</button>' +
    '<span class="muted" style="font-size:.84rem;font-weight:600" data-role="pos"></span>' +
    '<button type="button" class="btn sm" data-act="next">Câu tiếp →</button>';

  var prevBtn = nav.querySelector('[data-act="prev"]');
  var nextBtn = nav.querySelector('[data-act="next"]');
  var posEl = nav.querySelector('[data-role="pos"]');

  qsContainer.appendChild(bar);
  qsContainer.appendChild(cardsWrap);
  qsContainer.appendChild(nav);

  function sync(){
    dotsEl.innerHTML = '';
    qNodes.forEach(function(n, idx){
      var st = n._status();
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'q-dot' + (viewMode === 'step' && idx === curIdx ? ' cur' : '') + (st ? ' ' + st : '');
      b.textContent = String(idx + 1);
      b.onclick = function(){
        curIdx = idx;
        if (viewMode !== 'step') {
          n.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
          sync();
        }
      };
      dotsEl.appendChild(b);
      n.hidden = (viewMode === 'step' && idx !== curIdx);
    });

    toggleBtn.textContent = viewMode === 'step'
      ? ('Hiện cả bộ (' + qNodes.length + ')')
      : 'Xem từng câu';

    nav.hidden = (viewMode !== 'step' || qNodes.length <= 1);
    prevBtn.disabled = curIdx <= 0;
    nextBtn.disabled = curIdx >= qNodes.length - 1;
    posEl.textContent = 'Câu ' + (curIdx + 1) + ' / ' + qNodes.length;
  }

  toggleBtn.onclick = function(){
    viewMode = viewMode === 'step' ? 'all' : 'step';
    sync();
  };
  prevBtn.onclick = function(){ if (curIdx > 0) { curIdx--; sync(); } };
  nextBtn.onclick = function(){ if (curIdx < qNodes.length - 1) { curIdx++; sync(); } };

  sync();
  return {
    refresh: sync,
    goTo: function(idx){
      if (idx >= 0 && idx < qNodes.length) { curIdx = idx; sync(); }
    }
  };
}

// --- Print Snapshot Builders ---
function createFreshLessonSnapshot(topic, diffFilter, currentQuestions){
  var items = [];
  var src = (currentQuestions && currentQuestions.length)
    ? currentQuestions
    : (BANK ? BANK.sampleLessonSet(topic, 4).items : getTopicPool(topic, 3));

  src.forEach(function(item){
    if (diffFilter && diffFilter !== 'all' && String(item.d) !== String(diffFilter)) return;
    items.push({ topicTitle: '', q: item.q });
  });

  var diffNote = diffFilter && diffFilter !== 'all' ? ' · ' + DIFF[Number(diffFilter)] : '';
  return window.KHTNPrint.prepare({
    prefix: 'L' + topic.grade,
    docTitle: 'PHIẾU BÀI TẬP THEO BÀI – KHTN LỚP ' + topic.grade,
    subtitle: (topic.chapCode ? topic.chapCode + ' · ' : '') + displayLessonTitle(topic) + diffNote,
    lesson: (!diffFilter || diffFilter === 'all') ? topic : null,
    items: items
  });
}

function buildExamItems(exam, levelMode){
  var all = [];
  var seenQ = {};
  (exam.topics || []).forEach(function(tid){
    var t = byId[tid];
    if (!t) return;
    var rounds = exam.topics.length === 1 ? 2 : 3;
    getTopicPool(t, rounds).forEach(function(item){
      if (seenQ[item.q.q]) return;
      seenQ[item.q.q] = true;
      all.push({ t: t, q: item.q, qIndex: item.staticIdx, d: item.d });
    });
  });

  var mode = levelMode || exam.presetLevel || 'standard';
  var target = Math.min(exam.count || 10, all.length);
  var b1 = shuffle(all.filter(function(x){ return x.d === 1; }));
  var b2 = shuffle(all.filter(function(x){ return x.d === 2; }));
  var b3 = shuffle(all.filter(function(x){ return x.d === 3; }));
  var b4 = shuffle(all.filter(function(x){ return x.d === 4; }));

  var want1, want2, want3, want4;
  if (mode === 'basic') {
    want1 = Math.round(target * 0.55);
    want2 = target - want1;
    want3 = 0; want4 = 0;
  } else if (mode === 'advanced') {
    want1 = Math.max(1, Math.round(target * 0.10));
    want2 = Math.round(target * 0.25);
    want3 = Math.round(target * 0.35);
    want4 = Math.max(0, target - want1 - want2 - want3);
  } else {
    want1 = Math.round(target * 0.40);
    want2 = Math.round(target * 0.30);
    want3 = Math.round(target * 0.20);
    want4 = Math.max(0, target - want1 - want2 - want3);
  }

  var picked = [];
  var used = {};
  function takeFrom(arr, n){
    for (var i = 0; i < arr.length && n > 0; i++) {
      var k = arr[i].q.q;
      if (used[k]) continue;
      used[k] = true;
      picked.push(arr[i]);
      n--;
    }
  }
  takeFrom(b1, want1);
  takeFrom(b2, want2);
  takeFrom(b3, want3);
  takeFrom(b4, want4);

  if (picked.length < target) {
    var rest = shuffle(all).filter(function(x){ return !used[x.q.q]; });
    takeFrom(rest, target - picked.length);
  }
  picked.sort(function(a, b){ return a.d - b.d; });
  return picked;
}

function collectExamProblemTypes(topicsList){
  var TYPES = window.KHTN_TYPES || {};
  var out = [];
  (topicsList || []).forEach(function(tid){
    var t = byId[tid];
    if (t && TYPES[tid] && TYPES[tid].length) {
      out.push({ title: displayLessonTitle(t), types: TYPES[tid] });
    }
  });
  return out;
}

function createFreshExamSnapshot(ex, levelMode){
  var m = levelMode || ex.presetLevel || 'standard';
  var mTxt = m === 'basic' ? 'Mức Cơ bản' : (m === 'advanced' ? 'Mức Nâng cao' : 'Chuẩn trên lớp');
  var picks = buildExamItems(ex, m);
  var snap = window.KHTNPrint.prepare({
    prefix: 'KT' + ex.grade,
    docTitle: ex.title.toUpperCase(),
    subtitle: 'KHTN Lớp ' + ex.grade + ' · ' + ex.term + (ex.weeks ? ' (' + ex.weeks + ')' : '') + ' · ' + mTxt,
    minutes: ex.minutes,
    isExam: true,
    problemTypes: collectExamProblemTypes(ex.topics),
    items: picks.map(function(p){ return { topicTitle: p.t.sgk || p.t.title, q: p.q }; })
  });
  quickExamSpecs[ex.id + '::' + m] = snap;
  return snap;
}

function getOrCreateExamPrintSpec(ex, levelMode){
  var key = ex.id + '::' + (levelMode || ex.presetLevel || 'standard');
  return quickExamSpecs[key] || createFreshExamSnapshot(ex, levelMode);
}

function wirePrintButtons(rootEl){
  rootEl.querySelectorAll('[data-print-both]').forEach(function(b){
    b.onclick = function(){
      var ex = examById[b.getAttribute('data-print-both')];
      if (!ex) return;
      window.KHTNPrint.open(getOrCreateExamPrintSpec(ex), 'both', {
        onRegenerate: function(){ return createFreshExamSnapshot(ex); }
      });
    };
  });
}

function renderExamRowHtml(ex, saved){
  var st = saved[ex.id];
  var kindBadge = ex.kind === 'gk'
    ? '<span class="badge warn">Giữa kì</span>'
    : (ex.kind === 'ck'
      ? '<span class="badge d4">Cuối kì</span>'
      : (ex.kind === '15p'
        ? '<span class="badge pri">15 phút</span>'
        : '<span class="badge">Tổng hợp</span>'));

  return (
    '<div class="ex-compact-row">' +
      '<div style="flex:1;min-width:210px">' +
        '<div class="row" style="gap:5px;margin-bottom:3px">' +
          kindBadge +
          '<span class="badge">' + ex.minutes + 'p · ' + ex.count + ' câu</span>' +
          (st ? '<span class="badge ' + (st.best >= 0.65 ? 'ok' : '') + '">' + score10(st.best) + 'đ</span>' : '') +
        '</div>' +
        '<div style="font-weight:600;font-size:.93rem">' + esc(ex.title) + '</div>' +
        (ex.scope
          ? '<details class="inline-details">' +
              '<summary>Phạm vi <span class="chev"></span></summary>' +
              '<div class="inline-details-body">' + esc(ex.scope) + '</div>' +
            '</details>'
          : '') +
      '</div>' +
      '<div class="row">' +
        '<a class="btn sm" href="#/lam-de/' + ex.id + '">Làm đề ›</a>' +
        '<button type="button" class="btn sm alt" data-print-both="' + ex.id + '">In PDF</button>' +
      '</div>' +
    '</div>'
  );
}

function mountExamExplorer(containerEl, g, initialFilter){
  var fKey = initialFilter || 'all';
  var examsAll = EXAMS.filter(function(ex){ return ex.grade === g; });
  var saved = loadExams();
  var filters = [
    { key:'all', label:'Cả năm' },
    { key:'hk1', label:'HK I' },
    { key:'hk2', label:'HK II' },
    { key:'15p', label:'15 phút' },
    { key:'gkck', label:'Giữa & Cuối kì' }
  ];
  function matchF(ex, k){
    if (!k || k === 'all') return true;
    if (k === 'hk1') return ex.term === 'HK1';
    if (k === 'hk2') return ex.term === 'HK2';
    if (k === '15p') return ex.kind === '15p';
    if (k === 'gkck') return ex.kind === 'gk' || ex.kind === 'ck';
    return true;
  }

  function render(){
    if (!examsAll.length) {
      containerEl.innerHTML = '<div class="empty">Chưa có đề kiểm tra cho lớp này.</div>';
      return;
    }
    var h =
      '<div class="page-top-bar" style="margin-bottom:6px">' +
        '<div class="filters" id="ex-stage-bar" style="margin:0">' +
          filters.map(function(f){
            var cnt = examsAll.filter(function(ex){ return matchF(ex, f.key); }).length;
            return '<button type="button" data-ef="' + f.key + '" class="' + (fKey === f.key ? 'on' : '') + '">' + f.label + ' (' + cnt + ')</button>';
          }).join('') +
        '</div>' +
        '<button type="button" class="btn-ghost-xs" data-toggle-details=".stage-acc" data-open-txt="Mở hết mục" data-close-txt="Thu gọn">Mở hết mục</button>' +
      '</div>';

    var activeStages = [1, 2, 3, 4, 5].filter(function(stNum){
      return examsAll.some(function(ex){ return (ex.stage || 1) === stNum && matchF(ex, fKey); });
    });
    var autoOpen = fKey !== 'all' && activeStages.length <= 2;

    activeStages.forEach(function(stNum){
      var group = examsAll.filter(function(ex){ return (ex.stage || 1) === stNum && matchF(ex, fKey); });
      var sm = STAGE_META[stNum];
      h +=
        '<details class="stage-acc ' + (sm.term === 'HK2' ? 'hk2' : '') + '"' + (autoOpen ? ' open' : '') + '>' +
          '<summary>' +
            '<span>' + esc(sm.title) + '</span>' +
            '<span class="toc-chap-meta"><span class="toc-cnt">' + group.length + ' đề</span><span class="chev"></span></span>' +
          '</summary>' +
          '<div class="stage-acc-body">' +
            group.map(function(ex){ return renderExamRowHtml(ex, saved); }).join('') +
          '</div>' +
        '</details>';
    });

    containerEl.innerHTML = h;
    containerEl.querySelectorAll('#ex-stage-bar button').forEach(function(b){
      b.onclick = function(){ fKey = b.dataset.ef; render(); };
    });
    wirePrintButtons(containerEl);
    wireToggleDetailsButtons(containerEl);
    wireExclusiveDetails(containerEl, '.stage-acc');
  }
  render();
}

// ============================================================================
// SEARCH HELPER FOR SHELF & BOOK VIEWS (CHỈ HIỆN KHI GÕ TÌM KIẾM)
// ============================================================================
function wireSearchBox(sInput, sOut, micBtn, priorityGrade){
  var SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  function runSearch(raw){
    var q = normVi(raw);
    if (!q) {
      sOut.hidden = true;
      sOut.innerHTML = '';
      return;
    }
    var matchedTopics = D.filter(function(t){
      var hay = normVi(t.title + ' ' + (t.chapCode || '') + ' ' + (t.chapTitle || '') + ' ' + (t.sgk || '') + ' lop ' + t.grade + ' ' + t.formulas.join(' '));
      return hay.indexOf(q) > -1;
    }).sort(function(a, b){
      var ag = (priorityGrade && a.grade === priorityGrade) ? 0 : 1;
      var bg = (priorityGrade && b.grade === priorityGrade) ? 0 : 1;
      return ag - bg || a.grade - b.grade || (a.order || 99) - (b.order || 99);
    }).slice(0, 8);

    var matchedExams = EXAMS.filter(function(ex){
      return normVi(ex.title + ' lop ' + ex.grade + ' ' + ex.scope).indexOf(q) > -1;
    }).sort(function(a, b){
      var ag = (priorityGrade && a.grade === priorityGrade) ? 0 : 1;
      var bg = (priorityGrade && b.grade === priorityGrade) ? 0 : 1;
      return ag - bg || a.grade - b.grade;
    }).slice(0, 4);

    if (!matchedTopics.length && !matchedExams.length) {
      sOut.hidden = false;
      sOut.innerHTML = '<div class="empty" style="padding:10px">Không tìm thấy mục khớp <b>"' + esc(raw) + '"</b>.</div>';
      return;
    }

    var rows = '';
    matchedTopics.forEach(function(t){
      rows +=
        '<div class="s-item">' +
          '<div>' + tag(t.subj) + ' <b>L' + t.grade + ' · ' + esc(displayLessonTitle(t)) + '</b></div>' +
          '<a class="btn sm" href="#/bai/' + t.id + '">Mở bài ›</a>' +
        '</div>';
    });
    matchedExams.forEach(function(ex){
      rows +=
        '<div class="s-item">' +
          '<div><span class="badge pri">Đề L' + ex.grade + '</span> <b>' + esc(ex.title) + '</b></div>' +
          '<a class="btn sm alt" href="#/lam-de/' + ex.id + '">Làm đề ›</a>' +
        '</div>';
    });
    sOut.hidden = false;
    sOut.innerHTML = rows;
  }

  if (sInput) {
    sInput.oninput = function(){ runSearch(sInput.value); };
  }
  if (micBtn && SpeechRec) {
    var rec = null;
    micBtn.onclick = function(){
      if (rec) { try { rec.stop(); } catch (e) {} return; }
      try {
        rec = new SpeechRec();
        rec.lang = 'vi-VN';
        rec.interimResults = false;
        micBtn.classList.add('listening');
        micBtn.textContent = '…';
        rec.onresult = function(ev){
          var txt = ev.results && ev.results[0] && ev.results[0][0] ? ev.results[0][0].transcript : '';
          if (txt && sInput) { sInput.value = txt; runSearch(txt); }
        };
        rec.onend = function(){
          micBtn.classList.remove('listening');
          micBtn.textContent = 'Mic';
          rec = null;
        };
        rec.start();
      } catch (e) {
        micBtn.classList.remove('listening');
        rec = null;
      }
    };
  }
  return runSearch;
}

// ============================================================================
// STEP 1 (TRANG CHỦ #/): TỦ SÁCH 4 QUYỂN – ẤN VÔ SÁCH MỚI MỞ NỘI DUNG BÊN TRONG
// ============================================================================
function countUniqueChapters(lessons){
  var seen = {};
  lessons.forEach(function(t){
    seen[(t.chapCode || '') + '::' + (t.chapTitle || '')] = true;
  });
  return Object.keys(seen).length;
}

function bookshelfHome(){
  setShellMode('shelf');
  updateNavActive('home');

  var meta = loadMeta();
  var recentTopic = meta.lastLessonId && byId[meta.lastLessonId] ? byId[meta.lastLessonId] : null;
  var mistakeCount = Object.keys(loadMistakes()).length;
  var SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition || null;

  var h =
    '<section class="shelf-hero" aria-label="Giới thiệu và tìm kiếm nhanh">' +
      '<div class="shelf-title-wrap">' +
        '<h1>SciBook</h1>' +
        '<p>Sổ tay tự học, tra cứu công thức &amp; luyện đề Khoa học tự nhiên Lớp 6 – 9</p>' +
      '</div>' +
      '<div>' +
        '<div class="shelf-search-row">' +
          '<input type="search" id="shelf-search" placeholder="Tìm bài học, công thức (VD: mol, áp suất…)" aria-label="Tìm bài học hoặc công thức">' +
          (SpeechRec ? '<button type="button" class="mic-btn" id="shelf-mic" title="Tìm bằng giọng nói">Mic</button>' : '') +
        '</div>' +
        '<div class="shelf-chips">' +
          '<span class="muted" style="font-size:.77rem">Gợi ý:</span>' +
          '<button type="button" class="chip" data-q="mol">Mol 8</button>' +
          '<button type="button" class="chip" data-q="áp suất">Áp suất 8</button>' +
          '<button type="button" class="chip" data-q="tốc độ">Tốc độ 7</button>' +
          '<button type="button" class="chip" data-q="di truyền">Di truyền 9</button>' +
        '</div>' +
      '</div>' +
    '</section>' +
    '<div id="shelf-search-out" class="search-results" hidden></div>';

  if (recentTopic || mistakeCount > 0) {
    h += '<div class="toc-bookmark">';
    if (recentTopic) {
      h += '<div>Đang học dở: <a href="#/bai/' + recentTopic.id + '">Sách Lớp ' + recentTopic.grade + ' · ' + esc(displayLessonTitle(recentTopic)) + ' ›</a></div>';
    } else {
      h += '<span></span>';
    }
    if (mistakeCount > 0) {
      h += '<a href="#/luyen-tap/cau-sai">Ôn lại ' + mistakeCount + ' câu sai ›</a>';
    }
    h += '</div>';
  }

  h +=
    '<div class="shelf-step-hint">' +
      '<strong>Bước 1 · Chọn quyển sách muốn mở</strong>' +
      '<span>Ấn vào sách khối lớp để xem từng học kì, chương và bài học</span>' +
    '</div>' +
    '<div class="shelf-grid" role="list" aria-label="Tủ sách Khoa học tự nhiên Lớp 6 đến Lớp 9">';

  [6, 7, 8, 9].forEach(function(gr){
    var lessons = getSortedGradeLessons(gr);
    var chapCnt = countUniqueChapters(lessons);
    var examCnt = EXAMS.filter(function(ex){ return ex.grade === gr; }).length;
    var doneCnt = lessons.filter(function(t){ return isMastered(t.id); }).length;
    var p = lessons.length ? Math.round((doneCnt / lessons.length) * 100) : 0;
    var bm = GRADE_BOOK_META[gr];

    h +=
      '<a class="book-card" role="listitem" data-grade="' + gr + '" href="#/lop/' + gr + '" aria-label="Mở quyển sách Khoa học tự nhiên Lớp ' + gr + '">' +
        '<div>' +
          '<span class="book-kicker">' + (doneCnt > 0 ? ('Đã vững ' + doneCnt + '/' + lessons.length + ' bài') : 'Sách KHTN · KNTT') + '</span>' +
          '<div class="book-grade">Lớp ' + gr + '</div>' +
          '<div class="book-sub">' + esc(bm.sub) + '</div>' +
          '<p class="book-topics">' + esc(bm.topics) + '</p>' +
        '</div>' +
        '<div class="book-foot">' +
          '<div class="book-counts">' + chapCnt + ' chương · ' + lessons.length + ' bài · ' + examCnt + ' đề</div>' +
          (doneCnt > 0 ? '<div class="book-prog-mini" aria-hidden="true"><i style="width:' + p + '%"></i></div>' : '') +
          '<div class="book-open-cta"><span>Mở sách</span><span aria-hidden="true">→</span></div>' +
        '</div>' +
      '</a>';
  });

  h += '</div>';
  app.innerHTML = h;

  var sInput = document.getElementById('shelf-search');
  var sOut = document.getElementById('shelf-search-out');
  var micBtn = document.getElementById('shelf-mic');
  var runSearch = wireSearchBox(sInput, sOut, micBtn, getPrefGrade());

  app.querySelectorAll('.shelf-chips .chip').forEach(function(chip){
    chip.onclick = function(){
      var kw = chip.getAttribute('data-q') || '';
      if (sInput.value === kw) {
        sInput.value = '';
        runSearch('');
      } else {
        sInput.value = kw;
        runSearch(kw);
        sInput.focus();
      }
    };
  });
}

// ============================================================================
// STEP 2 & 3 (#/lop/:g): MỞ QUYỂN SÁCH -> ẤN HỌC KÌ -> ẤN CHƯƠNG -> ẤN BÀI
// ============================================================================
function bookToc(g, initialMode){
  if ([6,7,8,9].indexOf(g) === -1) {
    bookshelfHome();
    return;
  }
  setPrefGrade(g);
  setShellMode('book', g);
  updateNavActive('home');

  var meta = loadMeta();
  var recentTopic = meta.lastLessonId && byId[meta.lastLessonId] && byId[meta.lastLessonId].grade === g
    ? byId[meta.lastLessonId]
    : null;
  var openPart = ['hk1', 'hk2', 'exams', 'formulas'].indexOf(initialMode) > -1 ? initialMode : null;
  var SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition || null;

  function openGradeFormulaPrint(gradeNum){
    var TYPES = window.KHTN_TYPES || {};
    var gList = getSortedGradeLessons(gradeNum);
    var spec = window.KHTNPrint.prepare({
      prefix: 'ST' + gradeNum,
      subtitle: 'Tóm tắt công thức & dạng bài KHTN Lớp ' + gradeNum + ' (Bộ SGK thống nhất)',
      formulaGroups: gList.map(function(t){
        return { grade: t.grade, title: (t.chapCode ? t.chapCode + ' · ' : '') + displayLessonTitle(t), formulas: t.formulas, types: TYPES[t.id] || null };
      })
    });
    window.KHTNPrint.open(spec, 'formulas');
  }

  function renderStageChapters(lessons, gExams, savedEx, stageNum){
    var stLessons = lessons.filter(function(t){ return (t.stage || 1) === stageNum; });
    if (!stLessons.length) return '';

    var chapters = [];
    var chapMap = {};
    stLessons.forEach(function(t){
      var key = (t.chapCode || '') + '::' + (t.chapTitle || '');
      if (!chapMap[key]) {
        chapMap[key] = { chapCode: t.chapCode || '', chapTitle: t.chapTitle || '', subj: t.subj, items: [] };
        chapters.push(chapMap[key]);
      }
      chapMap[key].items.push(t);
    });

    var out = '';
    chapters.forEach(function(ch){
      var doneInChap = ch.items.filter(function(t){ return isMastered(t.id); }).length;
      var cntLabel = doneInChap > 0 ? (doneInChap + '/' + ch.items.length + ' bài') : (ch.items.length + ' bài');

      out +=
        '<details class="toc-chapter">' +
          '<summary class="toc-chap-sum">' +
            '<span class="toc-chap-title">' +
              (ch.chapCode ? '<em>' + esc(ch.chapCode) + '.</em> ' : '') + esc(ch.chapTitle) +
            '</span>' +
            '<span class="toc-chap-meta">' +
              tag(ch.subj) +
              '<span class="toc-cnt">' + cntLabel + '</span>' +
              '<span class="chev"></span>' +
            '</span>' +
          '</summary>' +
          '<div class="toc-chap-body">';

      ch.items.forEach(function(t){
        var b = best(t.id);
        var rightTxt = b != null
          ? ((b >= 0.67 ? '✓ ' : '') + score10(b) + 'đ')
          : '›';
        var rightCls = (b != null && b >= 0.67) ? 'toc-right done' : 'toc-right';

        out +=
          '<a class="toc-item" href="#/bai/' + t.id + '">' +
            '<span class="toc-item-left">' +
              (t.sgk ? '<span class="toc-sgk">' + esc(t.sgk) + '</span>' : '') +
              '<span class="toc-name">' + esc(t.title) + '</span>' +
            '</span>' +
            '<span class="toc-dots" aria-hidden="true"></span>' +
            '<span class="' + rightCls + '">' + rightTxt + '</span>' +
          '</a>';
      });
      out += '</div></details>';
    });

    var stQuizzes = gExams.filter(function(ex){ return ex.stage === stageNum && ex.kind === '15p' && ex.col; });
    var milestoneEx = gExams.find(function(ex){ return ex.stage === stageNum && (ex.kind === 'gk' || ex.kind === 'ck'); });
    if (milestoneEx || stQuizzes.length) {
      var totalExCnt = stQuizzes.length + (milestoneEx ? 1 : 0);
      var msStat = milestoneEx && savedEx[milestoneEx.id] ? ' · ' + score10(savedEx[milestoneEx.id].best) + 'đ' : '';
      var msHeading = milestoneEx ? milestoneEx.title : 'Đề kiểm tra 15 phút';

      out +=
        '<details class="toc-milestone">' +
          '<summary class="toc-ms-sum">' +
            '<span><b>★ ' + esc(msHeading) + msStat + '</b></span>' +
            '<span class="toc-chap-meta"><span class="toc-cnt">' + totalExCnt + ' đề</span><span class="chev"></span></span>' +
          '</summary>' +
          '<div class="toc-ms-body">' +
            '<div class="toc-ms-main">' +
              (stQuizzes.length
                ? '<div class="toc-ms-quiz-links">' +
                    stQuizzes.map(function(qx){
                      var qDone = savedEx[qx.id] ? ' · ' + score10(savedEx[qx.id].best) + 'đ' : '';
                      return '<a class="toc-ms-pill" href="#/lam-de/' + qx.id + '">' + esc(qx.weeks ? '15p ' + qx.weeks : 'Đề 15p') + qDone + ' ›</a>';
                    }).join('') +
                  '</div>'
                : '') +
            '</div>' +
            (milestoneEx
              ? '<div class="row">' +
                  '<a class="btn sm" href="#/lam-de/' + milestoneEx.id + '">Làm đề ' + milestoneEx.minutes + 'p ›</a>' +
                  '<button type="button" class="btn sm alt" data-print-both="' + milestoneEx.id + '">In PDF</button>' +
                '</div>'
              : '') +
          '</div>' +
        '</details>';
    }
    return out;
  }

  function buildTermTocHtml(gradeNum, termKey){
    var lessons = getSortedGradeLessons(gradeNum);
    var gExams = EXAMS.filter(function(ex){ return ex.grade === gradeNum; });
    var savedEx = loadExams();
    var stages = termKey === 'hk2' ? [3, 4] : [1, 2];

    var html =
      '<div class="theory-toolbar">' +
        '<button type="button" class="btn-ghost-xs" data-toggle-details=".toc-chapter,.toc-milestone" data-open-txt="Mở hết chương" data-close-txt="Thu gọn chương">Mở hết chương</button>' +
      '</div>';
    stages.forEach(function(st){
      html += renderStageChapters(lessons, gExams, savedEx, st);
    });
    return html;
  }

  function buildGradeFormulasHtml(gradeNum){
    var lessons = getSortedGradeLessons(gradeNum).filter(function(t){ return t.formulas && t.formulas.length; });
    var html =
      '<div class="page-top-bar" style="margin-bottom:8px">' +
        '<span class="muted" style="font-size:.83rem">Ấn vào từng bài để mở công thức, ấn tiếp vào công thức để xem giải thích kí hiệu.</span>' +
        '<div class="row">' +
          '<button type="button" class="btn sm alt" id="part-print-formulas">In Sổ tay L' + gradeNum + '</button>' +
          '<button type="button" class="btn-ghost-xs" data-toggle-details=".toc-chapter" data-open-txt="Mở hết bài" data-close-txt="Thu gọn">Mở hết bài</button>' +
        '</div>' +
      '</div>';
    lessons.forEach(function(t){
      html +=
        '<details class="toc-chapter">' +
          '<summary class="toc-chap-sum">' +
            '<span class="toc-chap-title">' + esc(displayLessonTitle(t)) + '</span>' +
            '<span class="toc-chap-meta">' +
              tag(t.subj) +
              '<span class="toc-cnt">' + t.formulas.length + ' mục</span>' +
              '<span class="chev"></span>' +
            '</span>' +
          '</summary>' +
          '<div class="toc-chap-body" style="padding:8px 12px 10px">' +
            t.formulas.map(function(f){ return '<div class="formula">' + fmtFormulaInteractive(f) + '</div>'; }).join('') +
            '<div style="margin-top:6px"><a class="btn-ghost-xs" style="text-decoration:none;display:inline-block" href="#/bai/' + t.id + '">Vào học bài này ›</a></div>' +
          '</div>' +
        '</details>';
    });
    return html;
  }

  function renderPage(){
    var lessons = getSortedGradeLessons(g);
    var hk1Lessons = lessons.filter(function(t){ return (t.stage || 1) <= 2; });
    var hk2Lessons = lessons.filter(function(t){ return (t.stage || 1) > 2; });
    var hk1Chaps = countUniqueChapters(hk1Lessons);
    var hk2Chaps = countUniqueChapters(hk2Lessons);
    var gExams = EXAMS.filter(function(ex){ return ex.grade === g; });
    var formulaLessons = lessons.filter(function(t){ return t.formulas && t.formulas.length; });
    var doneCnt = lessons.filter(function(t){ return isMastered(t.id); }).length;
    var pdfUrl = SGK_PDF_URLS[g];

    var h =
      '<div class="crumb" style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px">' +
        '<a href="#/" style="font-weight:700">← Đóng sách · Về kệ 4 quyển</a>' +
        '<div class="toc-grades" role="navigation" aria-label="Đổi nhanh sách khối khác">' +
          [6,7,8,9].map(function(gr){
            return '<a class="toc-grade-btn ' + (gr === g ? 'on' : '') + '" href="#/lop/' + gr + '" style="padding:4px 10px;font-size:.8rem">Sách ' + gr + '</a>';
          }).join('') +
        '</div>' +
      '</div>' +
      '<div class="toc-header">' +
        '<div>' +
          '<div class="toc-eyebrow">Quyển sách đang mở</div>' +
          '<h1 style="margin:0 0 4px">Khoa học tự nhiên Lớp ' + g + '</h1>' +
          '<div class="toc-sub">' +
            '<span>' + countUniqueChapters(lessons) + ' chương · <b>' + lessons.length + '</b> bài · Đã vững <b>' + doneCnt + '/' + lessons.length + '</b></span>' +
            (pdfUrl ? '<a class="toc-pdf-link" href="' + esc(pdfUrl) + '" target="_blank" rel="noopener">SGK PDF ↗</a>' : '') +
            '<button type="button" class="toc-pdf-link" id="toc-print-formulas" style="border:0;cursor:pointer;font-family:inherit">In công thức</button>' +
          '</div>' +
        '</div>' +
        '<div class="toc-search-wrap" style="max-width:320px">' +
          '<input type="search" id="toc-search" placeholder="Tìm nhanh trong Lớp ' + g + '…" aria-label="Tìm bài học hoặc công thức trong Lớp ' + g + '">' +
          (SpeechRec ? '<button type="button" class="mic-btn" id="toc-mic" title="Tìm bằng giọng nói">Mic</button>' : '') +
        '</div>' +
      '</div>' +
      '<div id="toc-search-out" class="search-results" hidden></div>';

    if (recentTopic) {
      h +=
        '<div class="toc-bookmark">' +
          '<div>Đọc tiếp trong sách này: <a href="#/bai/' + recentTopic.id + '">' + esc(displayLessonTitle(recentTopic)) + ' ›</a></div>' +
        '</div>';
    }

    h +=
      '<div class="shelf-step-hint" style="margin-bottom:8px">' +
        '<strong>Bước 2 · Chọn phần trong sách Lớp ' + g + '</strong>' +
        '<span>Ấn vào mục để mở chương · Ấn vào chương để mở bài</span>' +
      '</div>' +
      '<div id="book-parts-wrap">' +
        // Phần 1: Học kì I
        '<details class="book-part" data-part="hk1"' + (openPart === 'hk1' ? ' open' : '') + '>' +
          '<summary class="book-part-sum">' +
            '<span class="book-part-left">' +
              '<span class="book-part-step">Phần I</span>' +
              '<span class="book-part-title">Mục lục Học kì I</span>' +
              '<span class="book-part-desc">Ấn để mở ' + hk1Chaps + ' chương đầu năm &amp; đề kiểm tra Học kì I</span>' +
            '</span>' +
            '<span class="toc-chap-meta">' +
              '<span class="toc-cnt">' + hk1Chaps + ' chương · ' + hk1Lessons.length + ' bài</span>' +
              '<span class="chev"></span>' +
            '</span>' +
          '</summary>' +
          '<div class="book-part-body" id="part-hk1-body">' + buildTermTocHtml(g, 'hk1') + '</div>' +
        '</details>' +

        // Phần 2: Học kì II
        '<details class="book-part" data-part="hk2"' + (openPart === 'hk2' ? ' open' : '') + '>' +
          '<summary class="book-part-sum">' +
            '<span class="book-part-left">' +
              '<span class="book-part-step">Phần II</span>' +
              '<span class="book-part-title">Mục lục Học kì II</span>' +
              '<span class="book-part-desc">Ấn để mở ' + hk2Chaps + ' chương nửa cuối năm &amp; đề kiểm tra Học kì II</span>' +
            '</span>' +
            '<span class="toc-chap-meta">' +
              '<span class="toc-cnt">' + hk2Chaps + ' chương · ' + hk2Lessons.length + ' bài</span>' +
              '<span class="chev"></span>' +
            '</span>' +
          '</summary>' +
          '<div class="book-part-body" id="part-hk2-body">' + buildTermTocHtml(g, 'hk2') + '</div>' +
        '</details>' +

        // Phần 3: Bộ đề kiểm tra
        '<details class="book-part" data-part="exams"' + (openPart === 'exams' ? ' open' : '') + '>' +
          '<summary class="book-part-sum">' +
            '<span class="book-part-left">' +
              '<span class="book-part-step">Phần III</span>' +
              '<span class="book-part-title">Bộ đề kiểm tra 15 phút · Giữa kì · Cuối kì</span>' +
              '<span class="book-part-desc">Làm trực tuyến có bấm giờ hoặc in đề giấy A4 kèm đáp án</span>' +
            '</span>' +
            '<span class="toc-chap-meta">' +
              '<span class="toc-cnt">' + gExams.length + ' đề</span>' +
              '<span class="chev"></span>' +
            '</span>' +
          '</summary>' +
          '<div class="book-part-body" id="part-exams-body"></div>' +
        '</details>' +

        // Phần 4: Sổ tay công thức cả năm
        '<details class="book-part" data-part="formulas"' + (openPart === 'formulas' ? ' open' : '') + '>' +
          '<summary class="book-part-sum">' +
            '<span class="book-part-left">' +
              '<span class="book-part-step">Phần IV</span>' +
              '<span class="book-part-title">Sổ tay công thức &amp; ghi nhớ Lớp ' + g + '</span>' +
              '<span class="book-part-desc">Tra cứu nhanh công thức theo từng bài và giải thích đại lượng, đơn vị</span>' +
            '</span>' +
            '<span class="toc-chap-meta">' +
              '<span class="toc-cnt">' + formulaLessons.length + ' bài</span>' +
              '<span class="chev"></span>' +
            '</span>' +
          '</summary>' +
          '<div class="book-part-body" id="part-formulas-body">' + buildGradeFormulasHtml(g) + '</div>' +
        '</details>' +
      '</div>';

    app.innerHTML = h;

    document.getElementById('toc-print-formulas').onclick = function(){ openGradeFormulaPrint(g); };
    var partPrintBtn = document.getElementById('part-print-formulas');
    if (partPrintBtn) partPrintBtn.onclick = function(){ openGradeFormulaPrint(g); };

    mountExamExplorer(document.getElementById('part-exams-body'), g, 'all');

    var partsWrap = document.getElementById('book-parts-wrap');
    wirePrintButtons(partsWrap);
    wireToggleDetailsButtons(partsWrap);
    wireExclusiveDetails(partsWrap, '.book-part');
    wireExclusiveDetails(document.getElementById('part-hk1-body'), '.toc-chapter, .toc-milestone');
    wireExclusiveDetails(document.getElementById('part-hk2-body'), '.toc-chapter, .toc-milestone');
    wireExclusiveDetails(document.getElementById('part-formulas-body'), '.toc-chapter');

    wireSearchBox(
      document.getElementById('toc-search'),
      document.getElementById('toc-search-out'),
      document.getElementById('toc-mic'),
      g
    );
  }

  renderPage();
}

// ============================================================================
// VIEW 3: BÀI HỌC (BẤM TỪNG MỤC MỚI HIỆN: LÝ THUYẾT · CÔNG THỨC · DẠNG BÀI · CÂU HỎI)
// ============================================================================
function lesson(id){
  var t = byId[id];
  if (!t) {
    setShellMode('shelf');
    updateNavActive('home');
    app.innerHTML = '<div class="empty"><p>Không tìm thấy bài học.</p><a class="btn" href="#/">Về Tủ sách</a></div>';
    return;
  }
  setPrefGrade(t.grade);
  setShellMode('book', t.grade);
  updateNavActive('home');

  var meta = loadMeta();
  meta.lastLessonId = id;
  saveMeta(meta);

  var sameGrade = getSortedGradeLessons(t.grade);
  var pos = sameGrade.findIndex(function(x){ return x.id === id; });
  var prevLesson = pos > 0 ? sameGrade[pos - 1] : null;
  var nextLesson = pos > -1 && pos < sameGrade.length - 1 ? sameGrade[pos + 1] : null;

  var relatedExams = EXAMS.filter(function(ex){
    return ex.topics.indexOf(id) > -1 && (!t.stage || !ex.stage || ex.stage === t.stage);
  });

  var sampled = BANK ? BANK.sampleLessonSet(t, 4) : { totalAvailable: t.questions.length, items: getTopicPool(t, 1) };
  var sessionItems = sampled.items;
  var sessionAnswers = {};
  var sessionOrders = {};
  var lockedPrintSpec = null;

  var availDiffs = [1, 2, 3, 4].filter(function(lv){
    return sessionItems.some(function(it){ return it.d === lv; });
  });
  var selectedDiff = 'all';
  var canSpeak = typeof window.speechSynthesis !== 'undefined' && typeof window.SpeechSynthesisUtterance === 'function';
  var topicTypes = (window.KHTN_TYPES && window.KHTN_TYPES[t.id]) ? window.KHTN_TYPES[t.id] : null;
  var examplesCount = topicTypes && topicTypes.length ? topicTypes.length : (t.examples ? t.examples.length : 0);

  var h =
    '<div class="crumb">' +
      '<a href="#/">Tủ sách</a> · <a href="#/lop/' + t.grade + '">Sách Lớp ' + t.grade + '</a>' +
      (t.chapCode ? ' · ' + esc(t.chapCode) : '') +
    '</div>' +
    '<div class="page-top-bar">' +
      '<div class="row">' +
        tag(t.subj) +
        (t.sgk ? '<span class="badge pri">' + esc(t.sgk) + '</span>' : '') +
        (t.term ? '<span class="badge">' + esc(t.term) + '</span>' : '') +
      '</div>' +
      '<div class="row">' +
        (canSpeak ? '<button type="button" class="btn sm subtle" id="btn-tts">Nghe</button>' : '') +
        '<button type="button" class="btn sm alt" id="top-dl-study">In bài</button>' +
      '</div>' +
    '</div>' +
    '<h1>' + esc(displayLessonTitle(t)) + '</h1>' +
    '<div class="theory-toolbar">' +
      '<button type="button" class="btn-ghost-xs" data-toggle-details=".acc-panel" data-open-txt="Mở tất cả mục" data-close-txt="Thu gọn mục">Mở tất cả mục</button>' +
    '</div>';

  // Panel 1: Lý thuyết (bấm mới hiện)
  h +=
    '<details class="acc-panel">' +
      '<summary class="acc-sum">' +
        '<span class="acc-title">1. Tóm tắt lý thuyết</span>' +
        '<span class="acc-meta"><span class="toc-cnt">' + t.theory.length + ' ý</span><span class="chev"></span></span>' +
      '</summary>' +
      '<div class="acc-body">' + renderTheoryInteractive(t.theory) + '</div>' +
    '</details>';

  // Panel 2: Công thức (bấm mới hiện + bấm từng công thức để xem giải thích đại lượng)
  if (t.formulas && t.formulas.length) {
    h +=
      '<details class="acc-panel">' +
        '<summary class="acc-sum">' +
          '<span class="acc-title">2. Công thức &amp; ghi nhớ</span>' +
          '<span class="acc-meta"><span class="toc-cnt">' + t.formulas.length + ' mục</span><span class="chev"></span></span>' +
        '</summary>' +
        '<div class="acc-body">' +
          t.formulas.map(function(f){ return '<div class="formula">' + fmtFormulaInteractive(f) + '</div>'; }).join('') +
        '</div>' +
      '</details>';
  }

  // Panel 3: Dạng bài & Ví dụ mẫu (bấm mới hiện + bấm từng dạng để xem cách làm & lời giải)
  if (examplesCount > 0) {
    h +=
      '<details class="acc-panel">' +
        '<summary class="acc-sum">' +
          '<span class="acc-title">3. Dạng bài &amp; Ví dụ mẫu</span>' +
          '<span class="acc-meta"><span class="toc-cnt">' + examplesCount + (topicTypes && topicTypes.length ? ' dạng' : ' ví dụ') + '</span><span class="chev"></span></span>' +
        '</summary>' +
        '<div class="acc-body">';

    if (topicTypes && topicTypes.length) {
      topicTypes.forEach(function(tp){
        h +=
          '<details class="type-card type-acc">' +
            '<summary class="type-sum"><span>' + fmtMath(tp.name) + '</span><span class="chev"></span></summary>' +
            '<div class="type-body">' +
              '<div class="type-method"><b>Cách làm:</b> ' + fmtMath(tp.method) + '</div>' +
              (tp.ex
                ? '<details style="margin-top:6px">' +
                    '<summary>Xem ví dụ &amp; lời giải</summary>' +
                    '<div class="type-ex"><b>Ví dụ:</b> ' + fmtMath(tp.ex) +
                      (tp.sol ? '<br><b>Lời giải:</b> ' + fmtMath(tp.sol) : '') +
                    '</div>' +
                  '</details>'
                : '') +
            '</div>' +
          '</details>';
      });
    } else if (t.examples && t.examples.length) {
      t.examples.forEach(function(ex, ei){
        var shortQ = ex.q.length > 62 ? ex.q.slice(0, 58) + '…' : ex.q;
        h +=
          '<details class="example-card type-acc">' +
            '<summary class="type-sum"><span>Ví dụ ' + (ei + 1) + ': ' + esc(shortQ) + '</span><span class="chev"></span></summary>' +
            '<div class="type-body">' +
              '<div>' + fmtMath(ex.q) + '</div>' +
              '<details style="margin-top:6px">' +
                '<summary>Xem lời giải</summary>' +
                '<ol class="example-steps">' + ex.steps.map(function(st){ return '<li>' + fmtMath(st) + '</li>'; }).join('') + '</ol>' +
                '<div><b>Đáp số:</b> ' + fmtMath(ex.ans) + '</div>' +
              '</details>' +
            '</div>' +
          '</details>';
      });
    }
    h += '</div></details>';
  }

  // Panel 4: Câu hỏi luyện tập (bấm mới hiện + chế độ từng câu một)
  h +=
    '<details class="acc-panel" id="lesson-q-panel">' +
      '<summary class="acc-sum">' +
        '<span class="acc-title">4. Câu hỏi luyện tập</span>' +
        '<span class="acc-meta"><span class="toc-cnt" id="lesson-q-cnt">' + sessionItems.length + ' câu</span><span class="chev"></span></span>' +
      '</summary>' +
      '<div class="acc-body">' +
        '<div class="page-top-bar" style="margin-bottom:6px">' +
          '<div class="ladder" id="diff-ladder" style="margin:0"></div>' +
          '<div class="row">' +
            '<button type="button" class="btn sm alt" id="btn-reroll">Đổi bộ câu</button>' +
            '<button type="button" class="btn sm subtle" id="pdf-both">In phiếu</button>' +
          '</div>' +
        '</div>' +
        '<div id="qs"></div>' +
        '<div id="res"></div>' +
      '</div>' +
    '</details>';

  // Panel 5: Đề kiểm tra liên quan (nếu có)
  if (relatedExams.length) {
    h +=
      '<details class="acc-panel">' +
        '<summary class="acc-sum">' +
          '<span class="acc-title">Đề kiểm tra có bài này</span>' +
          '<span class="acc-meta"><span class="toc-cnt">' + relatedExams.length + ' đề</span><span class="chev"></span></span>' +
        '</summary>' +
        '<div class="acc-body"><div class="row">' +
          relatedExams.map(function(ex){
            return '<a class="btn sm subtle" href="#/lam-de/' + ex.id + '">' + esc(ex.title) + ' ›</a>';
          }).join('') +
        '</div></div>' +
      '</details>';
  }

  h +=
    '<div class="lesson-nav">' +
      (prevLesson ? '<a class="btn sm subtle" href="#/bai/' + prevLesson.id + '">← ' + esc(prevLesson.sgk || 'Bài trước') + '</a>' : '<a class="btn sm subtle" href="#/lop/' + t.grade + '">← Sách L' + t.grade + '</a>') +
      '<a class="btn sm alt" href="#/lop/' + t.grade + '">Mục lục Sách ' + t.grade + '</a>' +
      (nextLesson ? '<a class="btn sm" href="#/bai/' + nextLesson.id + '">' + esc(nextLesson.sgk || 'Bài tiếp') + ' →</a>' : '<a class="btn sm" href="#/de-kiem-tra/' + t.grade + '">Đề KT →</a>') +
    '</div>';

  app.innerHTML = h;
  wireToggleDetailsButtons(app);
  wireExclusiveDetails(app, '.acc-panel');

  var ttsBtn = document.getElementById('btn-tts');
  if (ttsBtn && canSpeak) {
    var speakingThis = false;
    ttsBtn.onclick = function(){
      if (speakingThis || window.speechSynthesis.speaking) {
        stopSpeech();
        speakingThis = false;
        ttsBtn.textContent = 'Nghe';
        return;
      }
      var fullTxt = displayLessonTitle(t) + '. ' + t.theory.map(plainSpeechText).join('. ');
      var utt = new SpeechSynthesisUtterance(fullTxt);
      utt.lang = 'vi-VN';
      utt.rate = 0.96;
      speakingThis = true;
      ttsBtn.textContent = 'Dừng';
      utt.onend = function(){ speakingThis = false; ttsBtn.textContent = 'Nghe'; };
      utt.onerror = function(){
        speakingThis = false;
        ttsBtn.textContent = 'Nghe';
        showToast('Thiết bị này chưa cài giọng đọc tiếng Việt.');
      };
      window.speechSynthesis.speak(utt);
    };
  }
  currentCleanup = function(){ stopSpeech(); };

  var qsEl = document.getElementById('qs');
  var resEl = document.getElementById('res');
  var ladderEl = document.getElementById('diff-ladder');
  var qCntBadge = document.getElementById('lesson-q-cnt');

  function rerollQuestions(){
    sampled = BANK ? BANK.sampleLessonSet(t, 4) : { totalAvailable: t.questions.length, items: getTopicPool(t, 1) };
    sessionItems = sampled.items;
    sessionAnswers = {};
    sessionOrders = {};
    lockedPrintSpec = null;
    if (qCntBadge) qCntBadge.textContent = sessionItems.length + ' câu';
    availDiffs = [1, 2, 3, 4].filter(function(lv){ return sessionItems.some(function(it){ return it.d === lv; }); });
    if (selectedDiff !== 'all' && availDiffs.indexOf(Number(selectedDiff)) === -1) selectedDiff = 'all';
    showToast('✓ Đã đổi bộ câu hỏi mới.');
    renderQuestionsForSelectedDiff();
  }
  document.getElementById('btn-reroll').onclick = rerollQuestions;

  function indicesForDiff(df){
    var pairs = [];
    sessionItems.forEach(function(item, i){
      if (df === 'all' || String(item.d) === String(df)) pairs.push({ i: i, d: item.d });
    });
    pairs.sort(function(a, b){ return a.d - b.d || a.i - b.i; });
    return pairs.map(function(p){ return p.i; });
  }

  function renderLadder(){
    if (!ladderEl) return;
    if (availDiffs.length <= 1) {
      ladderEl.innerHTML = '';
      return;
    }
    var allIdxs = indicesForDiff('all');
    var allAns = allIdxs.filter(function(i){ return !!sessionAnswers[i]; }).length;
    var pills = [
      '<button type="button" class="ladder-step ' + (selectedDiff === 'all' ? 'on' : '') + '" data-df="all">' +
        '<b>Tất cả</b><small>' + allAns + '/' + allIdxs.length + '</small></button>'
    ];
    availDiffs.forEach(function(lv){
      var idxs = indicesForDiff(String(lv));
      var ansCnt = idxs.filter(function(i){ return !!sessionAnswers[i]; }).length;
      pills.push(
        '<button type="button" class="ladder-step ' + (selectedDiff === String(lv) ? 'on' : '') + '" data-df="' + lv + '">' +
          '<b>' + DIFF_SHORT[lv] + '</b><small>' + ansCnt + '/' + idxs.length + '</small></button>'
      );
    });
    ladderEl.innerHTML = pills.join('');
    ladderEl.querySelectorAll('button').forEach(function(b){
      b.onclick = function(){ selectedDiff = b.dataset.df; renderQuestionsForSelectedDiff(); };
    });
  }

  function updateProgressIfReady(){
    var answeredKeys = Object.keys(sessionAnswers);
    var minNeeded = Math.min(3, sessionItems.length);
    if (answeredKeys.length < minNeeded) return;
    var rightAll = answeredKeys.filter(function(k){ return sessionAnswers[k].ok; }).length;
    var ratioAll = rightAll / answeredKeys.length;
    var p = loadProg();
    p[id] = p[id] || { attempts: 0 };
    if (p[id].best == null || ratioAll > p[id].best) p[id].best = ratioAll;
    p[id].last = ratioAll;
    p[id].updatedAt = Date.now();
    saveProg(p);
  }

  function renderSummary(idxs, justFinished){
    var allDoneInView = idxs.length > 0 && idxs.every(function(i){ return !!sessionAnswers[i]; });
    if (!allDoneInView) {
      resEl.className = '';
      resEl.innerHTML = '';
      return;
    }
    var right = idxs.filter(function(i){ return sessionAnswers[i].ok; }).length;
    var ratio = right / idxs.length;
    if (justFinished) {
      updateProgressIfReady();
      var p = loadProg();
      p[id] = p[id] || { attempts: 0 };
      p[id].attempts = (p[id].attempts || 0) + 1;
      saveProg(p);
    }

    resEl.className = 'card highlight';
    resEl.style.marginTop = '10px';
    resEl.innerHTML =
      '<div class="row between">' +
        '<div><div class="score-big">' + score10(ratio) + ' / 10</div>' +
        '<div class="muted" style="font-size:.86rem">Đúng <b>' + right + '/' + idxs.length + '</b> câu</div></div>' +
        '<span class="badge ' + (ratio >= 0.67 ? 'ok' : 'warn') + '">' + (ratio >= 0.67 ? '✓ Đã vững' : 'Rèn thêm') + '</span>' +
      '</div>' +
      '<div class="row" style="margin-top:8px">' +
        '<button type="button" class="btn sm" id="again-rand">Bộ câu mới</button>' +
        (nextLesson ? '<a class="btn sm alt" href="#/bai/' + nextLesson.id + '">Bài tiếp →</a>' : '') +
      '</div>';

    document.getElementById('again-rand').onclick = rerollQuestions;
  }

  function renderQuestionsForSelectedDiff(){
    renderLadder();
    var idxs = indicesForDiff(selectedDiff);
    var classify = (BANK && typeof BANK.classifySection === 'function')
      ? BANK.classifySection
      : function(q, d){ return (q && q.n == null && (!d || d <= 2)) ? 'lt' : 'bt'; };
    var ltIdxs = idxs.filter(function(i){ return (sessionItems[i].sec || classify(sessionItems[i].q, sessionItems[i].d)) === 'lt'; });
    var btIdxs = idxs.filter(function(i){ return (sessionItems[i].sec || classify(sessionItems[i].q, sessionItems[i].d)) !== 'lt'; });
    var showSplit = ltIdxs.length > 0 && btIdxs.length > 0;
    var orderedIdxs = showSplit ? ltIdxs.concat(btIdxs) : idxs;

    var qNodes = [];
    var deck = null;

    orderedIdxs.forEach(function(sIdx, displayIdx){
      var item = sessionItems[sIdx];
      var q = item.q;
      var secLbl = showSplit ? (displayIdx < ltIdxs.length ? 'Lí thuyết' : 'Bài tập') : '';
      var qNode = renderQ(q, displayIdx, {
        topic: t,
        qIndex: item.staticIdx,
        sectionLabel: secLbl,
        order: sessionOrders[sIdx] || null,
        savedAnswer: sessionAnswers[sIdx] || null,
        hintText: pickHint(t, q),
        onAnswer: function(ok, ansState){
          sessionAnswers[sIdx] = ansState;
          recordMistake(t.id, item.staticIdx, ok, q);
          renderLadder();
          if (deck) deck.refresh();
          if (orderedIdxs.every(function(i){ return !!sessionAnswers[i]; })) {
            renderSummary(orderedIdxs, true);
          }
        }
      });
      if (qNode._choices) sessionOrders[sIdx] = qNode._choices;
      qNodes.push(qNode);
    });

    deck = mountQuestionDeck(qsEl, qNodes);
    renderSummary(orderedIdxs, false);
  }

  renderQuestionsForSelectedDiff();

  function openLessonPrint(mode){
    if (!lockedPrintSpec) lockedPrintSpec = createFreshLessonSnapshot(t, 'all', sessionItems);
    window.KHTNPrint.open(lockedPrintSpec, mode, {
      onRegenerate: function(){
        lockedPrintSpec = createFreshLessonSnapshot(t, 'all', null);
        return lockedPrintSpec;
      }
    });
  }
  document.getElementById('top-dl-study').onclick = function(){ openLessonPrint('study'); };
  document.getElementById('pdf-both').onclick = function(){ openLessonPrint('both'); };
}

// ============================================================================
// VIEW 4: DANH MỤC ĐỀ KIỂM TRA (#/de-kiem-tra/:g/:cat)
// ============================================================================
function examCatalog(g, initialCat){
  if ([6,7,8,9].indexOf(g) === -1) g = getPrefGrade();
  setPrefGrade(g);
  setShellMode('book', g);
  updateNavActive('de-kiem-tra');

  var h =
    '<div class="crumb"><a href="#/">← Tủ sách</a> · <a href="#/lop/' + g + '">Sách Lớp ' + g + '</a> · Đề kiểm tra</div>' +
    '<div class="page-top-bar">' +
      '<h1 style="margin:0">Đề kiểm tra – Lớp ' + g + '</h1>' +
      '<div class="toc-grades">' +
        [6,7,8,9].map(function(gr){
          return '<a class="toc-grade-btn ' + (gr === g ? 'on' : '') + '" href="#/de-kiem-tra/' + gr + '">Lớp ' + gr + '</a>';
        }).join('') +
      '</div>' +
    '</div>' +
    '<div id="cat-exams-box"></div>';

  app.innerHTML = h;
  mountExamExplorer(document.getElementById('cat-exams-box'), g, initialCat || 'all');
}

// ============================================================================
// VIEW 5: LÀM ĐỀ KIỂM TRA (#/lam-de/:examId)
// ============================================================================
function examRunner(examId){
  var ex = examById[examId];
  if (!ex) {
    setShellMode('book', getPrefGrade());
    updateNavActive('de-kiem-tra');
    app.innerHTML = '<div class="empty"><p>Không tìm thấy đề kiểm tra.</p><a class="btn" href="#/de-kiem-tra/' + getPrefGrade() + '">Xem danh sách đề</a></div>';
    return;
  }
  setPrefGrade(ex.grade);
  setShellMode('book', ex.grade);
  updateNavActive('de-kiem-tra');

  var levelMode = ex.presetLevel || 'standard';
  var examMode = 'practice';
  var timerId = null;

  function stopTimer(){
    if (timerId) { clearInterval(timerId); timerId = null; }
  }

  function renderSetup(){
    stopTimer();
    var st = loadExams()[ex.id];
    var setupPrintSpec = null;

    var h =
      '<div class="crumb"><a href="#/de-kiem-tra/' + ex.grade + '">← Đề KT Lớp ' + ex.grade + '</a></div>' +
      '<div class="page-top-bar">' +
        '<div class="row">' +
          '<span class="badge pri">Lớp ' + ex.grade + ' · ' + esc(ex.term) + '</span>' +
          '<span class="badge">' + ex.minutes + ' phút · ' + ex.count + ' câu</span>' +
          (st ? '<span class="badge ok">Cao nhất: ' + score10(st.best) + '/10</span>' : '') +
        '</div>' +
        '<button type="button" class="btn sm alt" id="ex-print-now">In PDF</button>' +
      '</div>' +
      '<h1 style="margin-bottom:4px">' + esc(ex.title) + '</h1>' +
      (ex.scope
        ? '<details class="inline-details" style="margin-bottom:10px">' +
            '<summary>Xem phạm vi đề <span class="chev"></span></summary>' +
            '<div class="inline-details-body">' + esc(ex.scope) + '</div>' +
          '</details>'
        : '') +
      '<section class="card">' +
        '<div style="margin-bottom:10px">' +
          '<div class="muted" style="font-size:.83rem;font-weight:600;margin-bottom:5px">Chế độ chấm:</div>' +
          '<div class="filters" id="mode-pills" style="margin:0">' +
            '<button type="button" data-m="practice" class="' + (examMode === 'practice' ? 'on' : '') + '">Chấm ngay từng câu</button>' +
            '<button type="button" data-m="exam" class="' + (examMode === 'exam' ? 'on' : '') + '">Nộp bài cuối giờ</button>' +
          '</div>' +
        '</div>' +
        '<div style="margin-bottom:14px">' +
          '<div class="muted" style="font-size:.83rem;font-weight:600;margin-bottom:5px">Mức độ:</div>' +
          '<div class="filters" id="level-pills" style="margin:0">' +
            '<button type="button" data-lv="basic" class="' + (levelMode === 'basic' ? 'on' : '') + '">Cơ bản</button>' +
            '<button type="button" data-lv="standard" class="' + (levelMode === 'standard' ? 'on' : '') + '">Chuẩn trên lớp</button>' +
            '<button type="button" data-lv="advanced" class="' + (levelMode === 'advanced' ? 'on' : '') + '">Nâng cao</button>' +
          '</div>' +
        '</div>' +
        '<div class="row">' +
          '<button type="button" class="btn lg" id="ex-start">Bắt đầu làm đề ›</button>' +
          '<a class="btn subtle" href="#/de-kiem-tra/' + ex.grade + '">Đề khác</a>' +
        '</div>' +
      '</section>';

    app.innerHTML = h;

    app.querySelectorAll('#mode-pills button').forEach(function(c){
      c.onclick = function(){
        examMode = c.dataset.m;
        app.querySelectorAll('#mode-pills button').forEach(function(x){ x.classList.toggle('on', x === c); });
      };
    });
    app.querySelectorAll('#level-pills button').forEach(function(b){
      b.onclick = function(){
        levelMode = b.dataset.lv;
        setupPrintSpec = null;
        app.querySelectorAll('#level-pills button').forEach(function(x){ x.classList.toggle('on', x === b); });
      };
    });

    document.getElementById('ex-start').onclick = startExam;
    document.getElementById('ex-print-now').onclick = function(){
      if (!setupPrintSpec) setupPrintSpec = createFreshExamSnapshot(ex, levelMode);
      window.KHTNPrint.open(setupPrintSpec, 'both', {
        onRegenerate: function(){ setupPrintSpec = createFreshExamSnapshot(ex, levelMode); return setupPrintSpec; }
      });
    };
  }

  function startExam(){
    stopTimer();
    var picks = buildExamItems(ex, levelMode);
    var isDeferred = examMode === 'exam';
    var levelTxt = levelMode === 'basic' ? 'Cơ bản' : (levelMode === 'advanced' ? 'Nâng cao' : 'Chuẩn trên lớp');

    var attemptSpec = window.KHTNPrint.prepare({
      prefix: 'KT' + ex.grade,
      docTitle: ex.title.toUpperCase(),
      subtitle: 'KHTN Lớp ' + ex.grade + ' · ' + ex.term + ' · ' + levelTxt,
      minutes: ex.minutes,
      isExam: true,
      problemTypes: collectExamProblemTypes(ex.topics),
      items: picks.map(function(p){ return { topicTitle: p.t.sgk || p.t.title, q: p.q }; })
    });

    var submitted = false;
    var leftSec = ex.minutes * 60;
    var paused = false;
    var startTs = Date.now();

    function fmtClock(sec){
      var s = Math.max(0, sec);
      var m = Math.floor(s / 60);
      var r = s % 60;
      return (m < 10 ? '0' : '') + m + ':' + (r < 10 ? '0' : '') + r;
    }

    var h =
      '<div class="crumb"><a href="#/de-kiem-tra/' + ex.grade + '">← Đề KT Lớp ' + ex.grade + '</a> · ' + esc(attemptSpec.code) + '</div>' +
      '<div class="page-top-bar">' +
        '<h1 style="margin:0">' + esc(ex.title) + '</h1>' +
        '<div class="row">' +
          '<button type="button" class="btn sm alt" id="ex-top-pdf">In PDF</button>' +
          '<button type="button" class="btn sm subtle" id="ex-new">Đề mới</button>' +
          '<button type="button" class="btn sm subtle" id="ex-cfg">Cài đặt</button>' +
        '</div>' +
      '</div>' +
      '<div class="exam-bar">' +
        '<div class="row">' +
          '<span class="timer" id="ex-clock">' + fmtClock(leftSec) + '</span>' +
          '<button type="button" class="btn sm subtle" id="ex-pause">Tạm dừng</button>' +
          '<span class="muted" style="font-weight:600;font-size:.86rem" id="ex-prog">0/' + picks.length + ' câu</span>' +
        '</div>' +
        (isDeferred ? '<button type="button" class="btn sm" id="ex-submit">Nộp bài</button>' : '') +
      '</div>' +
      '<div id="ex-time-msg" class="q-hint" hidden>Đã hết thời gian gợi ý (' + ex.minutes + 'p). Bạn có thể nộp bài.</div>' +
      '<div id="qs"></div>' +
      '<div id="res"></div>';

    app.innerHTML = h;

    var clockEl = document.getElementById('ex-clock');
    var progEl = document.getElementById('ex-prog');
    var timeMsgEl = document.getElementById('ex-time-msg');
    var qsEl = document.getElementById('qs');
    var resEl = document.getElementById('res');
    var qNodes = [];
    var deck = null;

    document.getElementById('ex-top-pdf').onclick = function(){
      window.KHTNPrint.open(attemptSpec, 'both', {
        onRegenerate: function(){ return createFreshExamSnapshot(ex, levelMode); }
      });
    };

    timerId = setInterval(function(){
      if (paused || submitted) return;
      leftSec--;
      if (clockEl) {
        clockEl.textContent = fmtClock(leftSec);
        clockEl.classList.toggle('low', leftSec <= 120 && leftSec > 0);
      }
      if (leftSec <= 0) {
        stopTimer();
        if (timeMsgEl) timeMsgEl.hidden = false;
      }
    }, 1000);
    currentCleanup = stopTimer;

    document.getElementById('ex-pause').onclick = function(){
      paused = !paused;
      this.textContent = paused ? 'Tiếp tục' : 'Tạm dừng';
    };
    document.getElementById('ex-new').onclick = function(){ startExam(); showToast('✓ Đã tạo đề mới.'); };
    document.getElementById('ex-cfg').onclick = renderSetup;

    function updateAnsweredCount(){
      if (isDeferred) {
        var c = qNodes.filter(function(n){ return n._isAnswered(); }).length;
        if (progEl) progEl.textContent = c + '/' + picks.length + ' câu';
        if (deck) deck.refresh();
      }
    }

    function finishExam(results){
      if (submitted) return;
      submitted = true;
      stopTimer();

      var right = 0;
      var byDiff = { 1:{ok:0,tot:0}, 2:{ok:0,tot:0}, 3:{ok:0,tot:0}, 4:{ok:0,tot:0} };
      var weakMap = {};

      results.forEach(function(r, i){
        var p = picks[i];
        byDiff[r.diff].tot++;
        if (r.ok) { right++; byDiff[r.diff].ok++; }
        else weakMap[p.t.id] = p.t;
        recordMistake(p.t.id, p.qIndex, r.ok, p.q);
      });

      if (deck) deck.refresh();

      var ratio = right / picks.length;
      var spentSec = Math.max(1, Math.round((Date.now() - startTs) / 1000));
      var spentTxt = Math.floor(spentSec / 60) + 'p ' + (spentSec % 60) + 's';

      var saved = loadExams();
      var prev = saved[ex.id] || { attempts: 0 };
      prev.attempts = (prev.attempts || 0) + 1;
      prev.last = ratio;
      if (prev.best == null || ratio > prev.best) prev.best = ratio;
      prev.levelMode = levelMode;
      prev.updatedAt = Date.now();
      saved[ex.id] = prev;
      saveExams(saved);

      var subBtn = document.getElementById('ex-submit');
      if (subBtn) subBtn.disabled = true;

      var weakList = Object.keys(weakMap).map(function(k){ return weakMap[k]; });
      resEl.className = 'card highlight';
      resEl.style.marginTop = '12px';
      resEl.innerHTML =
        '<div class="row between">' +
          '<div><div class="score-big">' + score10(ratio) + ' / 10</div>' +
          '<div class="muted" style="font-size:.86rem">Đúng <b>' + right + '/' + picks.length + '</b> câu · ' + spentTxt + '</div></div>' +
          '<span class="badge ' + (ratio >= 0.8 ? 'ok' : (ratio >= 0.65 ? 'pri' : 'warn')) + '">' + rankLabel(ratio * 10) + '</span>' +
        '</div>' +
        '<details class="inline-details" style="margin-top:8px">' +
          '<summary>Chi tiết theo mức độ &amp; bài cần ôn <span class="chev"></span></summary>' +
          '<div class="inline-details-body">' +
            '<div class="diff-grid">' +
              [1,2,3,4].filter(function(lv){ return byDiff[lv].tot > 0; }).map(function(lv){
                return '<div class="diff-stat"><span class="badge d' + lv + '">' + DIFF_SHORT[lv] + '</span>' +
                  '<div style="font-weight:600;margin-top:4px">' + byDiff[lv].ok + '/' + byDiff[lv].tot + '</div></div>';
              }).join('') +
            '</div>' +
            (weakList.length
              ? '<b>Bài nên xem lại:</b><ul class="tight">' + weakList.map(function(t){
                  return '<li><a href="#/bai/' + t.id + '">' + esc(displayLessonTitle(t)) + '</a></li>';
                }).join('') + '</ul>'
              : '<div class="done">✓ Đúng toàn bộ câu hỏi!</div>') +
          '</div>' +
        '</details>' +
        '<div class="row" style="margin-top:10px">' +
          '<button type="button" class="btn sm" id="ex-retry">Làm đề mới</button>' +
          '<button type="button" class="btn sm alt" id="ex-pdf-both">In PDF</button>' +
          '<a class="btn sm subtle" href="#/tien-do">Sổ điểm</a>' +
        '</div>';

      document.getElementById('ex-retry').onclick = startExam;
      document.getElementById('ex-pdf-both').onclick = function(){ window.KHTNPrint.open(attemptSpec, 'both'); };
      resEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    var instantResults = [];
    var instantAnswered = 0;

    picks.forEach(function(p, i){
      var itemChoiceOrder = attemptSpec.items[i] ? attemptSpec.items[i].choices : null;
      var node = renderQ(p.q, i, {
        topic: p.t,
        qIndex: p.qIndex,
        order: itemChoiceOrder,
        showTopic: ex.topics.length > 1,
        deferred: isDeferred,
        hintText: pickHint(p.t, p.q),
        onSelect: updateAnsweredCount,
        onAnswer: function(ok){
          instantAnswered++;
          instantResults[i] = { ok: ok, skipped: false, diff: getDiff(p.q) };
          if (progEl) progEl.textContent = instantAnswered + '/' + picks.length + ' câu';
          if (deck) deck.refresh();
          if (instantAnswered === picks.length) finishExam(instantResults);
        }
      });
      qNodes.push(node);
    });

    deck = mountQuestionDeck(qsEl, qNodes);

    function handleTriggerSubmit(){
      var unanswered = qNodes.filter(function(n){ return !n._isAnswered(); }).length;
      if (unanswered > 0 && !confirm('Còn ' + unanswered + ' câu chưa chọn đáp án (0 điểm). Nộp bài ngay?')) return;
      finishExam(qNodes.map(function(n){ return n._grade(); }));
    }
    if (isDeferred) {
      document.getElementById('ex-submit').onclick = handleTriggerSubmit;
    }
  }

  renderSetup();
}

// ============================================================================
// VIEW 6: TỰ LUYỆN (#/luyen-tap) – GỌN NHẸ, BỘ LỌC NÂNG CAO BẤM MỚI HIỆN
// ============================================================================
function parsePracticePrompt(text){
  var s = normVi(text);
  var cfg = { grade:String(getPrefGrade()), stageCap:'all', subj:'all', diff:'all', qtype:'all', count:10, keyword:'' };
  if (!s) return cfg;

  var cm = s.match(/(\d+)\s*(cau|bai)/);
  if (cm) {
    var c = parseInt(cm[1], 10);
    if (c >= 1 && c <= 40) cfg.count = c;
    s = s.replace(cm[0], ' ');
  }
  if (/hoc ki 1|hk1|giua ki 1/.test(s)) {
    cfg.stageCap = /giua ki 1/.test(s) ? '1' : '2';
    s = s.replace(/giua ki 1|hoc ki 1|hk1/g, ' ');
  } else if (/giua ki 2/.test(s)) {
    cfg.stageCap = '3';
    s = s.replace(/giua ki 2/g, ' ');
  }
  var gm = s.match(/(?:lop|khtn|l)\s*([6-9])/) || s.match(/\b([6-9])\b/);
  if (gm) { cfg.grade = gm[1]; s = s.replace(gm[0], ' '); }
  else cfg.grade = 'all';

  if (/van dung cao|rat kho/.test(s)) { cfg.diff = '4'; s = s.replace(/van dung cao|rat kho/g, ' '); }
  else if (/van dung|nang cao|\bkho\b/.test(s)) { cfg.diff = '34'; s = s.replace(/van dung|nang cao|\bkho\b/g, ' '); }
  else if (/thong hieu|trung binh/.test(s)) { cfg.diff = '2'; s = s.replace(/thong hieu|trung binh/g, ' '); }
  else if (/nhan biet|co ban|\bde\b/.test(s)) { cfg.diff = '1'; s = s.replace(/nhan biet|co ban|\bde\b/g, ' '); }

  if (/\bhoa\b|hoa hoc/.test(s) && s.indexOf('hoa tri') === -1 && s.indexOf('tien hoa') === -1 && s.indexOf('tieu hoa') === -1) {
    cfg.subj = 'hoa'; s = s.replace(/hoa hoc|\bhoa\b/g, ' ');
  } else if (/\bly\b|\bli\b|vat ly|vat li/.test(s)) {
    cfg.subj = 'ly'; s = s.replace(/vat ly|vat li|\bly\b|\bli\b/g, ' ');
  } else if (/\bsinh\b|sinh hoc/.test(s) && s.indexOf('sinh san') === -1 && s.indexOf('sinh truong') === -1 && s.indexOf('sinh thai') === -1) {
    cfg.subj = 'sinh'; s = s.replace(/sinh hoc|\bsinh\b/g, ' ');
  }

  var stop = /\b(cho|toi|em|be|on|luyen|tap|co|ve|phan|chu de|tong hop|khtn|mon|va|muc|do|tu|den)\b/g;
  cfg.keyword = s.replace(stop, ' ').replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim();
  return cfg;
}

function practice(presetMode){
  setShellMode('book', getPrefGrade());
  updateNavActive('luyen-tap');
  var mistakesMap = loadMistakes();
  var mistakeEntries = Object.keys(mistakesMap).map(function(k){ return mistakesMap[k]; }).filter(function(e){
    return byId[e.topicId] && getMistakeQuestion(e);
  });

  var state = {
    grade: String(getPrefGrade()),
    stageCap: 'all',
    topicId: 'all',
    subj: 'all',
    diff: 'all',
    count: 10,
    keyword: '',
    onlyMistakes: presetMode === 'cau-sai'
  };

  function allowedByStageCap(t){
    if (state.stageCap === 'all' || !t.stage) return true;
    if (state.stageCap === '1') return t.stage === 1;
    if (state.stageCap === '2') return t.stage <= 2;
    if (state.stageCap === '3only') return t.stage === 3;
    if (state.stageCap === 'hk2') return t.term === 'HK2';
    return true;
  }

  function collectPool(){
    if (state.onlyMistakes) {
      return mistakeEntries.map(function(e){
        var t = byId[e.topicId];
        var q = getMistakeQuestion(e);
        return { t: t, q: q, qIndex: e.qIndex, d: getDiff(q) };
      });
    }
    var pool = [];
    D.forEach(function(t){
      if (state.grade !== 'all' && String(t.grade) !== String(state.grade)) return;
      if (state.topicId !== 'all' && t.id !== state.topicId) return;
      if (state.topicId === 'all' && !allowedByStageCap(t)) return;
      if (state.subj !== 'all' && t.subj !== state.subj) return;
      var topicText = normVi(t.title + ' ' + (t.chapTitle || '') + ' ' + t.formulas.join(' ') + ' ' + t.theory.join(' '));
      var kw = normVi(state.keyword);
      var rounds = state.topicId !== 'all' ? 6 : 4;
      getTopicPool(t, rounds).forEach(function(item){
        var q = item.q;
        var qd = item.d;
        if (state.diff === '12' && qd > 2) return;
        if (state.diff === '34' && qd < 3) return;
        if (['1','2','3','4'].indexOf(state.diff) > -1 && String(qd) !== state.diff) return;
        if (kw && topicText.indexOf(kw) === -1 && normVi(q.q).indexOf(kw) === -1) return;
        pool.push({ t: t, q: q, qIndex: item.staticIdx, d: qd });
      });
    });
    return pool;
  }

  function renderBuilder(){
    var h =
      '<div class="crumb"><a href="#/">← Tủ sách</a> · Tự luyện</div>' +
      '<div class="page-top-bar">' +
        '<h1 style="margin:0">Tự luyện tập</h1>' +
        '<a class="btn sm subtle" href="#/kiem-tra/' + getPrefGrade() + '">Kiểm tra gốc ›</a>' +
      '</div>' +
      '<section class="card">' +
        '<div style="margin-bottom:10px">' +
          '<div class="muted" style="font-size:.83rem;font-weight:600;margin-bottom:5px">Chọn lớp:</div>' +
          '<div class="filters" id="p-grade-pills" style="margin:0">' +
            ['6','7','8','9','all'].map(function(gv){
              return '<button type="button" data-gv="' + gv + '" class="' + (state.grade === gv ? 'on' : '') + '">' + (gv === 'all' ? 'Tất cả (6–9)' : 'Lớp ' + gv) + '</button>';
            }).join('') +
          '</div>' +
        '</div>' +
        '<div style="margin-bottom:12px">' +
          '<div class="muted" style="font-size:.83rem;font-weight:600;margin-bottom:5px">Số câu:</div>' +
          '<div class="filters" id="p-count-pills" style="margin:0">' +
            [6,10,15,20].map(function(cnt){
              return '<button type="button" data-cnt="' + cnt + '" class="' + (Number(state.count) === cnt ? 'on' : '') + '">' + cnt + ' câu</button>';
            }).join('') +
          '</div>' +
        '</div>' +
        (mistakeEntries.length ? '<div class="row" style="margin-bottom:10px"><label class="row" style="cursor:pointer;font-size:.9rem"><input type="checkbox" id="p-only-err"> Ôn lại câu từng sai (' + mistakeEntries.length + ')</label></div>' : '') +
        '<div class="row">' +
          '<button type="button" class="btn lg" id="p-start">Bắt đầu luyện ›</button>' +
          '<button type="button" class="btn alt" id="p-print">In PDF</button>' +
          '<span id="p-summary" class="muted" style="font-size:.84rem"></span>' +
        '</div>' +
      '</section>' +
      '<details class="acc-panel">' +
        '<summary class="acc-sum">' +
          '<span class="acc-title">Bộ lọc chi tiết (bài học, học kì, độ khó, gõ nhanh)</span>' +
          '<span class="acc-meta"><span class="chev"></span></span>' +
        '</summary>' +
        '<div class="acc-body">' +
          '<div class="row" style="margin-bottom:10px">' +
            '<input type="text" id="quick-cmd" style="flex:1;min-width:190px" placeholder="Gõ nhanh: 10 câu mol lớp 8…">' +
            '<button type="button" class="btn sm" id="apply-cmd">Lọc</button>' +
          '</div>' +
          '<div class="form-grid">' +
            '<div class="field"><label for="p-stage">Học kì</label><select id="p-stage">' +
              '<option value="all">Cả năm</option>' +
              '<option value="1">Trước GK I</option>' +
              '<option value="2">Học kì I</option>' +
              '<option value="3only">Trước GK II</option>' +
              '<option value="hk2">Học kì II</option>' +
            '</select></div>' +
            '<div class="field"><label for="p-topic">Bài học</label><select id="p-topic"></select></div>' +
            '<div class="field"><label for="p-subj">Phân môn</label><select id="p-subj">' +
              '<option value="all">Tất cả</option><option value="hoa">Hóa học</option><option value="ly">Vật lí</option><option value="sinh">Sinh học</option><option value="td">Mở đầu / Trái Đất</option>' +
            '</select></div>' +
            '<div class="field"><label for="p-diff">Độ khó</label><select id="p-diff">' +
              '<option value="all">Dễ → Khó</option>' +
              '<option value="1">Chỉ câu Dễ</option>' +
              '<option value="12">Dễ + TB</option>' +
              '<option value="34">Khá + Khó</option>' +
            '</select></div>' +
          '</div>' +
        '</div>' +
      '</details>';

    app.innerHTML = h;

    var elStage = document.getElementById('p-stage');
    var elTopic = document.getElementById('p-topic');
    var elSubj = document.getElementById('p-subj');
    var elDiff = document.getElementById('p-diff');
    var elOnlyErr = document.getElementById('p-only-err');
    var elSummary = document.getElementById('p-summary');
    var btnStart = document.getElementById('p-start');
    var btnPrint = document.getElementById('p-print');
    var cachedSpec = null;

    function rebuildTopicDropdown(){
      var gTopics = D.filter(function(t){
        return (state.grade === 'all' || String(t.grade) === String(state.grade)) && allowedByStageCap(t);
      }).sort(function(a,b){ return a.grade - b.grade || (a.order||99) - (b.order||99); });

      var optsHtml = '<option value="all">Tất cả (' + gTopics.length + ' bài)</option>';
      gTopics.forEach(function(t){
        optsHtml += '<option value="' + t.id + '">' + (state.grade === 'all' ? 'L' + t.grade + ' · ' : '') + esc(displayLessonTitle(t)) + '</option>';
      });
      elTopic.innerHTML = optsHtml;
      if (state.topicId !== 'all' && !gTopics.some(function(t){ return t.id === state.topicId; })) state.topicId = 'all';
      elTopic.value = state.topicId;
    }

    function updateSummary(){
      cachedSpec = null;
      var pool = collectPool();
      if (!pool.length) {
        elSummary.textContent = 'Không có câu khớp bộ lọc.';
        btnStart.disabled = true;
        btnPrint.disabled = true;
      } else {
        elSummary.textContent = 'Sẵn sàng ' + pool.length + '+ câu';
        btnStart.disabled = false;
        btnPrint.disabled = false;
      }
    }

    function syncInputs(){
      app.querySelectorAll('#p-grade-pills button').forEach(function(b){
        b.classList.toggle('on', b.dataset.gv === String(state.grade));
      });
      app.querySelectorAll('#p-count-pills button').forEach(function(b){
        b.classList.toggle('on', Number(b.dataset.cnt) === Number(state.count));
      });
      elStage.value = state.stageCap;
      rebuildTopicDropdown();
      elSubj.value = state.subj;
      elDiff.value = state.diff;
      if (elOnlyErr) elOnlyErr.checked = state.onlyMistakes;
      updateSummary();
    }

    function pickItems(){
      var pool = collectPool();
      var take = Math.min(pool.length, Number(state.count) || 10);
      var seen = {};
      var uniq = shuffle(pool).filter(function(x){
        if (seen[x.q.q]) return false;
        seen[x.q.q] = true;
        return true;
      });
      return uniq.slice(0, take).sort(function(a, b){ return a.d - b.d; });
    }

    function makeSpec(){
      var picks = pickItems();
      var singleT = state.topicId !== 'all' ? byId[state.topicId] : null;
      cachedSpec = window.KHTNPrint.prepare({
        prefix: state.grade === 'all' ? 'LT' : 'L' + state.grade,
        docTitle: singleT ? ('PHIẾU BÀI TẬP – ' + displayLessonTitle(singleT).toUpperCase()) : 'PHIẾU BÀI TẬP TỰ LUYỆN KHTN',
        subtitle: singleT ? ('KHTN Lớp ' + singleT.grade) : ('Phạm vi tự chọn · Lớp ' + state.grade),
        items: picks.map(function(p){ return { topicTitle: singleT ? '' : (p.t.sgk || p.t.title), q: p.q }; })
      });
      return cachedSpec;
    }

    app.querySelectorAll('#p-grade-pills button').forEach(function(b){
      b.onclick = function(){
        state.grade = b.dataset.gv;
        if (state.grade !== 'all') setPrefGrade(Number(state.grade));
        state.topicId = 'all';
        syncInputs();
      };
    });
    app.querySelectorAll('#p-count-pills button').forEach(function(b){
      b.onclick = function(){
        state.count = parseInt(b.dataset.cnt, 10) || 10;
        syncInputs();
      };
    });
    elStage.onchange = function(){ state.stageCap = elStage.value; state.topicId = 'all'; rebuildTopicDropdown(); updateSummary(); };
    elTopic.onchange = function(){ state.topicId = elTopic.value; updateSummary(); };
    elSubj.onchange = function(){ state.subj = elSubj.value; updateSummary(); };
    elDiff.onchange = function(){ state.diff = elDiff.value; updateSummary(); };
    if (elOnlyErr) elOnlyErr.onchange = function(){ state.onlyMistakes = elOnlyErr.checked; updateSummary(); };

    var cmdInput = document.getElementById('quick-cmd');
    function applyPrompt(txt){
      var parsed = parsePracticePrompt(txt);
      state.grade = parsed.grade;
      state.stageCap = parsed.stageCap;
      state.subj = parsed.subj;
      state.diff = parsed.diff;
      state.count = [6,10,15,20].indexOf(parsed.count) > -1 ? parsed.count : 10;
      state.keyword = '';
      state.topicId = 'all';
      state.onlyMistakes = false;
      if (parsed.keyword) {
        var cands = D.filter(function(t){
          return (state.grade === 'all' || String(t.grade) === String(state.grade)) && normVi(t.title).indexOf(parsed.keyword) > -1;
        });
        if (cands.length === 1) {
          state.grade = String(cands[0].grade);
          state.stageCap = 'all';
          state.topicId = cands[0].id;
          state.subj = 'all';
        } else {
          state.keyword = parsed.keyword;
        }
      }
      syncInputs();
      showToast('✓ Đã lọc câu hỏi.');
    }
    document.getElementById('apply-cmd').onclick = function(){ applyPrompt(cmdInput.value); };
    cmdInput.onkeydown = function(e){ if (e.key === 'Enter') applyPrompt(cmdInput.value); };

    btnStart.onclick = function(){
      var singleT = state.topicId !== 'all' ? byId[state.topicId] : null;
      runPracticeSession(pickItems(), singleT ? displayLessonTitle(singleT) : null);
    };
    btnPrint.onclick = function(){
      window.KHTNPrint.open(cachedSpec || makeSpec(), 'both', { onRegenerate: makeSpec });
    };

    syncInputs();
    if (presetMode === 'cau-sai' && mistakeEntries.length > 0) {
      runPracticeSession(pickItems(), 'Ôn câu từng làm sai');
    }
  }

  function runPracticeSession(picks, customTitle){
    if (!picks.length) { renderBuilder(); return; }
    var title = customTitle || ('Tự luyện (' + picks.length + ' câu)');
    var sheetSpec = window.KHTNPrint.prepare({
      prefix: 'LT',
      docTitle: 'PHIẾU LUYỆN TẬP KHTN',
      subtitle: title,
      items: picks.map(function(x){ return { topicTitle: x.t.sgk || x.t.title, q: x.q }; })
    });

    var h =
      '<div class="crumb"><a href="#/luyen-tap" id="back-builder">← Tự luyện</a> · Đang làm</div>' +
      '<div class="page-top-bar">' +
        '<h1 style="margin:0">' + esc(title) + '</h1>' +
        '<div class="row">' +
          '<button type="button" class="btn sm alt" id="run-pdf">In PDF</button>' +
          '<button type="button" class="btn sm subtle" id="chg-cfg">Đổi bài</button>' +
        '</div>' +
      '</div>' +
      '<div id="qs"></div>' +
      '<div id="res"></div>';

    app.innerHTML = h;
    document.getElementById('chg-cfg').onclick = renderBuilder;
    document.getElementById('back-builder').onclick = function(e){ e.preventDefault(); renderBuilder(); };
    document.getElementById('run-pdf').onclick = function(){ window.KHTNPrint.open(sheetSpec, 'both'); };

    var qsEl = document.getElementById('qs');
    var resEl = document.getElementById('res');
    var answered = 0, right = 0, weakMap = {};
    var qNodes = [];
    var deck = null;

    picks.forEach(function(p, i){
      qNodes.push(renderQ(p.q, i, {
        topic: p.t,
        qIndex: p.qIndex,
        order: sheetSpec.items[i] ? sheetSpec.items[i].choices : null,
        showTopic: true,
        hintText: pickHint(p.t, p.q),
        onAnswer: function(ok){
          answered++;
          if (ok) right++;
          else weakMap[p.t.id] = p.t;
          recordMistake(p.t.id, p.qIndex, ok, p.q);
          if (deck) deck.refresh();

          if (answered === picks.length) {
            var ratio = right / picks.length;
            var weakList = Object.keys(weakMap).map(function(k){ return weakMap[k]; });
            resEl.className = 'card highlight';
            resEl.style.marginTop = '12px';
            resEl.innerHTML =
              '<div class="row between">' +
                '<div><div class="score-big">' + score10(ratio) + ' / 10</div>' +
                '<div class="muted" style="font-size:.86rem">Đúng <b>' + right + '/' + picks.length + '</b> câu</div></div>' +
              '</div>' +
              (weakList.length
                ? '<details class="inline-details" style="margin-top:6px"><summary>Bài nên xem lại (' + weakList.length + ') <span class="chev"></span></summary><div class="inline-details-body"><ul class="tight">' + weakList.map(function(t){
                    return '<li><a href="#/bai/' + t.id + '">L' + t.grade + ' · ' + esc(displayLessonTitle(t)) + '</a></li>';
                  }).join('') + '</ul></div></details>'
                : '<p class="done" style="margin:.4em 0">✓ Đúng tất cả câu hỏi!</p>') +
              '<div class="row" style="margin-top:10px">' +
                '<button type="button" class="btn sm" id="re-cfg">Lượt mới</button>' +
                '<button type="button" class="btn sm alt" id="s-pdf-both">In PDF</button>' +
              '</div>';

            document.getElementById('re-cfg').onclick = renderBuilder;
            document.getElementById('s-pdf-both').onclick = function(){ window.KHTNPrint.open(sheetSpec, 'both'); };
          }
        }
      }));
    });

    deck = mountQuestionDeck(qsEl, qNodes);
  }

  renderBuilder();
}

// ============================================================================
// VIEW 7: KIỂM TRA GỐC (#/kiem-tra/:g)
// ============================================================================
function placement(g){
  if ([6,7,8,9].indexOf(g) === -1) g = getPrefGrade();
  setShellMode('book', g);
  updateNavActive('luyen-tap');

  var pool = D.filter(function(t){ return t.grade < g || (g === 6 && t.grade === 6); });
  var picks = [];
  pool.forEach(function(t){
    var tPool = getTopicPool(t, 3);
    var easyPool = tPool.filter(function(x){ return x.d <= 2; });
    var src = easyPool.length ? easyPool : tPool;
    var chosen = src[Math.floor(Math.random() * src.length)];
    picks.push({ t: t, q: chosen.q, qIndex: chosen.staticIdx, d: chosen.d });
  });
  picks = shuffle(picks).slice(0, 12).sort(function(a, b){ return a.d - b.d; });

  var sheetSpec = window.KHTNPrint.prepare({
    prefix: 'KN' + g,
    docTitle: 'ĐỀ KIỂM TRA KIẾN THỨC GỐC TRƯỚC LỚP ' + g,
    subtitle: 'Rà soát nhanh kiến thức nền tảng trước khi học KHTN Lớp ' + g,
    items: picks.map(function(x){ return { topicTitle: 'Lớp ' + x.t.grade + ' · ' + (x.t.sgk || x.t.title), q: x.q }; })
  });

  var h =
    '<div class="crumb"><a href="#/luyen-tap">← Tự luyện</a> · Kiểm tra gốc</div>' +
    '<div class="page-top-bar">' +
      '<h1 style="margin:0">Kiểm tra gốc – Lớp ' + g + '</h1>' +
      '<div class="toc-grades">' +
        [6,7,8,9].map(function(gr){
          return '<a class="toc-grade-btn ' + (gr === g ? 'on' : '') + '" href="#/kiem-tra/' + gr + '">Lớp ' + gr + '</a>';
        }).join('') +
      '</div>' +
    '</div>' +
    '<div class="row" style="margin-bottom:8px">' +
      '<button type="button" class="btn sm alt" id="pl-top-pdf">In PDF</button>' +
      '<button type="button" class="btn sm subtle" id="pl-reroll">Đề khác</button>' +
    '</div>' +
    '<div id="qs"></div>' +
    '<div id="res"></div>';

  app.innerHTML = h;
  document.getElementById('pl-top-pdf').onclick = function(){ window.KHTNPrint.open(sheetSpec, 'both'); };
  document.getElementById('pl-reroll').onclick = function(){ placement(g); };

  var qsEl = document.getElementById('qs');
  var resEl = document.getElementById('res');
  var answered = 0, weak = [];
  var qNodes = [];
  var deck = null;

  picks.forEach(function(p, i){
    qNodes.push(renderQ(p.q, i, {
      topic: p.t,
      qIndex: p.qIndex,
      order: sheetSpec.items[i] ? sheetSpec.items[i].choices : null,
      showTopic: true,
      hintText: pickHint(p.t, p.q),
      onAnswer: function(ok){
        answered++;
        if (!ok) weak.push(p.t);
        recordMistake(p.t.id, p.qIndex, ok, p.q);
        if (deck) deck.refresh();

        if (answered === picks.length) {
          var right = picks.length - weak.length;
          var ratio = right / picks.length;
          var meta = loadMeta();
          meta.lastPlacement = {
            grade: g,
            right: right,
            total: picks.length,
            score10: score10(ratio),
            weakIds: weak.map(function(x){ return x.id; }),
            date: Date.now()
          };
          saveMeta(meta);

          resEl.className = 'card highlight';
          resEl.style.marginTop = '12px';
          resEl.innerHTML =
            '<div class="score-big">' + score10(ratio) + ' / 10</div>' +
            '<div class="muted" style="font-size:.86rem">Đúng <b>' + right + '/' + picks.length + '</b> câu</div>' +
            (weak.length
              ? '<details class="inline-details" style="margin-top:6px"><summary>Bài gốc nên ôn (' + weak.length + ') <span class="chev"></span></summary><div class="inline-details-body"><ul class="tight">' +
                weak.map(function(t){
                  return '<li><a href="#/bai/' + t.id + '">L' + t.grade + ' · ' + esc(displayLessonTitle(t)) + '</a></li>';
                }).join('') + '</ul></div></details>'
              : '<p class="done" style="margin:.4em 0">✓ Nền tảng vững để học Lớp ' + g + '.</p>') +
            '<div class="row" style="margin-top:10px">' +
              '<button type="button" class="btn sm" id="re">Đề khác</button>' +
              '<button type="button" class="btn sm alt" id="pl-pdf">In PDF</button>' +
            '</div>';

          document.getElementById('re').onclick = function(){ placement(g); };
          document.getElementById('pl-pdf').onclick = function(){ window.KHTNPrint.open(sheetSpec, 'both'); };
        }
      }
    }));
  });

  deck = mountQuestionDeck(qsEl, qNodes);
}

// ============================================================================
// VIEW 8: SỔ TAY CÔNG THỨC & CÂU SAI (#/so-tay) – BẤM BÀI MỚI HIỆN CÔNG THỨC
// ============================================================================
function notebook(initialTab){
  setShellMode('book', getPrefGrade());
  updateNavActive('so-tay');
  var tab = initialTab === 'mistakes' ? 'mistakes' : 'formulas';
  var gradeFilter = String(getPrefGrade());
  var subjFilter = 'all';
  var query = '';

  function render(){
    var mistakes = loadMistakes();
    var mList = Object.keys(mistakes).map(function(k){ return mistakes[k]; })
      .filter(function(m){ return byId[m.topicId] && getMistakeQuestion(m); })
      .sort(function(a,b){ return (b.lastWrongAt || 0) - (a.lastWrongAt || 0); });

    var h =
      '<div class="crumb"><a href="#/">← Tủ sách</a> · Công thức</div>' +
      '<div class="page-top-bar">' +
        '<h1 style="margin:0">Công thức &amp; Câu sai</h1>' +
        '<button type="button" class="btn sm alt" id="nb-print-btn">' +
          (tab === 'formulas' ? 'In Sổ tay' : 'In câu sai') +
        '</button>' +
      '</div>' +
      '<div class="tabs">' +
        '<button type="button" data-tab="formulas" class="' + (tab === 'formulas' ? 'on' : '') + '">Công thức theo bài</button>' +
        '<button type="button" data-tab="mistakes" class="' + (tab === 'mistakes' ? 'on' : '') + '">Câu sai (' + mList.length + ')</button>' +
      '</div>';

    if (tab === 'formulas') {
      h +=
        '<div class="toc-toolbar">' +
          '<div class="toc-grades" id="nb-g">' +
            ['6','7','8','9','all'].map(function(gv){
              return '<button type="button" class="toc-grade-btn ' + (gradeFilter === gv ? 'on' : '') + '" data-g="' + gv + '">' + (gv === 'all' ? 'Tất cả' : 'Lớp ' + gv) + '</button>';
            }).join('') +
          '</div>' +
          '<div class="toc-search-wrap"><input type="search" id="nb-search" placeholder="Tìm công thức…" value="' + esc(query) + '"></div>' +
        '</div>' +
        '<div class="page-top-bar" style="margin-bottom:6px">' +
          '<div class="filters" id="nb-s" style="margin:0">' +
            ['all','hoa','ly','sinh','td'].map(function(s){
              return '<button type="button" data-s="' + s + '" class="' + (subjFilter === s ? 'on' : '') + '">' + (s === 'all' ? 'Tất cả' : SUBJ_SHORT[s]) + '</button>';
            }).join('') +
          '</div>' +
          '<button type="button" class="btn-ghost-xs" data-toggle-details="#nb-list .toc-chapter" data-open-txt="Mở hết bài" data-close-txt="Thu gọn">Mở hết bài</button>' +
        '</div>' +
        '<div id="nb-list"></div>';
    } else {
      h += '<div id="nb-mistakes"></div>';
    }

    app.innerHTML = h;
    app.querySelectorAll('[data-tab]').forEach(function(b){
      b.onclick = function(){ tab = b.dataset.tab; render(); };
    });

    if (tab === 'formulas') {
      function matchingFormulaGroups(){
        var q = normVi(query);
        var TYPES = window.KHTN_TYPES || {};
        var groups = [];
        D.slice().sort(function(a,b){ return a.grade - b.grade || (a.order||99) - (b.order||99); }).forEach(function(t){
          if (gradeFilter !== 'all' && String(t.grade) !== gradeFilter) return;
          if (subjFilter !== 'all' && t.subj !== subjFilter) return;
          var hit = t.formulas.filter(function(f){
            return !q || normVi(f + ' ' + t.title + ' ' + (t.chapTitle || '')).indexOf(q) > -1;
          });
          if (hit.length) groups.push({ topic: t, grade: t.grade, title: (t.chapCode ? t.chapCode + ' · ' : '') + displayLessonTitle(t), formulas: hit, types: TYPES[t.id] || null });
        });
        return groups;
      }

      function showFormulas(){
        var groups = matchingFormulaGroups();
        var autoOpen = query.trim().length > 0;
        var out = '';
        groups.forEach(function(grp){
          var t = grp.topic;
          out +=
            '<details class="toc-chapter"' + (autoOpen ? ' open' : '') + '>' +
              '<summary class="toc-chap-sum">' +
                '<span class="toc-chap-title">' +
                  (gradeFilter === 'all' ? '<em>L' + t.grade + '.</em> ' : '') + esc(displayLessonTitle(t)) +
                '</span>' +
                '<span class="toc-chap-meta">' +
                  tag(t.subj) +
                  '<span class="toc-cnt">' + grp.formulas.length + ' mục</span>' +
                  '<span class="chev"></span>' +
                '</span>' +
              '</summary>' +
              '<div class="toc-chap-body" style="padding:8px 12px 10px">' +
                grp.formulas.map(function(f){ return '<div class="formula">' + fmtFormulaInteractive(f) + '</div>'; }).join('') +
                '<div style="margin-top:6px"><a class="btn-ghost-xs" style="text-decoration:none;display:inline-block" href="#/bai/' + t.id + '">Mở bài học ›</a></div>' +
              '</div>' +
            '</details>';
        });
        document.getElementById('nb-list').innerHTML = out || '<div class="empty">Không tìm thấy công thức khớp từ khóa.</div>';
        wireExclusiveDetails(document.getElementById('nb-list'), '.toc-chapter');
        var toggleAllBtn = app.querySelector('[data-toggle-details="#nb-list .toc-chapter"]');
        if (toggleAllBtn) toggleAllBtn.textContent = (autoOpen && groups.length) ? 'Thu gọn' : 'Mở hết bài';
      }
      showFormulas();
      wireToggleDetailsButtons(app);

      document.getElementById('nb-search').oninput = function(e){ query = e.target.value; showFormulas(); };
      app.querySelectorAll('#nb-g button').forEach(function(b){
        b.onclick = function(){
          gradeFilter = b.dataset.g;
          if (gradeFilter !== 'all') setPrefGrade(Number(gradeFilter));
          app.querySelectorAll('#nb-g button').forEach(function(x){ x.classList.toggle('on', x === b); });
          showFormulas();
        };
      });
      app.querySelectorAll('#nb-s button').forEach(function(b){
        b.onclick = function(){
          subjFilter = b.dataset.s;
          app.querySelectorAll('#nb-s button').forEach(function(x){ x.classList.toggle('on', x === b); });
          showFormulas();
        };
      });
      document.getElementById('nb-print-btn').onclick = function(){
        var groups = matchingFormulaGroups();
        if (!groups.length) return;
        var spec = window.KHTNPrint.prepare({
          prefix: gradeFilter === 'all' ? 'ST' : 'ST' + gradeFilter,
          subtitle: 'Sổ tay công thức KHTN' + (gradeFilter !== 'all' ? ' · Lớp ' + gradeFilter : ''),
          formulaGroups: groups
        });
        window.KHTNPrint.open(spec, 'formulas');
      };
    } else {
      var box = document.getElementById('nb-mistakes');
      document.getElementById('nb-print-btn').disabled = mList.length === 0;
      document.getElementById('nb-print-btn').onclick = function(){
        if (!mList.length) return;
        var spec = window.KHTNPrint.prepare({
          prefix: 'CS',
          docTitle: 'PHIẾU ÔN LẠI CÁC CÂU HAY SAI',
          subtitle: 'Tổng hợp ' + mList.length + ' câu cần rèn lại',
          items: mList.map(function(m){
            var t = byId[m.topicId];
            return { topicTitle: 'Lớp ' + t.grade + ' · ' + (t.sgk || t.title), q: getMistakeQuestion(m) };
          })
        });
        window.KHTNPrint.open(spec, 'both');
      };

      if (!mList.length) {
        box.innerHTML = '<div class="empty">Chưa có câu làm sai nào.</div>';
      } else {
        var out =
          '<div class="toc-bookmark">' +
            '<span>Làm đúng lại để tự gỡ khỏi danh sách.</span>' +
            '<a class="btn sm" href="#/luyen-tap/cau-sai">Luyện ' + mList.length + ' câu sai ›</a>' +
          '</div>';
        mList.forEach(function(m){
          var t = byId[m.topicId];
          var q = getMistakeQuestion(m);
          var ans = q.o ? q.o[0] : (fmtNum(q.n) + (q.u ? ' ' + q.u : ''));
          out +=
            '<div class="card" style="margin:8px 0;padding:12px 14px">' +
              '<div class="row between">' +
                '<div>' + tag(t.subj) + ' ' + diffBadge(q) + ' <a href="#/bai/' + t.id + '" style="text-decoration:none"><b>L' + t.grade + ' · ' + esc(displayLessonTitle(t)) + '</b></a></div>' +
                '<span class="badge warn">Sai ' + (m.count || 1) + '×</span>' +
              '</div>' +
              '<div style="margin:.45em 0 .2em">' + fmtMath(q.q) + '</div>' +
              '<details class="inline-details">' +
                '<summary>Xem đáp án &amp; lời giải <span class="chev"></span></summary>' +
                '<div class="inline-details-body" style="color:var(--ink)">' +
                  '<b>Đáp án:</b> ' + fmtMath(ans) + (q.w ? '<br><b>Lời giải:</b> ' + fmtMath(q.w) : '') +
                '</div>' +
              '</details>' +
            '</div>';
        });
        box.innerHTML = out;
      }
    }
  }
  render();
}

// ============================================================================
// VIEW 9: SỔ ĐIỂM & TIẾN ĐỘ (#/tien-do) – CÁC MỤC CHI TIẾT BẤM MỚI HIỆN
// ============================================================================
function progress(){
  setShellMode('book', getPrefGrade());
  updateNavActive('tien-do');
  var selectedGbGrade = getPrefGrade();

  function render(){
    var prog = loadProg();
    var examStats = loadExams();
    var mistakes = loadMistakes();
    var mistakeCount = Object.keys(mistakes).length;
    var completed = D.filter(function(t){ return isMastered(t.id); }).length;
    var scores = Object.keys(prog).map(function(id){ return prog[id].best; }).filter(function(v){ return typeof v === 'number'; });
    var avgScore = scores.length ? score10(scores.reduce(function(a,b){ return a+b; }, 0) / scores.length) : '—';
    var doneExamIds = Object.keys(examStats).filter(function(id){ return examById[id]; });

    var h =
      '<div class="crumb"><a href="#/">← Tủ sách</a> · Sổ điểm</div>' +
      '<div class="page-top-bar">' +
        '<h1 style="margin:0">Sổ điểm &amp; Tiến độ</h1>' +
        '<div class="toc-grades" id="prog-g-tabs">' +
          [6,7,8,9].map(function(gr){
            return '<button type="button" class="toc-grade-btn ' + (gr === selectedGbGrade ? 'on' : '') + '" data-pg="' + gr + '">Lớp ' + gr + '</button>';
          }).join('') +
        '</div>' +
      '</div>' +
      '<div class="grid stats" style="margin:10px 0">' +
        '<div class="card" style="padding:11px 14px"><div class="muted" style="font-size:.82rem">Bài đã vững</div><div class="stat-val">' + completed + '/' + D.length + '</div></div>' +
        '<div class="card" style="padding:11px 14px"><div class="muted" style="font-size:.82rem">ĐTB bài học</div><div class="stat-val">' + avgScore + '</div></div>' +
        '<div class="card" style="padding:11px 14px"><div class="muted" style="font-size:.82rem">Đề đã làm</div><div class="stat-val">' + doneExamIds.length + '/' + EXAMS.length + '</div></div>' +
        '<div class="card" style="padding:11px 14px"><div class="muted" style="font-size:.82rem">Câu cần ôn</div><div class="stat-val">' + mistakeCount + '</div></div>' +
      '</div>' +
      '<details class="acc-panel">' +
        '<summary class="acc-sum">' +
          '<span class="acc-title">Bảng điểm Thông tư 22 – Lớp ' + selectedGbGrade + '</span>' +
          '<span class="acc-meta"><span class="toc-cnt">Xem / Nhẩm điểm</span><span class="chev"></span></span>' +
        '</summary>' +
        '<div class="acc-body" id="prog-gb-slot"></div>' +
      '</details>' +
      '<details class="acc-panel">' +
        '<summary class="acc-sum">' +
          '<span class="acc-title">Tiến độ theo khối lớp (6–9)</span>' +
          '<span class="acc-meta"><span class="chev"></span></span>' +
        '</summary>' +
        '<div class="acc-body">' +
          [6,7,8,9].map(function(gr){
            var l = getSortedGradeLessons(gr);
            var p = pct(l);
            return (
              '<div style="margin:8px 0">' +
                '<div class="row between"><a href="#/lop/' + gr + '" style="text-decoration:none"><b>Lớp ' + gr + '</b></a><span class="muted" style="font-size:.85rem">' + l.filter(function(t){ return isMastered(t.id); }).length + '/' + l.length + ' (' + p + '%)</span></div>' +
                '<div class="bar"><i style="width:' + p + '%"></i></div>' +
              '</div>'
            );
          }).join('') +
        '</div>' +
      '</details>' +
      '<details class="acc-panel">' +
        '<summary class="acc-sum">' +
          '<span class="acc-title">Sao lưu &amp; Đặt lại dữ liệu</span>' +
          '<span class="acc-meta"><span class="chev"></span></span>' +
        '</summary>' +
        '<div class="acc-body">' +
          '<div class="row">' +
            '<button type="button" class="btn sm alt" id="btn-export">Lưu tệp điểm</button>' +
            '<button type="button" class="btn sm subtle" id="btn-import">Mở tệp điểm</button>' +
            '<input type="file" id="file-import" accept="application/json,.json" hidden>' +
            '<button type="button" class="btn sm danger" id="rs">Xóa làm lại</button>' +
          '</div>' +
        '</div>' +
      '</details>';

    app.innerHTML = h;
    mountGradebookWidget(document.getElementById('prog-gb-slot'), selectedGbGrade);
    wireExclusiveDetails(app, '.acc-panel');

    app.querySelectorAll('#prog-g-tabs button').forEach(function(b){
      b.onclick = function(){
        selectedGbGrade = Number(b.dataset.pg);
        setPrefGrade(selectedGbGrade);
        render();
        var firstAcc = app.querySelector('.acc-panel');
        if (firstAcc) firstAcc.open = true;
      };
    });

    document.getElementById('btn-export').onclick = function(){
      var payload = {
        version: 7,
        exportedAt: new Date().toISOString(),
        progress: loadProg(),
        exams: loadExams(),
        mistakes: loadMistakes(),
        meta: loadMeta()
      };
      var blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'so-diem-khtn-' + new Date().toISOString().slice(0,10) + '.json';
      a.click();
      setTimeout(function(){ URL.revokeObjectURL(url); }, 1000);
      showToast('✓ Đã tải tệp sổ điểm về máy.');
    };

    var fileInput = document.getElementById('file-import');
    document.getElementById('btn-import').onclick = function(){ fileInput.click(); };
    fileInput.onchange = function(){
      var f = fileInput.files && fileInput.files[0];
      if (!f) return;
      var reader = new FileReader();
      reader.onload = function(){
        try {
          var data = JSON.parse(reader.result);
          if (data.progress) saveProg(data.progress);
          if (data.exams) saveExams(data.exams);
          if (data.mistakes) saveMistakes(data.mistakes);
          if (data.meta) saveMeta(data.meta);
          syncGradeNavLinks();
          showToast('✓ Đã khôi phục sổ điểm!');
          render();
        } catch (e) {
          alert('Tệp không đúng định dạng sổ điểm.');
        }
      };
      reader.readAsText(f);
    };

    document.getElementById('rs').onclick = function(){
      if (confirm('Xóa toàn bộ điểm số và lịch sử làm bài trên máy này?')) {
        saveProg({});
        saveExams({});
        saveMistakes({});
        saveMeta({});
        try { localStorage.removeItem('khtn-drafts-v1'); localStorage.removeItem('khtn-snapshots-v1'); } catch (e) {}
        showToast('✓ Đã làm mới dữ liệu.');
        render();
      }
    };
  }

  render();
}

// --- Router ---
function route(){
  stopSpeech();
  if (currentCleanup) {
    currentCleanup();
    currentCleanup = null;
  }
  var m = location.hash.replace(/^#\/?/, '').split('/');
  if (m[0] === 'lop') bookToc(parseInt(m[1], 10), m[2]);
  else if (m[0] === 'bai') lesson(m[1]);
  else if (m[0] === 'de-kiem-tra' || m[0] === 'in-nhanh') examCatalog(parseInt(m[1], 10), m[2]);
  else if (m[0] === 'lam-de') examRunner(m[1]);
  else if (m[0] === 'luyen-tap') practice(m[1]);
  else if (m[0] === 'kiem-tra') placement(parseInt(m[1], 10));
  else if (m[0] === 'so-tay') notebook(m[1]);
  else if (m[0] === 'tien-do') progress();
  else bookshelfHome();
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', route);
route();
})();
