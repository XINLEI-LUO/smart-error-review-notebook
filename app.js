const STORAGE_KEY = 'wrong-question-mvp-v1';
const DAILY_TASK_KEY = 'wrong-question-daily-task-v3';
const REVIEW_INTERVALS_DAYS = [1, 3, 7, 15, 30, 60, 120];

const LANGUAGE_KEY = 'wrong-question-language-v4';
let currentLanguage = localStorage.getItem(LANGUAGE_KEY) || 'en';

const I18N = {
  en: {
    appTitle:'Wrong Question Review', appSubtitle:'Upload mistakes · Knowledge tags · Smart review · Daily tasks · Analytics', installApp:'Install as app', tabAdd:'Add question', tabDaily:'Daily task', tabReview:'Review', tabLibrary:'Library', tabStats:'Analytics', tabData:'Backup / Restore',
    categoryLabel:'Subject / category', categoryPlaceholder:'e.g. Mathematics / English / Physics', typeLabel:'Question type', singleChoice:'Single choice', multipleChoice:'Multiple choice', blankQuestion:'Fill in the blank', tagsLabel:'Knowledge tags', tagsPlaceholder:'e.g. Derivatives, monotonicity, cloze test. Separate tags with commas.', questionTextLabel:'Question text', questionTextPlaceholder:'Enter the question. You can also upload only an image.', imageLabel:'Question image (optional)', imageKeepHint:'Editing an existing question: the old image will be kept unless you upload a new one.', optionsLabel:'Options', addOption:'+ Add option', optionsHint:'Single/multiple choice questions can have any number of options. You can edit or delete options. Blank questions hide the option area automatically.', blankAnswerLabel:'Blank answer', blankAnswerPlaceholder:'e.g. 42; separate acceptable answers with |, such as 42|forty-two', explanationLabel:'Explanation (optional)', explanationPlaceholder:'You can add an explanation now, or add/edit it later.', saveQuestion:'Save question', saveChanges:'Save changes', cancelEdit:'Cancel edit', dailyCategoryLabel:'Task category', dailyCountLabel:'Daily task count', includeNew:'Include new questions', generateDaily:'Generate today’s task', startDaily:'Start today’s task', reviewCategoryLabel:'Choose category', modeLabel:'Mode', modeRandom:'Random', modeOrder:'In order', modeSmart:'Smart review: due / weak first', countLabel:'Count', includeMastered:'Include mastered', startReview:'Start review', searchLabel:'Search questions', searchPlaceholder:'Search question text, options, answers, explanations, tags', filterCategoryLabel:'Filter category', filterTagLabel:'Filter tag', sortLabel:'Sort', sortCreated:'Newest', sortDue:'Most urgent', sortWrong:'Most mistakes', sortErrorRate:'Highest error rate', showMastered:'Show mastered', statsCategoryLabel:'Analytics category', statsTagLabel:'Analytics tag', refreshStats:'Refresh analytics', dataHint:'This version stores data locally in your browser. Data may be lost if you change devices or clear browser storage, so export JSON backups regularly.', exportJson:'Export question JSON', importJson:'Import question JSON', optionPlaceholder:'Option text, e.g. A. 12', correctLabel:'Correct', deleteBtn:'Delete',
    all:'All', neverReviewed:'Never reviewed', due:'Due', dueToday:'Due today', daysLater:'{n} days later', highPriority:'High priority', midPriority:'Medium priority', lowPriority:'Low priority', needTextOrImage:'Please enter question text or upload an image.', needTwoOptions:'Choice questions need at least 2 options.', needCorrect:'Please mark the correct answer.', singleOnlyOne:'Single-choice questions can only have 1 correct answer.', needBlankAnswer:'Please enter the blank answer.', updated:'Question updated.', saved:'Question saved.', noQuestionsForFilter:'No questions match the current review filters.', noQuestions:'No questions to review.', typeSingleShort:'Single', typeMultipleShort:'Multiple', typeBlankShort:'Blank', questionProgress:'Question {current} / {total}', inputYourAnswer:'Enter your answer', questionImageAlt:'Question image', submitAnswer:'Submit answer', nextQuestion:'Next question', correctAnswer:'Correct answer', wrongAnswer:'Wrong answer', correctAnswerLabel:'Correct answer', nextReview:'Next review', explanationTitle:'Explanation:', noExplanation:'No explanation yet. You can add one in the library.', reviewFinished:'Review finished', totalQuestions:'Total questions', correct:'Correct', wrong:'Wrong', accuracy:'Accuracy', reviewAgain:'Review again', searchFound:'{n} matching questions found.', mastered:'Mastered', notMastered:'Not mastered', reviewTimes:'Reviewed {review} times, wrong {wrong} times', streak:'Correct streak {n}', editQuestion:'Edit question', unmaster:'Unmark mastered', markMastered:'Mark mastered', confirmDelete:'Delete this question?', viewDetails:'View answer, options and explanation', answer:'Answer', none:'None', quickEditExplanation:'Quick edit explanation', editHelp:'To change the question text, category, tags, answer, or options, click “Edit question”.', noMatchingQuestions:'No matching questions.', imageQuestion:'[Image question]', noDaily:'No task generated for today', dueAvailable:'There are {n} due/new questions available. Click “Generate today’s task” and the system will choose the most important questions by smart priority.', todayTask:'{date} daily task', category:'Category', planned:'Planned', generated:'Generated', questionsUnit:'questions', wrongTimes:'wrong {n} times', errorRate:'error rate {n}', noDailyAlert:'No task for today. Please generate today’s task first.', totalBank:'Total questions', dueTodayStat:'Due today', masteredStat:'Mastered', totalAttempts:'Total attempts', overallAccuracy:'Overall accuracy', last14:'Last 14 days review count', noReviewTrend:'No review history yet. After you start reviewing, the trend will appear here.', categoryStats:'Category count and accuracy', noCategoryData:'No category data.', tagWeakRanking:'Weak knowledge tag ranking', noTagData:'No tag data yet. Add knowledge tags when saving questions and this section will update automatically.', weakestQuestions:'Questions needing most review', noWrongData:'No wrong-answer record yet. After you answer incorrectly, questions will appear here.', algorithmTitle:'Algorithm notes', algorithmP1:'Daily task and smart review prioritise due questions, high-error-rate questions, questions not reviewed for a long time, and new questions.', algorithmP2:'Wrong answer: correct streak resets to 0 and the question becomes due immediately. Correct answer: streak +1 and the next review is scheduled after 1, 3, 7, 15, 30, 60, or 120 days.', countWithAccuracy:'{count} questions · accuracy {accuracy}', tagMeta:'{count} questions · wrong {wrong} times · error rate {errorRate} · accuracy {accuracy}', weakMeta:'wrong {wrong} times · error rate {errorRate} · {due}', importSuccess:'Import successful.', importFail:'Import failed: invalid JSON format.', uncategorized:'Uncategorized'
  },
  zh: {
    appTitle:'错题复习本', appSubtitle:'上传错题 · 知识点标签 · 智能复习 · 每日任务 · 统计分析', installApp:'安装为 APP', tabAdd:'添加错题', tabDaily:'每日任务', tabReview:'刷题复习', tabLibrary:'题库管理', tabStats:'统计分析', tabData:'备份/恢复',
    categoryLabel:'科目/分类', categoryPlaceholder:'例如：数学 / 英语 / 物理', typeLabel:'题型', singleChoice:'单选题', multipleChoice:'多选题', blankQuestion:'填空题', tagsLabel:'知识点标签', tagsPlaceholder:'例如：导数, 函数单调性, 完形填空。多个标签用逗号分隔', questionTextLabel:'题目文字', questionTextPlaceholder:'输入题干。也可以只上传题目图片。', imageLabel:'题目图片（可选）', imageKeepHint:'正在编辑已有题目：不重新上传图片则保留原图片。', optionsLabel:'选项', addOption:'+ 添加选项', optionsHint:'单选/多选题可添加任意数量选项，也可以删除/修改选项；填空题会自动隐藏选项区。', blankAnswerLabel:'填空题答案', blankAnswerPlaceholder:'例如：42；多个可接受答案用 | 分隔，如 42|四十二', explanationLabel:'解析（可选）', explanationPlaceholder:'上传时可以写解析，之后做题时也能补充/修改。', saveQuestion:'保存错题', saveChanges:'保存修改', cancelEdit:'取消编辑', dailyCategoryLabel:'任务分类', dailyCountLabel:'每日任务数量', includeNew:'包含新题', generateDaily:'生成今日任务', startDaily:'开始今日任务', reviewCategoryLabel:'选择分类', modeLabel:'模式', modeRandom:'随机', modeOrder:'按顺序', modeSmart:'智能复习：到期/易错优先', countLabel:'数量', includeMastered:'包含已标熟', startReview:'开始刷题', searchLabel:'搜索错题', searchPlaceholder:'搜索题干、选项、答案、解析、标签', filterCategoryLabel:'筛选分类', filterTagLabel:'筛选知识点', sortLabel:'排序', sortCreated:'最新添加', sortDue:'最需要复习', sortWrong:'错得最多', sortErrorRate:'错误率最高', showMastered:'显示已标熟', statsCategoryLabel:'统计分类', statsTagLabel:'统计知识点', refreshStats:'刷新统计', dataHint:'当前版本数据保存在浏览器本地。换电脑、清浏览器缓存可能会丢失，所以建议定期导出 JSON。', exportJson:'导出题库 JSON', importJson:'导入题库 JSON', optionPlaceholder:'选项内容，例如：A. 12', correctLabel:'正确', deleteBtn:'删除',
    all:'全部', neverReviewed:'从未复习', due:'已到期', dueToday:'今天到期', daysLater:'{n} 天后', highPriority:'高优先级', midPriority:'中优先级', lowPriority:'低优先级', needTextOrImage:'请至少输入题目文字或上传图片。', needTwoOptions:'选择题至少需要 2 个选项。', needCorrect:'请勾选正确答案。', singleOnlyOne:'单选题只能有 1 个正确答案。', needBlankAnswer:'请填写填空题答案。', updated:'已更新错题。', saved:'已保存错题。', noQuestionsForFilter:'当前筛选条件下没有可复习的错题。', noQuestions:'没有可复习的题。', typeSingleShort:'单选', typeMultipleShort:'多选', typeBlankShort:'填空', questionProgress:'第 {current} / {total} 题', inputYourAnswer:'输入你的答案', questionImageAlt:'题目图片', submitAnswer:'提交答案', nextQuestion:'下一题', correctAnswer:'回答正确', wrongAnswer:'回答错误', correctAnswerLabel:'正确答案', nextReview:'下次复习', explanationTitle:'解析：', noExplanation:'暂无解析，可以在题库管理中补充。', reviewFinished:'本次复习结束', totalQuestions:'总题数', correct:'正确', wrong:'错误', accuracy:'正确率', reviewAgain:'再刷一次', searchFound:'搜索到 {n} 道相关错题。', mastered:'已标熟', notMastered:'未标熟', reviewTimes:'复习 {review} 次，错 {wrong} 次', streak:'连续答对 {n} 次', editQuestion:'编辑题目', unmaster:'取消标熟', markMastered:'标熟', confirmDelete:'确定删除这道错题吗？', viewDetails:'查看答案、选项和解析', answer:'答案', none:'暂无', quickEditExplanation:'快速修改解析', editHelp:'需要修改题干、分类、标签、答案、删除/修改选项，请点“编辑题目”。', noMatchingQuestions:'暂无符合条件的错题。', imageQuestion:'[图片题]', noDaily:'今天还没有生成任务', dueAvailable:'当前有 {n} 道到期/新题可以安排。点击“生成今日任务”后，系统会按智能算法自动选出最该复习的题。', todayTask:'{date} 今日任务', category:'分类', planned:'计划数量', generated:'实际生成', questionsUnit:'道', wrongTimes:'错{n}次', errorRate:'错误率{n}', noDailyAlert:'今天还没有任务，请先生成今日任务。', totalBank:'题库总数', dueTodayStat:'今日应复习', masteredStat:'已标熟', totalAttempts:'累计作答', overallAccuracy:'总体正确率', last14:'最近 14 天刷题量', noReviewTrend:'还没有复习记录，开始刷题后这里会显示趋势。', categoryStats:'分类题量和正确率', noCategoryData:'暂无分类数据。', tagWeakRanking:'知识点标签薄弱排行', noTagData:'还没有标签数据。添加错题时填写“知识点标签”后，这里会自动统计。', weakestQuestions:'最需要回炉的错题', noWrongData:'还没有错题记录，答错后这里会自动显示。', algorithmTitle:'算法说明', algorithmP1:'每日任务和智能复习会优先抽取：已经到期的题、错误率高的题、很久没复习的题、从未复习的新题。', algorithmP2:'答错：连续答对次数清零，并立即进入待复习。答对：连续答对次数 +1，并按 1、3、7、15、30、60、120 天逐步延后。', countWithAccuracy:'{count}题 · 正确率{accuracy}', tagMeta:'{count}题 · 错{wrong}次 · 错误率{errorRate} · 正确率{accuracy}', weakMeta:'错{wrong}次 · 错误率{errorRate} · {due}', importSuccess:'导入成功。', importFail:'导入失败：JSON 格式不正确。', uncategorized:'未分类'
  }
};
function tr(key, vars = {}) { let text = (I18N[currentLanguage] && I18N[currentLanguage][key]) || I18N.en[key] || key; Object.entries(vars).forEach(([k,v]) => text = text.replaceAll(`{${k}}`, v)); return text; }
function applyTranslations() { document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : 'en'; document.title = currentLanguage === 'zh' ? '错题复习本 MVP v4' : 'Wrong Question Review MVP v4'; document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = tr(el.dataset.i18n); }); document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = tr(el.dataset.i18nPlaceholder); }); }
function toggleLanguage() { currentLanguage = currentLanguage === 'en' ? 'zh' : 'en'; localStorage.setItem(LANGUAGE_KEY, currentLanguage); applyTranslations(); refreshAll(); if (!$('quizArea').classList.contains('hidden')) renderQuizQuestion(); }

