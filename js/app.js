(function(){
'use strict';

var D = window.KHTN || [];
var EXAMS = window.KHTN_EXAMS || [];
var BANK = window.KHTNBank;
var app = document.getElementById('app');

var SUBJ = { hoa:'Hóa học', ly:'Vật lí', sinh:'Sinh học', td:'Mở đầu / Trái Đất' };
var DIFF = {
  1:'Mức 1 · Dễ',
  2:'Mức 2 · Trung bình',
  3:'Mức 3 · Khá',
  4:'Mức 4 · Khó'
};
var DIFF_SHORT = {
  1:'Mức 1 · Dễ',
  2:'Mức 2 · TB',
  3:'Mức 3 · Khá',
  4:'Mức 4 · Khó'
};
var STAGE_META = {
  1: { term:'HK1', title:'Nửa đầu Học kì I → Kiểm tra Giữa kì I', note:'Bám sát các chương đầu Học kì I trong SGK.' },
  2: { term:'HK1', title:'Nửa sau Học kì I → Kiểm tra Cuối kì I', note:'Các chương cuối Học kì I (không trộn kiến thức Học kì II).' },
  3: { term:'HK2', title:'Nửa đầu Học kì II → Kiểm tra Giữa kì II', note:'Các chương mở đầu Học kì II trong SGK.' },
  4: { term:'HK2', title:'Nửa sau Học kì II → Kiểm tra Cuối kì II', note:'Hoàn thành các chương cuối năm học.' },
  5: { term:'Cả năm', title:'Đề Tổng hợp & Bồi dưỡng Nâng cao', note:'Dùng khi đã học xong chương trình cả năm hoặc ôn chuyển cấp.' }
};

var SGK_PDF_URLS = {
  6: 'https://thuvienhoclieu.com/sach-giao-khoa-mon-khtn-lop-6-thong-nhat-file-pdf/',
  7: 'https://thuvienhoclieu.com/sach-giao-khoa-mon-khtn-lop-7-thong-nhat-file-pdf/',
  8: 'https://thuvienhoclieu.com/sach-giao-khoa-mon-khtn-lop-8-thong-nhat-file-pdf/',
  9: 'https://thuvienhoclieu.com/sach-giao-khoa-mon-khtn-lop-9-thong-nhat-file-pdf/'
};

var GRADE_SGK_INFO = {
  6: '10 Chương · Bài 1 – Bài 54 SGK',
  7: 'Mở đầu & 10 Chương · Bài 1 – Bài 42 SGK',
  8: 'Mở đầu & 8 Chương · Bài 1 – Bài 46 SGK',
  9: 'Mở đầu & 14 Chương · Bài 1 – Bài 51 SGK'
};

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

// --- Copy & Share Modal ---
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

  var html = '<p style="margin-top:0">Mở học trực tiếp trên điện thoại, máy tính bảng và máy tính — miễn phí, không cần tài khoản.</p>';
  if (hasSpecificPage) {
    html +=
      '<div class="card highlight" style="margin-bottom:10px">' +
        '<b>Link mục đang mở' + (customLabel ? ' (' + esc(customLabel) + ')' : '') + ':</b>' +
        '<div style="margin:6px 0;padding:7px 10px;background:var(--bg);border:1px solid var(--line);border-radius:8px;word-break:break-all;font-size:.86rem">' + esc(curUrl) + '</div>' +
        '<div class="row">' +
          '<button type="button" class="btn sm" id="sh-copy-cur">Sao chép link này</button>' +
          (canNativeShare ? '<button type="button" class="btn sm alt" id="sh-native-cur">Gửi qua Zalo / Tin nhắn</button>' : '') +
        '</div>' +
      '</div>';
  }
  html +=
    '<div class="card">' +
      '<b>Link Mục lục đầy đủ (Lớp 6 – 9):</b>' +
      '<div style="margin:6px 0;padding:7px 10px;background:var(--surface);border:1px solid var(--line);border-radius:8px;word-break:break-all;font-size:.88rem;font-weight:600">' + esc(homeUrl) + '</div>' +
      '<div class="row">' +
        '<button type="button" class="btn ' + (hasSpecificPage ? 'sm alt' : 'sm') + '" id="sh-copy-home">Sao chép link Trang chủ</button>' +
      '</div>' +
    '</div>';

  openInfoModal('Chia sẻ đường link học tập', html, function(modal){
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
    if (themeBtn) themeBtn.textContent = t === 'dark' ? 'Nền sáng' : 'Nền tối';
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
      fontBtn.textContent = f === 'xlarge' ? 'A++ Rất to' : (f === 'large' ? 'A+ Chữ to' : 'A+ Cỡ chữ');
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
  syncGradeNavLinks();
})();

// --- Formatting & Utilities ---
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
function fmtFormula(s){
  return (window.KHTNMath && typeof window.KHTNMath.formatFormula === 'function')
    ? window.KHTNMath.formatFormula(s)
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
// SỔ ĐIỂM THÔNG TƯ 22 CHO ĐỦ CẢ 4 KHỐI LỚP 6, 7, 8, 9
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
  if (score == null || isNaN(score)) return 'Chưa đủ cột điểm';
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
    return '<td' + cls + '><a class="gb-cell-link" href="#/lam-de/' + info.exam.id + '" title="' + esc(info.exam.title) + '">Làm đề ›</a></td>';
  }

  function render(){
    var h =
      '<section class="card" style="margin:12px 0">' +
        '<div class="row between">' +
          '<div>' +
            '<b>Bảng điểm theo kì – KHTN Lớp ' + g + ' (Thông tư 22)</b>' +
            '<div class="muted" style="font-size:.84rem">Bấm vào từng ô để làm đề tương ứng hoặc bấm <b>Nhập thử điểm trường</b> để nhẩm điểm tổng kết.</div>' +
          '</div>' +
          '<button type="button" class="btn sm ' + (simMode ? 'on' : 'alt') + '" id="gb-sim-btn">' + (simMode ? '✕ Đóng tính thử' : 'Nhập thử điểm trường') + '</button>' +
        '</div>' +
        '<div class="gb-wrap">' +
          '<table class="gb-table">' +
            '<thead>' +
              '<tr>' +
                '<th rowspan="2">Học kì</th>' +
                '<th colspan="3" class="gb-stage-h1">Nửa đầu kì → Giữa kì</th>' +
                '<th colspan="3" class="gb-stage-h2">Sau Giữa kì → Cuối kì</th>' +
                '<th rowspan="2">ĐTB kì</th>' +
              '</tr>' +
              '<tr>' +
                '<th>15p Lần 1</th>' +
                '<th>15p Lần 2</th>' +
                '<th class="gb-milestone">Giữa kì (×2)</th>' +
                '<th>15p Lần 3</th>' +
                '<th>15p Lần 4</th>' +
                '<th class="gb-milestone">Cuối kì (×3)</th>' +
              '</tr>' +
            '</thead>' +
            '<tbody>' +
              '<tr>' +
                '<td style="white-space:nowrap"><b>Học kì I</b></td>' +
                cellHtml('hk1-tx1', false) + cellHtml('hk1-tx2', false) + cellHtml('hk1-gk', true) +
                cellHtml('hk1-tx3', false) + cellHtml('hk1-tx4', false) + cellHtml('hk1-ck', true) +
                '<td id="gb-avg-hk1"><b>' + (gb.hk1 != null ? fmtNum(gb.hk1.toFixed(1)) : '—') + '</b></td>' +
              '</tr>' +
              '<tr>' +
                '<td style="white-space:nowrap"><b>Học kì II</b></td>' +
                cellHtml('hk2-tx1', false) + cellHtml('hk2-tx2', false) + cellHtml('hk2-gk', true) +
                cellHtml('hk2-tx3', false) + cellHtml('hk2-tx4', false) + cellHtml('hk2-ck', true) +
                '<td id="gb-avg-hk2"><b>' + (gb.hk2 != null ? fmtNum(gb.hk2.toFixed(1)) : '—') + '</b></td>' +
              '</tr>' +
            '</tbody>' +
          '</table>' +
        '</div>' +
        '<div class="row between" style="font-size:.86rem">' +
          '<span id="gb-year-summary"><b>Điểm TB cả năm:</b> ' + (gb.cn != null ? ('<b class="done">' + fmtNum(gb.cn.toFixed(1)) + '</b> (' + rankLabel(gb.cn) + ')') : 'Hoàn thành các bài hoặc bấm <b>Nhập thử điểm trường</b> để tính.') + '</span>' +
          '<span class="muted">' + fmtMath('ĐTB_kì = \\frac{Tổng 15p + 2·GK + 3·CK}{Số bài 15p + 5}') + '</span>' +
        '</div>' +
      '</section>';

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
        '<b>ĐTB cả năm (nhẩm thử):</b> ' + (scn != null ? ('<b class="done">' + fmtNum(scn.toFixed(1)) + ' / 10</b> — <b>' + rankLabel(scn) + '</b>') : 'Nhập điểm từ 0 đến 10 (có thể để trống Lần 4 nếu chỉ lấy 3 cột 15p).');
    }
    if (simMode) {
      containerEl.querySelectorAll('.gb-inp').forEach(function(inp){ inp.oninput = recalcSim; });
    }
  }
  render();
}

