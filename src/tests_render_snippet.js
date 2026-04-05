// Tests.js dagi asosiy sahifa render qismini quyidagi bilan almashtiring.
// (export default function Tests() ichidagi return() qismi)

/*
  TESTS_LIST da har test uchun:
  { id, emoji, title, desc, duration, questions, color, tag }
  
  Yangi dizaynda color ishlatilmaydi — hammasi indigo.
  Faqat icon emoji qoladi.
*/

// ── RENDER (return ichida) ──
const renderTestsList = (setActiveTest, TESTS_LIST) => (
  <div className="tests-page">
    <div className="tests-header">
      <div className="tests-header-badge">🧠 Psixologiya</div>
      <h1>Psixologik testlar</h1>
      <p>Ilmiy asoslangan testlar orqali o'zingizni chuqurroq tushunib oling</p>
    </div>

    <div className="tests-grid">
      {TESTS_LIST.map(t => (
        <div key={t.id} className="test-card" onClick={() => setActiveTest(t.id)}>
          <div className="test-card-accent" />
          <div className="test-card-inner">
            <div className="test-card-top">
              <div className="test-icon-wrap">{t.emoji}</div>
              <span className="test-tag">{t.tag}</span>
            </div>
            <div className="test-card-body">
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
              <div className="test-card-divider" />
              <div className="test-meta">
                <span>⏱ {t.duration}</span>
                <span>· {t.questions}</span>
              </div>
              <button className="test-start-btn">Boshlash →</button>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="tests-note">
      ⚠️ Bu testlar ma'lumot berish uchun mo'ljallangan va tibbiy tashxis o'rnini bosmaydi.
      Jiddiy muammolar uchun mutaxassisga murojaat qiling.
    </div>
  </div>
);