let questions = migrateQuestions(loadQuestions());
let currentQuiz = [];
let quizIndex = 0;
let quizStats = { correct: 0, wrong: 0 };
let deferredPrompt = null;
let retainedEditImage = '';

const $ = (id) => document.getElementById(id);
const uid = () => crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random());

function loadQuestions() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { return []; }
}

function parseTags(value) {
  if (Array.isArray(value)) return value.map(t => String(t).trim()).filter(Boolean);
  return String(value || '').split(/[,，、]/).map(t => t.trim()).filter(Boolean);
}

function migrateQuestions(list) {
  return list.map(q => ({
    ...q,
    tags: parseTags(q.tags || q.knowledgeTags || ''),
    mastered: Boolean(q.mastered),
    reviewCount: Number(q.reviewCount || 0),
    wrongCount: Number(q.wrongCount || 0),
    correctCount: Number(q.correctCount || 0),
    correctStreak: Number(q.correctStreak || 0),
    lastReviewedAt: q.lastReviewedAt || '',
    nextReviewAt: q.nextReviewAt || '',
    reviewHistory: Array.isArray(q.reviewHistory) ? q.reviewHistory : []
  }));
}

function saveQuestions() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(questions));
  refreshAll();
}

function normalizeText(value) {
  return String(value || '').trim().replace(/\s+/g, ' ').toLowerCase();
}
function escapeHtml(str) {
  return String(str || '').replace(/[&<>"]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[s]));
}
function getCategories() {
  return ['全部', ...Array.from(new Set(questions.map(q => q.category).filter(Boolean))).sort()];
}
function getTags() {
  return ['全部', ...Array.from(new Set(questions.flatMap(q => q.tags || []).filter(Boolean))).sort()];
}
function readImageAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    if (!file) return resolve('');
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
function daysBetween(a, b) {
  const ms = new Date(b).setHours(0,0,0,0) - new Date(a).setHours(0,0,0,0);
  return Math.max(0, Math.floor(ms / 86400000));
}
function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d.toISOString();
}
function todayKey() { return new Date().toISOString().slice(0, 10); }
function isDue(q) { return !q.nextReviewAt || new Date(q.nextReviewAt) <= new Date(); }
function getErrorRate(q) { return q.reviewCount ? q.wrongCount / q.reviewCount : 0; }
function getDueText(q) {
  if (!q.reviewCount) return tr('neverReviewed');
  if (isDue(q)) return tr('due');
  const days = daysBetween(new Date().toISOString(), q.nextReviewAt);
  return days <= 0 ? tr('dueToday') : tr('daysLater', { n: days });
}
function getPriorityText(q) {
  const score = smartScore(q);
  if (score >= 120) return { text: tr('highPriority'), cls: 'priority-high' };
  if (score >= 70) return { text: tr('midPriority'), cls: 'priority-mid' };
  return { text: tr('lowPriority'), cls: 'priority-low' };
}
function smartScore(q) {
  const now = new Date();
  const dueBonus = isDue(q) ? 100 : 0;
  const errorBonus = getErrorRate(q) * 60;
  const daysSince = q.lastReviewedAt ? daysBetween(q.lastReviewedAt, now.toISOString()) : 30;
  const forgottenBonus = Math.min(daysSince, 30);
  const newQuestionBonus = q.reviewCount === 0 ? 25 : 0;
  const weakStreakBonus = q.correctStreak === 0 && q.reviewCount > 0 ? 15 : 0;
  return dueBonus + errorBonus + forgottenBonus + newQuestionBonus + weakStreakBonus;
}
function updateReviewSchedule(q, isCorrect) {
  const now = new Date().toISOString();
  q.reviewCount += 1;
  q.lastReviewedAt = now;
  if (isCorrect) {
    quizStats.correct += 1;
    q.correctCount += 1;
    q.correctStreak += 1;
    const interval = REVIEW_INTERVALS_DAYS[Math.min(q.correctStreak - 1, REVIEW_INTERVALS_DAYS.length - 1)];
    q.nextReviewAt = addDays(now, interval);
  } else {
    quizStats.wrong += 1;
    q.wrongCount += 1;
    q.correctStreak = 0;
    q.nextReviewAt = now;
  }
  q.reviewHistory.push({ at: now, correct: isCorrect, category: q.category, type: q.type, tags: q.tags || [] });
}

function addOptionRow(value = '', correct = false) {
  const clone = $('optionTemplate').content.cloneNode(true);
  clone.querySelector('.option-text').value = value;
  clone.querySelector('.option-correct').checked = correct;
  clone.querySelector('.remove-option').onclick = (e) => e.target.closest('.option-row').remove();
  $('optionsList').appendChild(clone);
  applyTranslations();
}
function resetForm() {
  $('questionForm').reset();
  $('editingId').value = '';
  retainedEditImage = '';
  $('saveQuestionBtn').textContent = tr('saveQuestion');
  $('cancelEditBtn').classList.add('hidden');
  $('imageKeepHint').classList.add('hidden');
  $('optionsList').innerHTML = '';
  addOptionRow();
  addOptionRow();
  toggleTypeFields();
}
function toggleTypeFields() {
  const isBlank = $('type').value === 'blank';
  $('optionsArea').classList.toggle('hidden', isBlank);
  $('blankAnswerWrap').classList.toggle('hidden', !isBlank);
}
function refreshSelect(selectId, values) {
  const select = $(selectId);
  if (!select) return;
  const old = select.value;
  select.innerHTML = values.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c === '全部' ? tr('all') : c)}</option>`).join('');
  if (values.includes(old)) select.value = old;
}
function refreshAll() {
  const cats = getCategories();
  const tags = getTags();
  ['reviewCategory','listCategory','statsCategory','dailyCategory'].forEach(id => refreshSelect(id, cats));
  ['listTag','statsTag'].forEach(id => refreshSelect(id, tags));
  renderQuestionList();
  renderStats();
  renderDailyTask();
}
function switchView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.toggle('active', v.id === viewId));
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.view === viewId));
  if (viewId === 'statsView') renderStats();
  if (viewId === 'dailyView') renderDailyTask();
}

async function handleSubmit(e) {
  e.preventDefault();
  const type = $('type').value;
  const newImage = await readImageAsDataUrl($('questionImage').files[0]);
  const image = newImage || retainedEditImage || '';
  const optionRows = Array.from(document.querySelectorAll('.option-row'));
  const options = optionRows.map((row, index) => ({
    id: String(index),
    text: row.querySelector('.option-text').value.trim(),
    correct: row.querySelector('.option-correct').checked
  })).filter(o => o.text);

  const questionText = $('questionText').value.trim();
  if (!questionText && !image) return alert(tr('needTextOrImage'));
  if (type !== 'blank' && options.length < 2) return alert(tr('needTwoOptions'));
  if (type !== 'blank' && !options.some(o => o.correct)) return alert(tr('needCorrect'));
  if (type === 'single' && options.filter(o => o.correct).length !== 1) return alert(tr('singleOnlyOne'));
  if (type === 'blank' && !$('blankAnswer').value.trim()) return alert(tr('needBlankAnswer'));

  const payload = {
    category: $('category').value.trim(),
    type,
    tags: parseTags($('tags').value),
    questionText,
    image,
    options: type === 'blank' ? [] : options,
    blankAnswers: type === 'blank' ? $('blankAnswer').value.split('|').map(a => a.trim()).filter(Boolean) : [],
    explanation: $('explanation').value.trim()
  };

  const editingId = $('editingId').value;
  if (editingId) {
    const q = questions.find(q => q.id === editingId);
    if (q) Object.assign(q, payload, { updatedAt: new Date().toISOString() });
    alert(tr('updated'));
  } else {
    questions.unshift({
      id: uid(),
      ...payload,
      mastered: false,
      createdAt: new Date().toISOString(),
      updatedAt: '',
      reviewCount: 0,
      wrongCount: 0,
      correctCount: 0,
      correctStreak: 0,
      lastReviewedAt: '',
      nextReviewAt: '',
      reviewHistory: []
    });
    alert(tr('saved'));
  }
  saveQuestions();
  resetForm();
}

function editQuestion(id) {
  const q = questions.find(q => q.id === id);
  if (!q) return;
  switchView('addView');
  $('editingId').value = q.id;
  $('category').value = q.category || '';
  $('type').value = q.type || 'single';
  $('tags').value = (q.tags || []).join(', ');
  $('questionText').value = q.questionText || '';
  $('blankAnswer').value = (q.blankAnswers || []).join('|');
  $('explanation').value = q.explanation || '';
  retainedEditImage = q.image || '';
  $('imageKeepHint').classList.toggle('hidden', !retainedEditImage);
  $('optionsList').innerHTML = '';
  if (q.type === 'blank') {
    addOptionRow(); addOptionRow();
  } else {
    (q.options || []).forEach(o => addOptionRow(o.text, o.correct));
  }
  $('saveQuestionBtn').textContent = tr('saveChanges');
  $('cancelEditBtn').classList.remove('hidden');
  toggleTypeFields();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startReview(customList = null) {
  if (Array.isArray(customList)) {
    currentQuiz = customList;
  } else {
    const category = $('reviewCategory').value;
    const includeMastered = $('includeMastered').checked;
    const count = Number($('reviewCount').value) || 10;
    let pool = questions.filter(q => (category === '全部' || q.category === category));
    if (!includeMastered) pool = pool.filter(q => !q.mastered);
    if (!pool.length) return alert(tr('noQuestionsForFilter'));
    const mode = $('reviewMode').value;
    if (mode === 'random') currentQuiz = pool.sort(() => Math.random() - 0.5).slice(0, count);
    else if (mode === 'order') currentQuiz = pool.slice(0, count);
    else currentQuiz = smartPick(pool, count);
  }
  if (!currentQuiz.length) return alert(tr('noQuestions'));
  quizIndex = 0;
  quizStats = { correct: 0, wrong: 0 };
  $('resultArea').classList.add('hidden');
  $('quizArea').classList.remove('hidden');
  switchView('reviewView');
  renderQuizQuestion();
}
function smartPick(pool, count) {
  return pool.map(q => ({ q, score: smartScore(q) })).sort((a,b) => b.score - a.score).slice(0, count).map(x => x.q);
}
function renderQuizQuestion() {
  const q = currentQuiz[quizIndex];
  if (!q) return finishQuiz();
  const typeName = q.type === 'single' ? tr('typeSingleShort') : q.type === 'multiple' ? tr('typeMultipleShort') : tr('typeBlankShort');
  const tagsHtml = (q.tags || []).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('');
  let answerHtml = '';
  if (q.type === 'blank') answerHtml = `<input id="userBlankAnswer" placeholder="${tr('inputYourAnswer')}" />`;
  else answerHtml = q.options.map(o => `<label class="option-choice"><input name="answer" type="${q.type === 'single' ? 'radio' : 'checkbox'}" value="${o.id}" /> ${escapeHtml(o.text)}</label>`).join('');
  $('quizArea').innerHTML = `
    <span class="badge">${escapeHtml(q.category)}</span><span class="badge">${typeName}</span><span class="badge">${getDueText(q)}</span>${tagsHtml}
    <h3>${tr('questionProgress', { current: quizIndex + 1, total: currentQuiz.length })}</h3>
    <p>${escapeHtml(q.questionText)}</p>
    ${q.image ? `<img class="question-img" src="${q.image}" alt="${tr('questionImageAlt')}" />` : ''}
    <div>${answerHtml}</div>
    <div id="feedbackBox"></div>
    <div class="row-between" style="margin-top:14px;">
      <button id="submitAnswerBtn" class="primary">${tr('submitAnswer')}</button>
      <button id="nextQuestionBtn" class="ghost hidden">${tr('nextQuestion')}</button>
    </div>`;
  $('submitAnswerBtn').onclick = checkAnswer;
  $('nextQuestionBtn').onclick = () => { quizIndex += 1; renderQuizQuestion(); };
}
function checkAnswer() {
  const q = currentQuiz[quizIndex];
  let isCorrect = false;
  let correctText = '';
  if (q.type === 'blank') {
    const user = normalizeText($('userBlankAnswer').value);
    isCorrect = q.blankAnswers.some(a => normalizeText(a) === user);
    correctText = q.blankAnswers.join(' / ');
  } else {
    const picked = Array.from(document.querySelectorAll('input[name="answer"]:checked')).map(i => i.value).sort();
    const correct = q.options.filter(o => o.correct).map(o => o.id).sort();
    isCorrect = JSON.stringify(picked) === JSON.stringify(correct);
    correctText = q.options.filter(o => o.correct).map(o => o.text).join('；');
  }
  updateReviewSchedule(q, isCorrect);
  saveQuestions();
  $('feedbackBox').innerHTML = `<div class="feedback ${isCorrect ? 'correct' : 'wrong'}"><strong>${isCorrect ? tr('correctAnswer') : tr('wrongAnswer')}</strong><br />${tr('correctAnswerLabel')}：${escapeHtml(correctText)}<br />${tr('nextReview')}：${escapeHtml(getDueText(q))}${q.explanation ? `<hr /><strong>${tr('explanationTitle')}</strong><p>${escapeHtml(q.explanation)}</p>` : `<p>${tr('noExplanation')}</p>`}</div>`;
  $('submitAnswerBtn').classList.add('hidden');
  $('nextQuestionBtn').classList.remove('hidden');
}
function finishQuiz() {
  $('quizArea').classList.add('hidden');
  $('resultArea').classList.remove('hidden');
  const total = quizStats.correct + quizStats.wrong;
  $('resultArea').innerHTML = `<h3>${tr('reviewFinished')}</h3><p>${tr('totalQuestions')}：${total}</p><p>${tr('correct')}：${quizStats.correct}</p><p>${tr('wrong')}：${quizStats.wrong}</p><p>${tr('accuracy')}：${total ? Math.round(quizStats.correct / total * 100) : 0}%</p><button class="primary" onclick="startReview()">${tr('reviewAgain')}</button>`;
  renderStats();
  renderDailyTask();
}

function questionMatches(q, keyword) {
  if (!keyword) return true;
  const text = [q.category, q.questionText, q.explanation, ...(q.tags || []), ...(q.blankAnswers || []), ...(q.options || []).map(o => o.text)].join(' ').toLowerCase();
  return text.includes(keyword.toLowerCase());
}
function getListFilteredQuestions() {
  const keyword = $('searchInput')?.value.trim() || '';
  const category = $('listCategory')?.value || '全部';
  const tag = $('listTag')?.value || '全部';
  const showMastered = $('showMastered')?.checked ?? true;
  let list = questions.filter(q =>
    (category === '全部' || q.category === category) &&
    (tag === '全部' || (q.tags || []).includes(tag)) &&
    (showMastered || !q.mastered) &&
    questionMatches(q, keyword)
  );
  const sort = $('listSort')?.value || 'created';
  if (sort === 'due') list.sort((a,b) => smartScore(b) - smartScore(a));
  else if (sort === 'wrong') list.sort((a,b) => b.wrongCount - a.wrongCount);
  else if (sort === 'accuracy') list.sort((a,b) => getErrorRate(b) - getErrorRate(a));
  else list.sort((a,b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  return list;
}
function renderQuestionList() {
  if (!$('questionList')) return;
  const list = getListFilteredQuestions();
  const keyword = $('searchInput')?.value.trim() || '';
  $('questionList').innerHTML = `${keyword ? `<p class="search-note">${tr('searchFound', { n: list.length })}</p>` : ''}${list.map(q => `
    <article class="card">
      <div class="item-head">
        <div>
          <span class="badge">${escapeHtml(q.category)}</span>
          <span class="badge">${q.mastered ? tr('mastered') : tr('notMastered')}</span>
          <span class="badge">${tr('reviewTimes', { review: q.reviewCount, wrong: q.wrongCount })}</span>
          <span class="badge">${tr('streak', { n: q.correctStreak || 0 })}</span>
          <span class="badge">${escapeHtml(getDueText(q))}</span>
          ${(q.tags || []).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}
        </div>
        <div>
          <button class="ghost small" onclick="editQuestion('${q.id}')">${tr('editQuestion')}</button>
          <button class="ghost small" onclick="toggleMastered('${q.id}')">${q.mastered ? tr('unmaster') : tr('markMastered')}</button>
          <button class="danger small" onclick="deleteQuestion('${q.id}')">${tr('deleteBtn')}</button>
        </div>
      </div>
      <p>${escapeHtml(q.questionText)}</p>
      ${q.image ? `<img class="question-img" src="${q.image}" alt="${tr('questionImageAlt')}" />` : ''}
      <details><summary>${tr('viewDetails')}</summary>${renderAnswer(q)}${renderOptions(q)}<p><strong>${tr('explanationTitle')}</strong>${escapeHtml(q.explanation || tr('none'))}</p></details>
      <label style="margin-top:12px;">${tr('quickEditExplanation')}
        <textarea rows="2" onchange="updateExplanation('${q.id}', this.value)">${escapeHtml(q.explanation || '')}</textarea>
      </label>
      <p class="inline-edit-help">${tr('editHelp')}</p>
    </article>`).join('') || `<div class="card empty-state">${tr('noMatchingQuestions')}</div>`}`;
}
function renderOptions(q) {
  if (q.type === 'blank') return '';
  return `<ul>${(q.options || []).map(o => `<li>${escapeHtml(o.text)}${o.correct ? ' ✅' : ''}</li>`).join('')}</ul>`;
}
function renderAnswer(q) {
  if (q.type === 'blank') return `<p><strong>${tr('answer')}：</strong>${escapeHtml(q.blankAnswers.join(' / '))}</p>`;
  return `<p><strong>${tr('answer')}：</strong>${escapeHtml(q.options.filter(o => o.correct).map(o => o.text).join('；'))}</p>`;
}
function toggleMastered(id) { const q = questions.find(q => q.id === id); if (q) { q.mastered = !q.mastered; saveQuestions(); } }
function deleteQuestion(id) { if (confirm(tr('confirmDelete'))) { questions = questions.filter(q => q.id !== id); saveQuestions(); } }
function updateExplanation(id, value) { const q = questions.find(q => q.id === id); if (q) { q.explanation = value; saveQuestions(); } }

function generateDailyTask() {
  const category = $('dailyCategory')?.value || '全部';
  const count = Number($('dailyCount')?.value) || 20;
  const includeNew = $('dailyIncludeNew')?.checked ?? true;
  let pool = questions.filter(q => !q.mastered && (category === '全部' || q.category === category));
  if (!includeNew) pool = pool.filter(q => q.reviewCount > 0);
  const selected = smartPick(pool, count);
  const task = { date: todayKey(), category, count, ids: selected.map(q => q.id), generatedAt: new Date().toISOString() };
  localStorage.setItem(DAILY_TASK_KEY, JSON.stringify(task));
  renderDailyTask();
}
function loadDailyTask() {
  try { return JSON.parse(localStorage.getItem(DAILY_TASK_KEY)); } catch { return null; }
}
function getDailyQuestions() {
  const task = loadDailyTask();
  if (!task || task.date !== todayKey()) return [];
  return task.ids.map(id => questions.find(q => q.id === id)).filter(Boolean);
}
function renderDailyTask() {
  if (!$('dailyTaskArea')) return;
  const task = loadDailyTask();
  if (!task || task.date !== todayKey()) {
    const dueCount = questions.filter(q => !q.mastered && isDue(q)).length;
    $('dailyTaskArea').innerHTML = `<div class="card"><h3>${tr('noDaily')}</h3><p>${tr('dueAvailable', { n: dueCount })}</p></div>`;
    return;
  }
  const qs = getDailyQuestions();
  const taskCategory = task.category === '全部' ? tr('all') : task.category;
  $('dailyTaskArea').innerHTML = `<div class="card"><h3>${tr('todayTask', { date: task.date })}</h3><p>${tr('category')}：${escapeHtml(taskCategory)}；${tr('planned')}：${task.count}；${tr('generated')}：${qs.length} ${tr('questionsUnit')}。</p><div class="task-list">${qs.map(q => {
    const p = getPriorityText(q);
    const title = q.questionText || tr('imageQuestion');
    return `<div class="task-row"><div><div class="task-title">${escapeHtml(title.slice(0, 80))}${title.length > 80 ? '...' : ''}</div><div class="task-meta">${escapeHtml(q.category)} · ${getDueText(q)} · ${tr('wrongTimes', { n: q.wrongCount })} · ${tr('errorRate', { n: Math.round(getErrorRate(q)*100) + '%' })} ${(q.tags || []).map(t => ' · ' + t).join('')}</div></div><span class="badge ${p.cls}">${p.text}</span></div>`;
  }).join('')}</div></div>`;
}
function startDailyTask() { const qs = getDailyQuestions(); if (!qs.length) return alert(tr('noDailyAlert')); startReview(qs); }

function getFilteredQuestionsForStats() {
  const category = $('statsCategory')?.value || '全部';
  const tag = $('statsTag')?.value || '全部';
  return questions.filter(q => (category === '全部' || q.category === category) && (tag === '全部' || (q.tags || []).includes(tag)));
}
function pct(value) { return `${Math.round(value * 100)}%`; }
function barRow(label, value, maxValue, meta = '') {
  const width = maxValue ? Math.max(3, Math.round(value / maxValue * 100)) : 0;
  return `<div class="bar-row"><div class="bar-label">${escapeHtml(label)}</div><div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div><div class="bar-value">${escapeHtml(meta || String(value))}</div></div>`;
}
function sparkline(points, labelKey, valueKey) {
  const max = Math.max(1, ...points.map(p => p[valueKey]));
  return `<div class="sparkline">${points.map(p => `<div class="spark-col" title="${escapeHtml(p[labelKey])}: ${p[valueKey]}"><div class="spark-bar" style="height:${Math.max(4, Math.round(p[valueKey] / max * 100))}%"></div><span>${escapeHtml(p.short)}</span></div>`).join('')}</div>`;
}
function groupBy(list, getter) {
  const map = new Map();
  list.forEach(item => { const key = getter(item); if (!map.has(key)) map.set(key, []); map.get(key).push(item); });
  return map;
}
function renderStats() {
  if (!$('statsArea')) return;
  const list = getFilteredQuestionsForStats();
  const total = list.length;
  const mastered = list.filter(q => q.mastered).length;
  const due = list.filter(q => !q.mastered && isDue(q)).length;
  const attempts = list.flatMap(q => q.reviewHistory || []);
  const totalAttempts = attempts.length || list.reduce((sum, q) => sum + q.reviewCount, 0);
  const correctAttempts = attempts.length ? attempts.filter(a => a.correct).length : list.reduce((sum, q) => sum + q.correctCount, 0);
  const accuracy = totalAttempts ? correctAttempts / totalAttempts : 0;

  const byCategory = Array.from(groupBy(list, q => q.category || tr('uncategorized')).entries()).map(([category, qs]) => {
    const reviews = qs.reduce((s, q) => s + q.reviewCount, 0);
    const correct = qs.reduce((s, q) => s + q.correctCount, 0);
    return { category, count: qs.length, reviews, accuracy: reviews ? correct / reviews : 0 };
  }).sort((a, b) => b.count - a.count);
  const maxCategoryCount = Math.max(1, ...byCategory.map(d => d.count));

  const tagRows = Array.from(groupBy(list.flatMap(q => (q.tags || []).map(tag => ({ tag, q }))), x => x.tag).entries()).map(([tag, rows]) => {
    const qs = rows.map(r => r.q);
    const reviews = qs.reduce((s, q) => s + q.reviewCount, 0);
    const correct = qs.reduce((s, q) => s + q.correctCount, 0);
    const wrong = qs.reduce((s, q) => s + q.wrongCount, 0);
    return { tag, count: qs.length, reviews, wrong, accuracy: reviews ? correct / reviews : 0, errorRate: reviews ? wrong / reviews : 0 };
  }).sort((a,b) => b.wrong - a.wrong || b.errorRate - a.errorRate || b.count - a.count);
  const maxTagWrong = Math.max(1, ...tagRows.map(d => d.wrong));

  const weakQuestions = [...list].filter(q => q.reviewCount > 0).sort((a,b) => (b.wrongCount - a.wrongCount) || (getErrorRate(b)-getErrorRate(a))).slice(0, 8);
  const maxWrong = Math.max(1, ...weakQuestions.map(q => q.wrongCount));

  const last14 = [];
  for (let i = 13; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    const short = `${d.getMonth()+1}/${d.getDate()}`;
    const dayAttempts = attempts.filter(a => String(a.at).slice(0, 10) === key);
    last14.push({ date: key, short, count: dayAttempts.length });
  }

  $('statsArea').innerHTML = `
    <div class="stats-grid"><div class="stat-card"><span>${tr('totalBank')}</span><strong>${total}</strong></div><div class="stat-card"><span>${tr('dueTodayStat')}</span><strong>${due}</strong></div><div class="stat-card"><span>${tr('masteredStat')}</span><strong>${mastered}</strong></div><div class="stat-card"><span>${tr('totalAttempts')}</span><strong>${totalAttempts}</strong></div><div class="stat-card"><span>${tr('overallAccuracy')}</span><strong>${pct(accuracy)}</strong></div></div>
    <div class="card"><h3>${tr('last14')}</h3>${attempts.length ? sparkline(last14, 'date', 'count') : `<p class="hint">${tr('noReviewTrend')}</p>`}</div>
    <div class="card"><h3>${tr('categoryStats')}</h3>${byCategory.length ? byCategory.map(d => barRow(d.category, d.count, maxCategoryCount, tr('countWithAccuracy', { count: d.count, accuracy: pct(d.accuracy) }))).join('') : `<p class="hint">${tr('noCategoryData')}</p>`}</div>
    <div class="card"><h3>${tr('tagWeakRanking')}</h3>${tagRows.length ? tagRows.slice(0, 12).map(d => barRow(d.tag, d.wrong, maxTagWrong, tr('tagMeta', { count: d.count, wrong: d.wrong, errorRate: pct(d.errorRate), accuracy: pct(d.accuracy) }))).join('') : `<p class="hint">${tr('noTagData')}</p>`}</div>
    <div class="card"><h3>${tr('weakestQuestions')}</h3>${weakQuestions.length ? weakQuestions.map(q => barRow(q.questionText || tr('imageQuestion'), q.wrongCount, maxWrong, tr('weakMeta', { wrong: q.wrongCount, errorRate: pct(getErrorRate(q)), due: getDueText(q) }))).join('') : `<p class="hint">${tr('noWrongData')}</p>`}</div>
    <div class="card"><h3>${tr('algorithmTitle')}</h3><p>${tr('algorithmP1')}</p><p>${tr('algorithmP2')}</p></div>`;
}

function exportData() {
  const blob = new Blob([JSON.stringify(questions, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `wrong-questions-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
}
function importData(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      if (!Array.isArray(parsed)) throw new Error('not array');
      questions = migrateQuestions(parsed).concat(questions);
      saveQuestions();
      alert(tr('importSuccess'));
    } catch { alert(tr('importFail')); }
  };
  reader.readAsText(file);
}