// --- Shared Question Renderer ---
function renderQ(q, displayIdx, opts){
  opts = opts || {};
  var deferred = !!opts.deferred;
  var box = document.createElement('article');
  box.className = 'q';

  var choices = q.o ? (opts.order && opts.order.length === q.o.length ? opts.order : shuffle(q.o)) : null;
  var topicBadge = opts.showTopic && opts.topic
    ? '<span class="badge">Lớp ' + opts.topic.grade + ' · ' + esc(opts.topic.sgk || opts.topic.title) + '</span>'
    : '';

  var h =
    '<div class="q-head">' +
      '<div class="q-meta">' + diffBadge(q) + topicBadge + '</div>' +
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
        '<input type="text" inputmode="decimal" placeholder="Nhập đáp số (VD: 1,5)" aria-label="Nhập đáp án số">' +
        (q.u ? '<span class="badge">' + esc(q.u) + '</span>' : '') +
        (deferred ? '' : '<button type="button" class="btn sm" data-act="check">Kiểm tra</button>') +
      '</div>' +
      '<div class="fb-err" hidden></div>';
  }

  if (opts.hintText && !deferred) {
    h += '<div class="row" style="margin-top:6px"><button type="button" class="btn sm subtle" data-act="hint">Gợi ý công thức</button></div>' +
         '<div class="q-hint" hidden><b>Gợi ý:</b> ' + fmtMath(opts.hintText) + '</div>';
  }
  h += '<div class="fb" hidden></div>';
  box.innerHTML = h;

  var fb = box.querySelector('.fb');
  var errEl = box.querySelector('.fb-err');
  var hintBtn = box.querySelector('[data-act="hint"]');
  var hintBox = box.querySelector('.q-hint');
  var done = false;
  var selectedVal = null;

  if (hintBtn && hintBox) {
    hintBtn.onclick = function(){
      hintBox.hidden = !hintBox.hidden;
      hintBtn.textContent = hintBox.hidden ? 'Gợi ý công thức' : 'Ẩn gợi ý';
    };
  }

  function applyResult(ok, answerState, silent, skipped){
    if (done) return;
    done = true;
    if (errEl) errEl.hidden = true;
    fb.hidden = false;
    fb.className = 'fb ' + (ok ? 'ok' : 'bad');

    var ansLine = '';
    if (!ok) {
      if (q.o) ansLine = '<br>→ Đáp án đúng: <b>' + fmtMath(q.o[0]) + '</b>';
      else if (q.n != null) ansLine = '<br>→ Đáp số đúng: <b>' + fmtNum(q.n) + (q.u ? ' ' + esc(q.u) : '') + '</b>';
    }
    var headText = ok ? '✓ Chính xác!' : (skipped ? 'Chưa điền đáp án (0 điểm).' : '✕ Chưa đúng:');
    fb.innerHTML =
      '<div><b>' + headText + '</b> ' + ansLine + '</div>' +
      (q.w ? '<div style="margin-top:4px"><b>Giải thích:</b> ' + fmtMath(q.w) + '</div>' : '');

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
          errEl.textContent = 'Chỉ cần nhập con số kết quả (ví dụ: 2,5 hoặc 50).';
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

function renderExamCardHtml(ex, saved){
  var st = saved[ex.id];
  var kindBadge = ex.kind === 'gk'
    ? '<span class="badge warn">Kiểm tra Giữa kì</span>'
    : (ex.kind === 'ck'
      ? '<span class="badge d4">Kiểm tra Cuối kì</span>'
      : (ex.kind === '15p'
        ? '<span class="badge pri">Đề 15 phút</span>'
        : '<span class="badge">Đề tổng hợp</span>'));

  return (
    '<div class="card">' +
      '<div class="row between">' +
        kindBadge +
        '<span class="badge">' + (ex.weeks ? esc(ex.weeks) + ' · ' : '') + ex.minutes + 'p · ' + ex.count + ' câu</span>' +
      '</div>' +
      '<h3 style="margin:.45em 0 .2em">' + esc(ex.title) + '</h3>' +
      '<div class="muted" style="font-size:.86rem;margin-bottom:9px">' + esc(ex.scope) + '</div>' +
      (st ? '<div class="' + (st.best >= 0.65 ? 'done' : 'muted') + '" style="font-size:.85rem;margin-bottom:9px">Điểm cao nhất: ' + score10(st.best) + '/10 (' + st.attempts + ' lần)</div>' : '') +
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
    { key:'hk1', label:'Học kì I' },
    { key:'hk2', label:'Học kì II' },
    { key:'15p', label:'Đề 15 phút' },
    { key:'gkck', label:'Giữa kì & Cuối kì' }
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
    var h = '<div class="filters" id="ex-stage-bar">' +
      filters.map(function(f){
        var cnt = examsAll.filter(function(ex){ return matchF(ex, f.key); }).length;
        return '<button type="button" data-ef="' + f.key + '" class="' + (fKey === f.key ? 'on' : '') + '">' + f.label + ' (' + cnt + ')</button>';
      }).join('') + '</div>';

    [1, 2, 3, 4, 5].forEach(function(stNum){
      var group = examsAll.filter(function(ex){ return (ex.stage || 1) === stNum && matchF(ex, fKey); });
      if (!group.length) return;
      var sm = STAGE_META[stNum];
      h +=
        '<div class="stage-block ' + (sm.term === 'HK2' ? 'hk2' : '') + '">' +
          '<h2 style="margin-top:0">' + esc(sm.title) + '</h2>' +
          '<div class="grid two">' + group.map(function(ex){ return renderExamCardHtml(ex, saved); }).join('') + '</div>' +
        '</div>';
    });

    containerEl.innerHTML = h;
    containerEl.querySelectorAll('#ex-stage-bar button').forEach(function(b){
      b.onclick = function(){ fKey = b.dataset.ef; render(); };
    });
    wirePrintButtons(containerEl);
  }
  render();
}

// ============================================================================
// VIEW 1 & 2 UNIFIED: CLEAN TEXTBOOK TABLE OF CONTENTS (MỤC LỤC SÁCH GIÁO KHOA)
// ============================================================================
function bookToc(g, initialMode){
  if ([6,7,8,9].indexOf(g) === -1) g = getPrefGrade();
  setPrefGrade(g);
  updateNavActive('home');

  var mode = initialMode === 'exams' ? 'exams' : 'toc';
  var SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  var meta = loadMeta();
  var recentTopic = meta.lastLessonId && byId[meta.lastLessonId] ? byId[meta.lastLessonId] : null;
  var mistakeCount = Object.keys(loadMistakes()).length;

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

  function buildTocBodyHtml(gradeNum){
    var lessons = getSortedGradeLessons(gradeNum);
    var gExams = EXAMS.filter(function(ex){ return ex.grade === gradeNum; });
    var savedEx = loadExams();

    function renderStageChapters(stageNum){
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
        out +=
          '<div class="toc-chapter">' +
            '<div class="toc-chap-head">' +
              '<div class="toc-chap-title">' +
                (ch.chapCode ? '<em>' + esc(ch.chapCode) + '.</em> ' : '') + esc(ch.chapTitle) +
              '</div>' +
              tag(ch.subj) +
            '</div>';

        ch.items.forEach(function(t){
          var b = best(t.id);
          var rightTxt = b != null
            ? ((b >= 0.67 ? '✓ ' : '') + score10(b) + 'đ')
            : 'Mở bài ›';
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
        out += '</div>';
      });

      // Milestone checkpoint at the end of this stage (15p quizzes + Giữa kì / Cuối kì)
      var stQuizzes = gExams.filter(function(ex){ return ex.stage === stageNum && ex.kind === '15p' && ex.col; });
      var milestoneEx = gExams.find(function(ex){ return ex.stage === stageNum && (ex.kind === 'gk' || ex.kind === 'ck'); });
      if (milestoneEx || stQuizzes.length) {
        var msStat = milestoneEx && savedEx[milestoneEx.id] ? ' (' + score10(savedEx[milestoneEx.id].best) + 'đ)' : '';
        out +=
          '<div class="toc-milestone">' +
            '<div class="toc-ms-main">' +
              (stQuizzes.length
                ? '<div class="toc-ms-quiz-links">' +
                    stQuizzes.map(function(qx){
                      var qDone = savedEx[qx.id] ? ' · ' + score10(savedEx[qx.id].best) + 'đ' : '';
                      return '<a class="toc-ms-pill" href="#/lam-de/' + qx.id + '">' + esc(qx.weeks ? '15p ' + qx.weeks : 'Đề 15p') + qDone + ' ›</a>';
                    }).join('') +
                  '</div>'
                : '') +
              (milestoneEx
                ? '<b>★ ' + esc(milestoneEx.title) + msStat + '</b>'
                : '') +
            '</div>' +
            (milestoneEx
              ? '<div class="row">' +
                  '<a class="btn sm" href="#/lam-de/' + milestoneEx.id + '">Làm đề ' + milestoneEx.minutes + 'p ›</a>' +
                  '<button type="button" class="btn sm alt" data-print-both="' + milestoneEx.id + '">In PDF</button>' +
                '</div>'
              : '') +
          '</div>';
      }
      return out;
    }

    var hk1Lessons = lessons.filter(function(t){ return t.term !== 'HK2'; });
    var hk2Lessons = lessons.filter(function(t){ return t.term === 'HK2'; });

    var html =
      '<section class="toc-term">' +
        '<div class="toc-term-head">' +
          '<strong>Phần I · Học kì I</strong>' +
          '<span>Đã vững ' + hk1Lessons.filter(function(t){ return isMastered(t.id); }).length + '/' + hk1Lessons.length + ' bài</span>' +
        '</div>' +
        renderStageChapters(1) +
        renderStageChapters(2) +
      '</section>' +
      '<section class="toc-term">' +
        '<div class="toc-term-head hk2">' +
          '<strong>Phần II · Học kì II</strong>' +
          '<span>Đã vững ' + hk2Lessons.filter(function(t){ return isMastered(t.id); }).length + '/' + hk2Lessons.length + ' bài</span>' +
        '</div>' +
        renderStageChapters(3) +
        renderStageChapters(4) +
      '</section>';

    return html;
  }

  function renderPage(){
    var lessons = getSortedGradeLessons(g);
    var gExams = EXAMS.filter(function(ex){ return ex.grade === g; });
    var doneCnt = lessons.filter(function(t){ return isMastered(t.id); }).length;
    var pdfUrl = SGK_PDF_URLS[g];

    var h =
      '<div class="toc-header">' +
        '<div>' +
          '<div class="toc-eyebrow">Bộ SGK Thống nhất toàn quốc · Kết nối tri thức với cuộc sống</div>' +
          '<h1>Mục lục Khoa học tự nhiên – Lớp ' + g + '</h1>' +
          '<div class="toc-sub">' +
            '<span>' + esc(GRADE_SGK_INFO[g] || '') + '</span>' +
            '<span>·</span>' +
            '<span>Đã vững <b>' + doneCnt + '/' + lessons.length + '</b> mục (' + pct(lessons) + '%)</span>' +
            (pdfUrl ? '<a class="toc-pdf-link" href="' + esc(pdfUrl) + '" target="_blank" rel="noopener">SGK PDF Lớp ' + g + ' ↗</a>' : '') +
          '</div>' +
        '</div>' +
        '<div class="toc-grades" role="tablist" aria-label="Chọn khối lớp">' +
          [6,7,8,9].map(function(gr){
            return '<button type="button" class="toc-grade-btn ' + (gr === g ? 'on' : '') + '" data-switch-g="' + gr + '">Lớp ' + gr + '</button>';
          }).join('') +
        '</div>' +
      '</div>';

    if (recentTopic || mistakeCount > 0) {
      h += '<div class="toc-bookmark">';
      if (recentTopic) {
        h += '<div>Đang học gần đây: <a href="#/bai/' + recentTopic.id + '">Lớp ' + recentTopic.grade + ' · ' + esc(displayLessonTitle(recentTopic)) + ' ›</a></div>';
      } else {
        h += '<div class="muted">Chọn bài trong mục lục bên dưới để xem lý thuyết &amp; luyện tập.</div>';
      }
      if (mistakeCount > 0) {
        h += '<a href="#/luyen-tap/cau-sai">Ôn lại ' + mistakeCount + ' câu sai ›</a>';
      }
      h += '</div>';
    }

    h +=
      '<div class="toc-toolbar">' +
        '<div class="toc-search-wrap">' +
          '<input type="search" id="toc-search" placeholder="Tìm nhanh chương, bài, công thức (VD: mol, hóa trị, thấu kính...)" aria-label="Tìm bài học hoặc công thức">' +
          (SpeechRec ? '<button type="button" class="mic-btn" id="toc-mic">Giọng nói</button>' : '') +
        '</div>' +
        '<div class="toc-mode-switch">' +
          '<button type="button" class="btn sm ' + (mode === 'toc' ? 'on' : 'subtle') + '" data-mode="toc">Mục lục bài học</button>' +
          '<button type="button" class="btn sm ' + (mode === 'exams' ? 'on' : 'subtle') + '" data-mode="exams">Đề kiểm tra (' + gExams.length + ')</button>' +
          '<button type="button" class="btn sm alt" id="toc-print-formulas">In công thức</button>' +
        '</div>' +
      '</div>' +
      '<div id="toc-search-out" class="search-results" hidden></div>' +
      '<div id="toc-main-body"></div>';

    app.innerHTML = h;

    // Grade switcher
    app.querySelectorAll('[data-switch-g]').forEach(function(btn){
      btn.onclick = function(){
        g = Number(btn.dataset.switchG);
        setPrefGrade(g);
        if (location.hash.indexOf('#/lop/') === 0) {
          history.replaceState(null, '', '#/lop/' + g + (mode === 'exams' ? '/exams' : ''));
        }
        renderPage();
      };
    });

    // Mode switcher
    app.querySelectorAll('[data-mode]').forEach(function(btn){
      btn.onclick = function(){
        mode = btn.dataset.mode;
        renderPage();
      };
    });

    document.getElementById('toc-print-formulas').onclick = function(){
      openGradeFormulaPrint(g);
    };

    var mainBody = document.getElementById('toc-main-body');
    if (mode === 'toc') {
      mainBody.innerHTML = buildTocBodyHtml(g);
      wirePrintButtons(mainBody);
    } else {
      mountExamExplorer(mainBody, g, 'all');
    }

    // Instant Search + Voice
    var sInput = document.getElementById('toc-search');
    var sOut = document.getElementById('toc-search-out');

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
        var ag = a.grade === g ? 0 : 1;
        var bg = b.grade === g ? 0 : 1;
        return ag - bg || a.grade - b.grade || (a.order || 99) - (b.order || 99);
      }).slice(0, 8);

      var matchedExams = EXAMS.filter(function(ex){
        return normVi(ex.title + ' lop ' + ex.grade + ' ' + ex.scope).indexOf(q) > -1;
      }).slice(0, 4);

      if (!matchedTopics.length && !matchedExams.length) {
        sOut.hidden = false;
        sOut.innerHTML = '<div class="empty" style="padding:10px">Không tìm thấy bài khớp từ khóa <b>"' + esc(raw) + '"</b>.</div>';
        return;
      }

      var rows = '';
      matchedTopics.forEach(function(t){
        rows +=
          '<div class="s-item">' +
            '<div>' + tag(t.subj) + ' <b>Lớp ' + t.grade + ' · ' + esc(displayLessonTitle(t)) + '</b></div>' +
            '<a class="btn sm" href="#/bai/' + t.id + '">Mở bài ›</a>' +
          '</div>';
      });
      matchedExams.forEach(function(ex){
        rows +=
          '<div class="s-item">' +
            '<div><span class="badge pri">Đề Lớp ' + ex.grade + '</span> <b>' + esc(ex.title) + '</b></div>' +
            '<a class="btn sm alt" href="#/lam-de/' + ex.id + '">Làm đề ›</a>' +
          '</div>';
      });
      sOut.hidden = false;
      sOut.innerHTML = rows;
    }

    sInput.oninput = function(){ runSearch(sInput.value); };

    var micBtn = document.getElementById('toc-mic');
    if (micBtn && SpeechRec) {
      var rec = null;
      micBtn.onclick = function(){
        if (rec) { try { rec.stop(); } catch (e) {} return; }
        try {
          rec = new SpeechRec();
          rec.lang = 'vi-VN';
          rec.interimResults = false;
          micBtn.classList.add('listening');
          micBtn.textContent = 'Đang nghe…';
          rec.onresult = function(ev){
            var txt = ev.results && ev.results[0] && ev.results[0][0] ? ev.results[0][0].transcript : '';
            if (txt) { sInput.value = txt; runSearch(txt); }
          };
          rec.onend = function(){
            micBtn.classList.remove('listening');
            micBtn.textContent = 'Giọng nói';
            rec = null;
          };
          rec.start();
        } catch (e) {
          micBtn.classList.remove('listening');
          rec = null;
        }
      };
    }
  }

  renderPage();
}

