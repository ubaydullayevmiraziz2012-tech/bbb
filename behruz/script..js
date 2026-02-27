// --- Ma'lumotlar ---
const stats = [
  { num: '12+', label: 'Viloyat' },
  { num: '5K',  label: 'Xodimlar' },
  { num: '30+', label: 'Yillik tajriba' },
  { num: '98%', label: 'Muvaffaqiyat' },
];

const news = [
  { icon: '🛢️', date: '24 Fevral 2026', title: "Neft ishlab chiqarish ko'rsatkichlari oshdi" },
  { icon: '⚡', date: '22 Fevral 2026', title: 'Yangi texnologiyalar joriy etilmoqda' },
  { icon: '🌍', date: '20 Fevral 2026', title: 'Xalqaro hamkorlik kengaymoqda' },
];

const oav = [
  { icon: '📰', source: 'UzReport Media', title: "Uzbekneftgaz yangi strategiyasini e'lon qildi", desc: 'Korporativ rivojlanish va investitsion rejalar.' },
  { icon: '📡', source: 'Dunyo.uz', title: "Energetika sohasida muhim o'zgarishlar kutilmoqda", desc: 'Ekspertlar fikri va sanoat tahlillari.' },
];

// --- Statistika ---
const statsBar = document.getElementById('statsBar');
stats.forEach(s => {
  statsBar.innerHTML += `
    <div>
      <div class="stat-num">${s.num}</div>
      <div class="stat-label">${s.label}</div>
    </div>`;
});

// --- Yangiliklar ---
const newsGrid = document.getElementById('newsGrid');
news.forEach(n => {
  newsGrid.innerHTML += `
    <div class="card">
      <div class="card-img">${n.icon}</div>
      <div class="card-body">
        <div class="card-date">${n.date}</div>
        <h3>${n.title}</h3>
        <a href="#">Ko'proq o'qing →</a>
      </div>
    </div>`;
});

// --- OAV ---
const oavGrid = document.getElementById('oavGrid');
oav.forEach(o => {
  oavGrid.innerHTML += `
    <div class="oav-card">
      <div class="oav-icon">${o.icon}</div>
      <div class="oav-body">
        <div class="oav-source">${o.source}</div>
        <h3>${o.title}</h3>
        <p>${o.desc}</p>
      </div>
    </div>`;
});

// --- Toast xabarnoma ---
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.style.display = 'block';
  setTimeout(() => toast.style.display = 'none', 2500);
}

// --- Tugma bosilganda ---
let clicks = 0;
document.getElementById('heroBtn').addEventListener('click', () => {
  clicks++;
  document.getElementById('counter').textContent = `Bu tugma ${clicks} marta bosildi`;
  showToast('✅ Siz maqolani ochdingiz!');
});

// --- Yangilik kartochkasiga bosilganda ---
newsGrid.addEventListener('click', e => {
  const card = e.target.closest('.card');
  if (card) {
    const title = card.querySelector('h3').textContent;
    showToast('📰 ' + title);
  }
});