window.toggleMastered = toggleMastered;
window.deleteQuestion = deleteQuestion;
window.updateExplanation = updateExplanation;
window.editQuestion = editQuestion;
window.startReview = startReview;

applyTranslations();
document.querySelectorAll('.tab').forEach(btn => btn.onclick = () => switchView(btn.dataset.view));
$('languageToggle').onclick = toggleLanguage;
$('addOptionBtn').onclick = () => addOptionRow();
$('type').onchange = toggleTypeFields;
$('questionForm').onsubmit = handleSubmit;
$('cancelEditBtn').onclick = resetForm;
$('startReviewBtn').onclick = () => startReview();
$('generateDailyBtn').onclick = generateDailyTask;
$('startDailyBtn').onclick = startDailyTask;
['listCategory','showMastered','searchInput','listTag','listSort'].forEach(id => $(id).oninput = renderQuestionList);
$('refreshStatsBtn').onclick = renderStats;
['statsCategory','statsTag'].forEach(id => $(id).onchange = renderStats);
$('exportBtn').onclick = exportData;
$('importFile').onchange = (e) => e.target.files[0] && importData(e.target.files[0]);

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  $('installBtn').classList.remove('hidden');
});
$('installBtn').onclick = async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  deferredPrompt = null;
  $('installBtn').classList.add('hidden');
};
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');

resetForm();
refreshAll();
if (questions.length) saveQuestions();