// ============================================================================
// VIEW 3: LESSON (CLEAN SINGLE-COLUMN BOOK PAGE, NO SCRATCHPAD)
// ============================================================================
function lesson(id){
  var t = byId[id];
  if (!t) {
    updateNavActive('home');
    app.innerHTML = '<div class="empty"><p>Không tìm thấy bài học.</p><a class="btn" href="#/">Về Mục lục sách</a></div>';
    return;
  }
  setPrefGrade(t.grade);
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

  var h =
    '<div class="crumb">' +
      '<a href="#/lop/' + t.grade + '">← Mục lục KHTN Lớp ' + t.grade + '</a>' +
      (t.chapCode ? ' › ' + esc(t.chapCode + (t.chapTitle ? ': ' + t.chapTitle : '')) : '') +
    '</div>' +
    '<div class="page-top-bar">' +
      '<div class="row">' +
        tag(t.subj) +
        (t.sgk ? '<span class="badge pri">' + esc(t.sgk) + ' SGK</span>' : '') +
        (t.term ? '<span class="badge">' + esc(t.term === 'HK2' ? 'Học kì II' : 'Học kì I') + '</span>' : '') +
      '</div>' +
      '<div class="row">' +
        (canSpeak ? '<button type="button" class="btn sm subtle" id="btn-tts">Nghe tóm tắt</button>' : '') +
        '<button type="button" class="btn sm alt" id="top-dl-study">In bài + Đáp án</button>' +
      '</div>' +
    '</div>' +
    '<h1>' + esc(displayLessonTitle(t)) + '</h1>';

  h +=
    '<section class="card" style="margin-bottom:14px">' +
      '<h2 style="margin-top:0">1. Kiến thức trọng tâm</h2>' +
      '<ul class="tight">' + t.theory.map(function(s){ return '<li>' + fmtMath(s) + '</li>'; }).join('') + '</ul>' +
      '<h2>2. Công thức &amp; ghi nhớ</h2>' +
      t.formulas.map(function(f){ return '<div class="formula">' + fmtFormula(f) + '</div>'; }).join('');

  var topicTypes = (window.KHTN_TYPES && window.KHTN_TYPES[t.id]) ? window.KHTN_TYPES[t.id] : null;
  if (topicTypes && topicTypes.length) {
    h += '<h2>3. Các dạng bài thường gặp &amp; Ví dụ mẫu</h2>';
    topicTypes.forEach(function(tp){
      h +=
        '<div class="type-card">' +
          '<div><b>' + fmtMath(tp.name) + '</b></div>' +
          '<div class="type-method"><b>Cách làm:</b> ' + fmtMath(tp.method) + '</div>' +
          (tp.ex
            ? '<details>' +
                '<summary>Xem ví dụ &amp; lời giải</summary>' +
                '<div class="type-ex"><b>Ví dụ:</b> ' + fmtMath(tp.ex) +
                  (tp.sol ? '<br><b>Lời giải:</b> ' + fmtMath(tp.sol) : '') +
                '</div>' +
              '</details>'
            : '') +
        '</div>';
    });
  } else if (t.examples && t.examples.length) {
    h += '<h2>3. Ví dụ giải mẫu</h2>';
    t.examples.forEach(function(ex, ei){
      h +=
        '<div class="example-card">' +
          '<div><b>Ví dụ ' + (ei + 1) + '.</b> ' + fmtMath(ex.q) + '</div>' +
          '<details>' +
            '<summary>Xem lời giải từng bước</summary>' +
            '<ol class="example-steps">' + ex.steps.map(function(st){ return '<li>' + fmtMath(st) + '</li>'; }).join('') + '</ol>' +
            '<div><b>Đáp số:</b> ' + fmtMath(ex.ans) + '</div>' +
          '</details>' +
        '</div>';
    });
  }
  h += '</section>';

  h +=
    '<div class="page-top-bar" style="margin-top:16px">' +
      '<h2 style="margin:0">4. Câu hỏi luyện tập</h2>' +
      '<div class="row">' +
        '<button type="button" class="btn sm alt" id="btn-reroll">Đổi bộ câu khác</button>' +
        '<button type="button" class="btn sm subtle" id="pdf-both">In phiếu bài tập</button>' +
      '</div>' +
    '</div>' +
    (availDiffs.length > 1 ? '<div class="ladder" id="diff-ladder"></div>' : '') +
    '<div id="qs"></div>' +
    '<div id="res"></div>';

  if (relatedExams.length) {
    h += '<div class="card soft" style="margin-top:14px"><b>Đề kiểm tra của giai đoạn này:</b><div class="row" style="margin-top:6px">' +
      relatedExams.map(function(ex){
        return '<a class="btn sm subtle" href="#/lam-de/' + ex.id + '">' + esc(ex.title) + ' ›</a>';
      }).join('') + '</div></div>';
  }

  h +=
    '<div class="lesson-nav">' +
      (prevLesson ? '<a class="btn subtle" href="#/bai/' + prevLesson.id + '">← ' + esc(prevLesson.sgk || 'Bài trước') + '</a>' : '<a class="btn subtle" href="#/lop/' + t.grade + '">← Mục lục Lớp ' + t.grade + '</a>') +
      '<a class="btn alt sm" href="#/lop/' + t.grade + '">Mục lục Lớp ' + t.grade + '</a>' +
      (nextLesson ? '<a class="btn" href="#/bai/' + nextLesson.id + '">Tiếp: ' + esc(displayLessonTitle(nextLesson)) + ' →</a>' : '<a class="btn" href="#/de-kiem-tra/' + t.grade + '">Đề kiểm tra Lớp ' + t.grade + ' →</a>') +
    '</div>';

  app.innerHTML = h;

  var ttsBtn = document.getElementById('btn-tts');
  if (ttsBtn && canSpeak) {
    var speakingThis = false;
    ttsBtn.onclick = function(){
      if (speakingThis || window.speechSynthesis.speaking) {
        stopSpeech();
        speakingThis = false;
        ttsBtn.textContent = 'Nghe tóm tắt';
        return;
      }
      var fullTxt = displayLessonTitle(t) + '. ' + t.theory.map(plainSpeechText).join('. ');
      var utt = new SpeechSynthesisUtterance(fullTxt);
      utt.lang = 'vi-VN';
      utt.rate = 0.96;
      speakingThis = true;
      ttsBtn.textContent = 'Dừng đọc';
      utt.onend = function(){ speakingThis = false; ttsBtn.textContent = 'Nghe tóm tắt'; };
      utt.onerror = function(){
        speakingThis = false;
        ttsBtn.textContent = 'Nghe tóm tắt';
        showToast('Thiết bị này chưa cài giọng đọc tiếng Việt.');
      };
      window.speechSynthesis.speak(utt);
    };
  }
  currentCleanup = function(){ stopSpeech(); };

  var qsEl = document.getElementById('qs');
  var resEl = document.getElementById('res');
  var ladderEl = document.getElementById('diff-ladder');

  function rerollQuestions(){
    sampled = BANK ? BANK.sampleLessonSet(t, 4) : { totalAvailable: t.questions.length, items: getTopicPool(t, 1) };
    sessionItems = sampled.items;
    sessionAnswers = {};
    sessionOrders = {};
    lockedPrintSpec = null;
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
    var allIdxs = indicesForDiff('all');
    var allAns = allIdxs.filter(function(i){ return !!sessionAnswers[i]; }).length;
    var pills = [
      '<button type="button" class="ladder-step ' + (selectedDiff === 'all' ? 'on' : '') + '" data-df="all">' +
        '<b>Tất cả</b><small>(' + allAns + '/' + allIdxs.length + ')</small></button>'
    ];
    availDiffs.forEach(function(lv){
      var idxs = indicesForDiff(String(lv));
      var ansCnt = idxs.filter(function(i){ return !!sessionAnswers[i]; }).length;
      pills.push(
        '<button type="button" class="ladder-step ' + (selectedDiff === String(lv) ? 'on' : '') + '" data-df="' + lv + '">' +
          '<b>' + DIFF_SHORT[lv] + '</b><small>(' + ansCnt + '/' + idxs.length + ')</small></button>'
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
    resEl.style.marginTop = '12px';
    resEl.innerHTML =
      '<div class="row between">' +
        '<div><div class="score-big">Kết quả: ' + score10(ratio) + ' / 10</div>' +
        '<div>Đúng <b>' + right + '/' + idxs.length + '</b> câu</div></div>' +
        '<span class="badge ' + (ratio >= 0.67 ? 'ok' : 'warn') + '">' + (ratio >= 0.67 ? '✓ Đã nắm vững' : 'Nên rèn thêm') + '</span>' +
      '</div>' +
      '<div class="row" style="margin-top:10px">' +
        '<button type="button" class="btn" id="again-rand">Làm bộ câu mới</button>' +
        (nextLesson ? '<a class="btn alt" href="#/bai/' + nextLesson.id + '">Sang bài tiếp theo →</a>' : '') +
      '</div>';

    document.getElementById('again-rand').onclick = rerollQuestions;
  }

  function renderQuestionsForSelectedDiff(){
    renderLadder();
    qsEl.innerHTML = '';
    var idxs = indicesForDiff(selectedDiff);
    var classify = (BANK && typeof BANK.classifySection === 'function')
      ? BANK.classifySection
      : function(q, d){ return (q && q.n == null && (!d || d <= 2)) ? 'lt' : 'bt'; };
    var ltIdxs = idxs.filter(function(i){ return (sessionItems[i].sec || classify(sessionItems[i].q, sessionItems[i].d)) === 'lt'; });
    var btIdxs = idxs.filter(function(i){ return (sessionItems[i].sec || classify(sessionItems[i].q, sessionItems[i].d)) !== 'lt'; });
    var showSplit = ltIdxs.length > 0 && btIdxs.length > 0;
    var orderedIdxs = showSplit ? ltIdxs.concat(btIdxs) : idxs;

    orderedIdxs.forEach(function(sIdx, displayIdx){
      if (showSplit && displayIdx === 0) {
        var bA = document.createElement('div');
        bA.className = 'sec-banner';
        bA.innerHTML = '<span>Phần A. Trắc nghiệm lí thuyết</span><span class="badge pri">' + ltIdxs.length + ' câu</span>';
        qsEl.appendChild(bA);
      } else if (showSplit && displayIdx === ltIdxs.length) {
        var bB = document.createElement('div');
        bB.className = 'sec-banner bt';
        bB.innerHTML = '<span>Phần B. Bài tập vận dụng</span><span class="badge">' + btIdxs.length + ' câu</span>';
        qsEl.appendChild(bB);
      }
      var item = sessionItems[sIdx];
      var q = item.q;
      var qNode = renderQ(q, displayIdx, {
        topic: t,
        qIndex: item.staticIdx,
        order: sessionOrders[sIdx] || null,
        savedAnswer: sessionAnswers[sIdx] || null,
        hintText: pickHint(t, q),
        onAnswer: function(ok, ansState){
          sessionAnswers[sIdx] = ansState;
          recordMistake(t.id, item.staticIdx, ok, q);
          renderLadder();
          if (orderedIdxs.every(function(i){ return !!sessionAnswers[i]; })) {
            renderSummary(orderedIdxs, true);
          }
        }
      });
      if (qNode._choices) sessionOrders[sIdx] = qNode._choices;
      qsEl.appendChild(qNode);
    });
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
// VIEW 4: EXAM CATALOG (#/de-kiem-tra/:g/:cat)
// ============================================================================
function examCatalog(g, initialCat){
  if ([6,7,8,9].indexOf(g) === -1) g = getPrefGrade();
  setPrefGrade(g);
  updateNavActive('de-kiem-tra');

  var h =
    '<div class="crumb"><a href="#/lop/' + g + '">← Mục lục Lớp ' + g + '</a> › Đề kiểm tra</div>' +
    '<div class="page-top-bar">' +
      '<h1 style="margin:0">Đề kiểm tra 15p · Giữa kì · Cuối kì – Lớp ' + g + '</h1>' +
      '<div class="toc-grades">' +
        [6,7,8,9].map(function(gr){
          return '<a class="toc-grade-btn ' + (gr === g ? 'on' : '') + '" href="#/de-kiem-tra/' + gr + '">Lớp ' + gr + '</a>';
        }).join('') +
      '</div>' +
    '</div>' +
    '<p class="muted" style="margin:.2em 0 .8em;font-size:.88rem">Đề kiểm tra khóa chặt theo đúng phạm vi chương bài của từng kì trong SGK thống nhất.</p>' +
    '<div id="cat-exams-box"></div>';

  app.innerHTML = h;
  mountExamExplorer(document.getElementById('cat-exams-box'), g, initialCat || 'all');
}

// ============================================================================
// VIEW 5: EXAM RUNNER (#/lam-de/:examId) – CLEAN SINGLE COLUMN, NO SCRATCHPAD
// ============================================================================
function examRunner(examId){
  var ex = examById[examId];
  if (!ex) {
    updateNavActive('de-kiem-tra');
    app.innerHTML = '<div class="empty"><p>Không tìm thấy đề kiểm tra.</p><a class="btn" href="#/de-kiem-tra/' + getPrefGrade() + '">Xem danh sách đề</a></div>';
    return;
  }
  setPrefGrade(ex.grade);
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
      '<div class="crumb"><a href="#/lop/' + ex.grade + '">Mục lục Lớp ' + ex.grade + '</a> › <a href="#/de-kiem-tra/' + ex.grade + '">Đề kiểm tra</a> › ' + esc(ex.title) + '</div>' +
      '<div class="page-top-bar">' +
        '<div class="row">' +
          '<span class="badge pri">Lớp ' + ex.grade + ' · ' + esc(ex.term) + (ex.weeks ? ' · ' + esc(ex.weeks) : '') + '</span>' +
          '<span class="badge">' + ex.minutes + ' phút · ' + ex.count + ' câu</span>' +
        '</div>' +
        '<button type="button" class="btn sm alt" id="ex-print-now">In Đề + Đáp án (PDF)</button>' +
      '</div>' +
      '<h1>' + esc(ex.title) + '</h1>' +
      '<p class="muted" style="margin-top:0"><b>Phạm vi:</b> ' + esc(ex.scope) + '</p>' +
      (st ? '<div class="card soft" style="margin-bottom:12px">Đã làm <b>' + st.attempts + ' lần</b> · Điểm cao nhất: <b class="done">' + score10(st.best) + '/10</b> · Gần nhất: <b>' + score10(st.last) + '/10</b></div>' : '') +
      '<section class="card">' +
        '<h3 style="margin-top:0">1. Chế độ làm bài:</h3>' +
        '<div class="choice-cards" id="mode-cards">' +
          '<button type="button" class="choice-card ' + (examMode === 'practice' ? 'on' : '') + '" data-m="practice">' +
            '<b>Biết Đúng / Sai ngay từng câu</b>' +
            '<small>Chọn đáp án nào xem kết quả và lời giải ngay câu đó.</small>' +
          '</button>' +
          '<button type="button" class="choice-card ' + (examMode === 'exam' ? 'on' : '') + '" data-m="exam">' +
            '<b>Làm như kiểm tra trên lớp</b>' +
            '<small>Làm hết đề rồi bấm Nộp bài ở cuối trang để chấm điểm một lượt.</small>' +
          '</button>' +
        '</div>' +
        '<h3>2. Mức độ câu hỏi:</h3>' +
        '<div class="filters" id="level-pills" style="margin-bottom:14px">' +
          '<button type="button" data-lv="basic" class="' + (levelMode === 'basic' ? 'on' : '') + '">Cơ bản</button>' +
          '<button type="button" data-lv="standard" class="' + (levelMode === 'standard' ? 'on' : '') + '">Chuẩn trên lớp</button>' +
          '<button type="button" data-lv="advanced" class="' + (levelMode === 'advanced' ? 'on' : '') + '">Nâng cao (9–10đ)</button>' +
        '</div>' +
        '<div class="row">' +
          '<button type="button" class="btn lg" id="ex-start">Bắt đầu làm bài ›</button>' +
          '<a class="btn subtle" href="#/de-kiem-tra/' + ex.grade + '">← Chọn đề khác</a>' +
        '</div>' +
      '</section>';

    app.innerHTML = h;

    app.querySelectorAll('#mode-cards .choice-card').forEach(function(c){
      c.onclick = function(){
        examMode = c.dataset.m;
        app.querySelectorAll('#mode-cards .choice-card').forEach(function(x){ x.classList.toggle('on', x === c); });
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
      '<div class="crumb"><a href="#/de-kiem-tra/' + ex.grade + '">← Đề kiểm tra Lớp ' + ex.grade + '</a> › Mã đề ' + esc(attemptSpec.code) + '</div>' +
      '<div class="page-top-bar">' +
        '<h1 style="margin:0">' + esc(ex.title) + '</h1>' +
        '<div class="row">' +
          '<button type="button" class="btn sm alt" id="ex-top-pdf">In Đề + Đáp án</button>' +
          '<button type="button" class="btn sm subtle" id="ex-new">Đổi đề khác</button>' +
          '<button type="button" class="btn sm subtle" id="ex-cfg">Đổi chế độ</button>' +
        '</div>' +
      '</div>' +
      '<div class="exam-bar">' +
        '<div class="row">' +
          '<span class="timer" id="ex-clock">' + fmtClock(leftSec) + '</span>' +
          '<button type="button" class="btn sm subtle" id="ex-pause">Tạm dừng</button>' +
          '<span class="muted" style="font-weight:600" id="ex-prog">Đã làm: 0/' + picks.length + ' câu</span>' +
        '</div>' +
        (isDeferred ? '<button type="button" class="btn sm" id="ex-submit">Nộp bài chấm điểm</button>' : '') +
      '</div>' +
      '<div id="ex-time-msg" class="q-hint" hidden>Đã hết thời gian gợi ý (' + ex.minutes + ' phút). Bạn vẫn có thể kiểm tra lại và bấm Nộp bài.</div>' +
      '<div id="qs"></div>' +
      (isDeferred
        ? '<div class="exam-bottom-submit" id="ex-bottom-box">' +
            '<b id="ex-bottom-prog">Đã chọn đáp án: 0/' + picks.length + ' câu</b>' +
            '<button type="button" class="btn lg" id="ex-submit-bottom">Nộp bài &amp; Chấm điểm</button>' +
          '</div>'
        : '') +
      '<div id="res"></div>';

    app.innerHTML = h;

    var clockEl = document.getElementById('ex-clock');
    var progEl = document.getElementById('ex-prog');
    var bottomProgEl = document.getElementById('ex-bottom-prog');
    var bottomBoxEl = document.getElementById('ex-bottom-box');
    var timeMsgEl = document.getElementById('ex-time-msg');
    var qsEl = document.getElementById('qs');
    var resEl = document.getElementById('res');
    var qNodes = [];

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
        if (progEl) progEl.textContent = 'Đã làm: ' + c + '/' + picks.length + ' câu';
        if (bottomProgEl) bottomProgEl.textContent = 'Đã chọn đáp án: ' + c + '/' + picks.length + ' câu';
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
      if (bottomBoxEl) bottomBoxEl.hidden = true;

      var weakList = Object.keys(weakMap).map(function(k){ return weakMap[k]; });
      resEl.className = 'card highlight';
      resEl.style.marginTop = '14px';
      resEl.innerHTML =
        '<div class="row between">' +
          '<div><div class="score-big">Điểm bài làm: ' + score10(ratio) + ' / 10</div>' +
          '<div>Đúng <b>' + right + '/' + picks.length + '</b> câu · Thời gian: ' + spentTxt + (ex.col ? ' · Đã lưu Sổ điểm' : '') + '</div></div>' +
          '<span class="badge ' + (ratio >= 0.8 ? 'ok' : (ratio >= 0.65 ? 'pri' : 'warn')) + '">' + rankLabel(ratio * 10) + '</span>' +
        '</div>' +
        '<div class="diff-grid">' +
          [1,2,3,4].filter(function(lv){ return byDiff[lv].tot > 0; }).map(function(lv){
            return '<div class="diff-stat"><span class="badge d' + lv + '">' + DIFF_SHORT[lv] + '</span>' +
              '<div style="font-weight:600;margin-top:4px">Đúng ' + byDiff[lv].ok + '/' + byDiff[lv].tot + '</div></div>';
          }).join('') +
        '</div>' +
        (weakList.length
          ? '<b>Bài học cần xem lại:</b><ul class="tight">' + weakList.map(function(t){
              return '<li><a href="#/bai/' + t.id + '">' + esc(displayLessonTitle(t)) + '</a></li>';
            }).join('') + '</ul>'
          : '<p class="done">✓ Xuất sắc! Bạn trả lời đúng toàn bộ câu hỏi trong đề.</p>') +
        '<div class="row" style="margin-top:10px">' +
          '<button type="button" class="btn" id="ex-retry">Làm đề mới</button>' +
          '<button type="button" class="btn alt" id="ex-pdf-both">In Đề + Đáp án</button>' +
          '<a class="btn subtle" href="#/tien-do">Xem Sổ điểm</a>' +
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
          if (progEl) progEl.textContent = 'Đã làm: ' + instantAnswered + '/' + picks.length + ' câu';
          if (instantAnswered === picks.length) finishExam(instantResults);
        }
      });
      qNodes.push(node);
      qsEl.appendChild(node);
    });

    function handleTriggerSubmit(){
      var unanswered = qNodes.filter(function(n){ return !n._isAnswered(); }).length;
      if (unanswered > 0 && !confirm('Còn ' + unanswered + ' câu chưa trả lời (tính 0 điểm câu đó). Bạn vẫn muốn nộp bài?')) return;
      finishExam(qNodes.map(function(n){ return n._grade(); }));
    }
    if (isDeferred) {
      document.getElementById('ex-submit').onclick = handleTriggerSubmit;
      var bSub = document.getElementById('ex-submit-bottom');
      if (bSub) bSub.onclick = handleTriggerSubmit;
    }
  }

  renderSetup();
}

// ============================================================================
// VIEW 6: PRACTICE BUILDER (#/luyen-tap) – CLEAN SINGLE COLUMN
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
    onlyMistakes: presetMode === 'cau-sai',
    sortEasyToHard: true
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
      '<div class="crumb"><a href="#/">← Mục lục sách</a> › Tự chọn bài luyện</div>' +
      '<div class="page-top-bar">' +
        '<h1 style="margin:0">Tự chọn bài luyện tập</h1>' +
        '<a class="btn sm subtle" href="#/kiem-tra/' + getPrefGrade() + '">Kiểm tra kiến thức gốc ›</a>' +
      '</div>' +
      '<section class="card" style="margin-bottom:12px">' +
        '<div class="row">' +
          '<input type="text" id="quick-cmd" style="flex:1;min-width:200px" placeholder="Gõ nhanh: 10 câu mol lớp 8, 10 câu hóa trị lớp 7, 10 câu định luật Ohm…">' +
          '<button type="button" class="btn" id="apply-cmd">Chọn nhanh</button>' +
        '</div>' +
      '</section>' +
      '<section class="card">' +
        '<div class="form-grid">' +
          '<div class="field"><label for="p-grade">Khối lớp</label><select id="p-grade">' +
            '<option value="6">Lớp 6</option><option value="7">Lớp 7</option><option value="8">Lớp 8</option><option value="9">Lớp 9</option><option value="all">Tất cả (6–9)</option>' +
          '</select></div>' +
          '<div class="field"><label for="p-stage">Phạm vi học kì</label><select id="p-stage">' +
            '<option value="all">Cả năm học</option>' +
            '<option value="1">Nửa đầu Học kì I (Trước GK1)</option>' +
            '<option value="2">Trọn Học kì I</option>' +
            '<option value="3only">Nửa đầu Học kì II (Trước GK2)</option>' +
            '<option value="hk2">Trọn Học kì II</option>' +
          '</select></div>' +
          '<div class="field"><label for="p-topic">Chọn chương / bài</label><select id="p-topic"></select></div>' +
          '<div class="field"><label for="p-subj">Mạch kiến thức</label><select id="p-subj">' +
            '<option value="all">Tất cả</option><option value="hoa">Hóa học</option><option value="ly">Vật lí</option><option value="sinh">Sinh học</option><option value="td">Mở đầu / Trái Đất</option>' +
          '</select></div>' +
          '<div class="field"><label for="p-diff">Độ khó</label><select id="p-diff">' +
            '<option value="all">Từ Dễ → Khó</option>' +
            '<option value="1">Chỉ câu Dễ</option>' +
            '<option value="12">Dễ + Trung bình</option>' +
            '<option value="34">Khá + Khó</option>' +
          '</select></div>' +
          '<div class="field"><label for="p-count">Số lượng câu</label><select id="p-count">' +
            '<option value="6">6 câu</option><option value="10">10 câu</option><option value="15">15 câu</option><option value="20">20 câu</option>' +
          '</select></div>' +
        '</div>' +
        (mistakeEntries.length ? '<div class="row" style="margin:6px 0 10px"><label class="row" style="cursor:pointer"><input type="checkbox" id="p-only-err"> Chỉ ôn lại các câu từng làm sai (' + mistakeEntries.length + ' câu)</label></div>' : '') +
        '<div id="p-summary" class="card soft" style="margin-bottom:12px"></div>' +
        '<div class="row">' +
          '<button type="button" class="btn lg" id="p-start">Bắt đầu luyện tập ›</button>' +
          '<button type="button" class="btn alt" id="p-print">In Đề + Đáp án (A4)</button>' +
        '</div>' +
      '</section>';

    app.innerHTML = h;

    var elGrade = document.getElementById('p-grade');
    var elStage = document.getElementById('p-stage');
    var elTopic = document.getElementById('p-topic');
    var elSubj = document.getElementById('p-subj');
    var elDiff = document.getElementById('p-diff');
    var elCount = document.getElementById('p-count');
    var elOnlyErr = document.getElementById('p-only-err');
    var elSummary = document.getElementById('p-summary');
    var btnStart = document.getElementById('p-start');
    var btnPrint = document.getElementById('p-print');
    var cachedSpec = null;

    function rebuildTopicDropdown(){
      var gTopics = D.filter(function(t){
        return (state.grade === 'all' || String(t.grade) === String(state.grade)) && allowedByStageCap(t);
      }).sort(function(a,b){ return a.grade - b.grade || (a.order||99) - (b.order||99); });

      var optsHtml = '<option value="all">-- Tất cả (' + gTopics.length + ' bài) --</option>';
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
      var take = Math.min(pool.length, Number(state.count) || 10);
      if (!pool.length) {
        elSummary.innerHTML = 'Chưa có câu hỏi khớp bộ lọc này. Hãy chọn <b>Cả năm học</b> hoặc <b>Tất cả</b> mạch kiến thức.';
        btnStart.disabled = true;
        btnPrint.disabled = true;
      } else {
        elSummary.innerHTML = '✓ Có sẵn <b>' + pool.length + '+ câu</b> phù hợp · Sẽ lấy <b>' + take + ' câu</b> (xếp từ Dễ → Khó).';
        btnStart.disabled = false;
        btnPrint.disabled = false;
      }
    }

    function syncInputs(){
      elGrade.value = state.grade;
      elStage.value = state.stageCap;
      rebuildTopicDropdown();
      elSubj.value = state.subj;
      elDiff.value = state.diff;
      elCount.value = String(state.count);
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

    elGrade.onchange = function(){ state.grade = elGrade.value; state.topicId = 'all'; rebuildTopicDropdown(); updateSummary(); };
    elStage.onchange = function(){ state.stageCap = elStage.value; state.topicId = 'all'; rebuildTopicDropdown(); updateSummary(); };
    elTopic.onchange = function(){ state.topicId = elTopic.value; updateSummary(); };
    elSubj.onchange = function(){ state.subj = elSubj.value; updateSummary(); };
    elDiff.onchange = function(){ state.diff = elDiff.value; updateSummary(); };
    elCount.onchange = function(){ state.count = parseInt(elCount.value, 10) || 10; updateSummary(); };
    if (elOnlyErr) elOnlyErr.onchange = function(){ state.onlyMistakes = elOnlyErr.checked; updateSummary(); };

    var cmdInput = document.getElementById('quick-cmd');
    function applyPrompt(txt){
      var parsed = parsePracticePrompt(txt);
      state.grade = parsed.grade;
      state.stageCap = parsed.stageCap;
      state.subj = parsed.subj;
      state.diff = parsed.diff;
      state.count = parsed.count;
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
      showToast('✓ Đã lọc câu hỏi theo yêu cầu.');
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
      runPracticeSession(pickItems(), 'Ôn lại các câu từng làm sai');
    }
  }

  function runPracticeSession(picks, customTitle){
    if (!picks.length) { renderBuilder(); return; }
    var title = customTitle || ('Luyện tập (' + picks.length + ' câu · Dễ → Khó)');
    var sheetSpec = window.KHTNPrint.prepare({
      prefix: 'LT',
      docTitle: 'PHIẾU LUYỆN TẬP KHTN',
      subtitle: title,
      items: picks.map(function(x){ return { topicTitle: x.t.sgk || x.t.title, q: x.q }; })
    });

    var h =
      '<div class="crumb"><a href="#/luyen-tap" id="back-builder">← Tự chọn bài luyện</a> › Đang làm bài</div>' +
      '<div class="page-top-bar">' +
        '<h1 style="margin:0">' + esc(title) + '</h1>' +
        '<div class="row">' +
          '<button type="button" class="btn sm alt" id="run-pdf">In Đề + Đáp án</button>' +
          '<button type="button" class="btn sm subtle" id="chg-cfg">Đổi bài khác</button>' +
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

    picks.forEach(function(p, i){
      qsEl.appendChild(renderQ(p.q, i, {
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

          if (answered === picks.length) {
            var ratio = right / picks.length;
            var weakList = Object.keys(weakMap).map(function(k){ return weakMap[k]; });
            resEl.className = 'card highlight';
            resEl.style.marginTop = '12px';
            resEl.innerHTML =
              '<div class="score-big">Kết quả: ' + score10(ratio) + ' / 10</div>' +
              '<p>Đúng <b>' + right + '/' + picks.length + '</b> câu.</p>' +
              (weakList.length
                ? '<b>Các bài nên xem lại:</b><ul class="tight">' + weakList.map(function(t){
                    return '<li><a href="#/bai/' + t.id + '">Lớp ' + t.grade + ' · ' + esc(displayLessonTitle(t)) + '</a></li>';
                  }).join('') + '</ul>'
                : '<p class="done">✓ Xuất sắc! Bạn trả lời đúng tất cả câu hỏi.</p>') +
              '<div class="row" style="margin-top:10px">' +
                '<button type="button" class="btn" id="re-cfg">Làm lượt mới</button>' +
                '<button type="button" class="btn alt" id="s-pdf-both">In Đề + Đáp án</button>' +
              '</div>';

            document.getElementById('re-cfg').onclick = renderBuilder;
            document.getElementById('s-pdf-both').onclick = function(){ window.KHTNPrint.open(sheetSpec, 'both'); };
          }
        }
      }));
    });
  }

  renderBuilder();
}

// ============================================================================
// VIEW 7: PLACEMENT TEST (#/kiem-tra/:g) – CLEAN SINGLE ROW TOOLBAR, NO SCRATCHPAD
// ============================================================================
function placement(g){
  if ([6,7,8,9].indexOf(g) === -1) g = getPrefGrade();
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
    '<div class="crumb"><a href="#/lop/' + g + '">← Mục lục Lớp ' + g + '</a> › Kiểm tra gốc</div>' +
    '<div class="page-top-bar">' +
      '<h1 style="margin:0">Kiểm tra kiến thức gốc – Lớp ' + g + '</h1>' +
      '<div class="toc-grades">' +
        [6,7,8,9].map(function(gr){
          return '<a class="toc-grade-btn ' + (gr === g ? 'on' : '') + '" href="#/kiem-tra/' + gr + '">Lớp ' + gr + '</a>';
        }).join('') +
      '</div>' +
    '</div>' +
    '<div class="page-top-bar" style="margin-bottom:10px">' +
      '<span class="muted" style="font-size:.89rem">Gồm <b>' + picks.length + ' câu cơ bản</b> để phát hiện nhanh phần kiến thức nền cần ôn lại.</span>' +
      '<div class="row">' +
        '<button type="button" class="btn sm alt" id="pl-top-pdf">In Đề + Đáp án</button>' +
        '<button type="button" class="btn sm subtle" id="pl-reroll">Đổi đề khác</button>' +
      '</div>' +
    '</div>' +
    '<div id="qs"></div>' +
    '<div id="res"></div>';

  app.innerHTML = h;
  document.getElementById('pl-top-pdf').onclick = function(){ window.KHTNPrint.open(sheetSpec, 'both'); };
  document.getElementById('pl-reroll').onclick = function(){ placement(g); };

  var qsEl = document.getElementById('qs');
  var resEl = document.getElementById('res');
  var answered = 0, weak = [];

  picks.forEach(function(p, i){
    qsEl.appendChild(renderQ(p.q, i, {
      topic: p.t,
      qIndex: p.qIndex,
      order: sheetSpec.items[i] ? sheetSpec.items[i].choices : null,
      showTopic: true,
      hintText: pickHint(p.t, p.q),
      onAnswer: function(ok){
        answered++;
        if (!ok) weak.push(p.t);
        recordMistake(p.t.id, p.qIndex, ok, p.q);

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
            '<div class="score-big">Điểm kiểm tra gốc: ' + score10(ratio) + ' / 10</div>' +
            '<p>Đúng <b>' + right + '/' + picks.length + '</b> câu.</p>' +
            (weak.length
              ? '<b>Các bài gốc nên xem lại:</b><ul class="tight">' +
                weak.map(function(t){
                  return '<li><a href="#/bai/' + t.id + '">Lớp ' + t.grade + ' · ' + esc(displayLessonTitle(t)) + '</a></li>';
                }).join('') + '</ul>'
              : '<p class="done">✓ Nền tảng rất vững để học Lớp ' + g + '.</p>') +
            '<div class="row" style="margin-top:10px">' +
              '<button type="button" class="btn" id="re">Làm đề khác</button>' +
              '<button type="button" class="btn alt" id="pl-pdf">In Đề + Đáp án</button>' +
            '</div>';

          document.getElementById('re').onclick = function(){ placement(g); };
          document.getElementById('pl-pdf').onclick = function(){ window.KHTNPrint.open(sheetSpec, 'both'); };
        }
      }
    }));
  });
}

// ============================================================================
// VIEW 8: NOTEBOOK (#/so-tay)
// ============================================================================
function notebook(initialTab){
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
      '<div class="crumb"><a href="#/">← Mục lục sách</a> › Công thức &amp; Câu hay sai</div>' +
      '<div class="page-top-bar">' +
        '<h1 style="margin:0">Sổ tay Công thức &amp; Câu hay sai</h1>' +
        '<button type="button" class="btn sm alt" id="nb-print-btn">' +
          (tab === 'formulas' ? 'In Sổ tay đang xem' : 'In phiếu câu sai') +
        '</button>' +
      '</div>' +
      '<div class="tabs">' +
        '<button type="button" data-tab="formulas" class="' + (tab === 'formulas' ? 'on' : '') + '">Bảng công thức theo SGK</button>' +
        '<button type="button" data-tab="mistakes" class="' + (tab === 'mistakes' ? 'on' : '') + '">Câu từng làm sai (' + mList.length + ')</button>' +
      '</div>';

    if (tab === 'formulas') {
      h +=
        '<div class="toc-toolbar">' +
          '<div class="toc-search-wrap"><input type="search" id="nb-search" placeholder="Tìm nhanh công thức (VD: mol, định luật Ohm, áp suất)…" value="' + esc(query) + '"></div>' +
          '<div class="toc-grades" id="nb-g">' +
            ['6','7','8','9','all'].map(function(gv){
              return '<button type="button" class="toc-grade-btn ' + (gradeFilter === gv ? 'on' : '') + '" data-g="' + gv + '">' + (gv === 'all' ? 'Tất cả' : 'Lớp ' + gv) + '</button>';
            }).join('') +
          '</div>' +
        '</div>' +
        '<div class="filters" id="nb-s">' +
          ['all'].concat(Object.keys(SUBJ)).map(function(s){
            return '<button type="button" data-s="' + s + '" class="' + (subjFilter === s ? 'on' : '') + '">' + (s === 'all' ? 'Tất cả môn' : SUBJ[s]) + '</button>';
          }).join('') +
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
        var out = '';
        groups.forEach(function(grp){
          var t = grp.topic;
          out +=
            '<div class="card" style="margin:9px 0">' +
              '<div class="row between">' +
                '<div>' + tag(t.subj) + ' <a href="#/bai/' + t.id + '" style="font-weight:700;text-decoration:none">Lớp ' + t.grade + ' · ' + esc((t.chapCode ? t.chapCode + ' – ' : '') + displayLessonTitle(t)) + '</a></div>' +
                '<a class="btn sm subtle" href="#/bai/' + t.id + '">Mở bài ›</a>' +
              '</div>' +
              grp.formulas.map(function(f){ return '<div class="formula">' + fmtFormula(f) + '</div>'; }).join('') +
            '</div>';
        });
        document.getElementById('nb-list').innerHTML = out || '<div class="empty">Không tìm thấy công thức khớp từ khóa này.</div>';
      }
      showFormulas();
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
            '<span>Khi làm lại đúng, câu hỏi sẽ tự động được gỡ khỏi danh sách sai.</span>' +
            '<a class="btn sm" href="#/luyen-tap/cau-sai">Luyện lại ' + mList.length + ' câu này ›</a>' +
          '</div>';
        mList.forEach(function(m){
          var t = byId[m.topicId];
          var q = getMistakeQuestion(m);
          var ans = q.o ? q.o[0] : (fmtNum(q.n) + (q.u ? ' ' + q.u : ''));
          out +=
            '<div class="card" style="margin:9px 0">' +
              '<div class="row between">' +
                '<div>' + tag(t.subj) + ' ' + diffBadge(q) + ' <a href="#/bai/' + t.id + '"><b>Lớp ' + t.grade + ' · ' + esc(displayLessonTitle(t)) + '</b></a></div>' +
                '<span class="badge warn">Nhầm ' + (m.count || 1) + ' lần</span>' +
              '</div>' +
              '<p style="margin:.5em 0 .4em"><b>Câu hỏi:</b> ' + fmtMath(q.q) + '</p>' +
              '<div class="fb ok"><b>Đáp án đúng:</b> ' + fmtMath(ans) + (q.w ? '<br><b>Giải thích:</b> ' + fmtMath(q.w) : '') + '</div>' +
            '</div>';
        });
        box.innerHTML = out;
      }
    }
  }
  render();
}

// ============================================================================
// VIEW 9: PROGRESS & GRADEBOOK (#/tien-do) – ALL 4 GRADES 6, 7, 8, 9
// ============================================================================
function progress(){
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
      '<div class="crumb"><a href="#/">← Mục lục sách</a> › Sổ điểm &amp; Tiến độ</div>' +
      '<div class="page-top-bar">' +
        '<h1 style="margin:0">Sổ điểm &amp; Tiến độ học tập</h1>' +
        '<div class="toc-grades" id="prog-g-tabs">' +
          [6,7,8,9].map(function(gr){
            return '<button type="button" class="toc-grade-btn ' + (gr === selectedGbGrade ? 'on' : '') + '" data-pg="' + gr + '">Lớp ' + gr + '</button>';
          }).join('') +
        '</div>' +
      '</div>' +
      '<div class="grid stats" style="margin:12px 0">' +
        '<div class="card"><div class="muted">Bài đã vững</div><div class="stat-val">' + completed + ' / ' + D.length + '</div></div>' +
        '<div class="card"><div class="muted">Điểm TB bài học</div><div class="stat-val">' + avgScore + '</div></div>' +
        '<div class="card"><div class="muted">Đề KT đã làm</div><div class="stat-val">' + doneExamIds.length + ' / ' + EXAMS.length + '</div></div>' +
        '<div class="card"><div class="muted">Câu cần ôn lại</div><div class="stat-val">' + mistakeCount + '</div></div>' +
      '</div>' +
      '<div id="prog-gb-slot"></div>' +
      '<section class="card" style="margin:12px 0">' +
        '<h2 style="margin-top:0">Tiến độ hoàn thành Mục lục theo Lớp</h2>' +
        [6,7,8,9].map(function(gr){
          var l = getSortedGradeLessons(gr);
          var p = pct(l);
          return (
            '<div style="margin:9px 0">' +
              '<div class="row between"><a href="#/lop/' + gr + '" style="text-decoration:none"><b>KHTN Lớp ' + gr + '</b></a><span class="muted">' + l.filter(function(t){ return isMastered(t.id); }).length + '/' + l.length + ' mục (' + p + '%)</span></div>' +
              '<div class="bar"><i style="width:' + p + '%"></i></div>' +
            '</div>'
          );
        }).join('') +
      '</section>' +
      '<div class="card soft">' +
        '<div class="row between">' +
          '<span class="muted" style="font-size:.86rem">Điểm tự lưu trên thiết bị này. Có thể sao lưu ra tệp hoặc xóa làm mới:</span>' +
          '<div class="row">' +
            '<button type="button" class="btn sm alt" id="btn-export">Lưu sổ điểm</button>' +
            '<button type="button" class="btn sm subtle" id="btn-import">Mở tệp điểm</button>' +
            '<input type="file" id="file-import" accept="application/json,.json" hidden>' +
            '<button type="button" class="btn sm danger" id="rs">Xóa làm lại</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    app.innerHTML = h;
    mountGradebookWidget(document.getElementById('prog-gb-slot'), selectedGbGrade);

    app.querySelectorAll('#prog-g-tabs button').forEach(function(b){
      b.onclick = function(){
        selectedGbGrade = Number(b.dataset.pg);
        setPrefGrade(selectedGbGrade);
        render();
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
      if (confirm('Xóa toàn bộ điểm số và lịch sử làm bài trên máy này để bắt đầu lại từ đầu?')) {
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
  else bookToc(getPrefGrade(), 'toc');
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', route);
route();
})();
