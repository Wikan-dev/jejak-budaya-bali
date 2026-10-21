/**
 * JEJAK BUDAYA DI ERA DIGITAL - STYLISH GRAFFITI & THEME TOGGLE
 * Menangani render story cards bergaya urban art, pembacaan progress scroll,
 * navigasi panah, dan peralihan Dark/Light mode secara instan.
 */

document.addEventListener("DOMContentLoaded", () => {
  const storyList = document.getElementById("storyList");
  const readingProgressBar = document.getElementById("readingProgressBar");
  const liveEraBadge = document.getElementById("liveEraBadge");
  const btnScrollUp = document.getElementById("btnScrollUp");
  const btnScrollDown = document.getElementById("btnScrollDown");
  const themeToggleBtn = document.getElementById("themeToggleBtn");

  let currentStoryIndex = 0;

  // 1. Theme Toggle Logic (Dark / Light) dengan LocalStorage
  const savedTheme = localStorage.getItem("jejak-theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("jejak-theme", nextTheme);
    });
  }

  // 2. Render Story Cards Bergaya Graffiti / Urban Sketchpad
  function renderStories() {
    storyList.innerHTML = "";

    culturalHistoryData.forEach((item, index) => {
      const isLast = index === culturalHistoryData.length - 1;
      const nextIdx = index + 1;

      const storyEl = document.createElement("article");
      storyEl.className = "story-item";
      storyEl.id = item.id;
      storyEl.dataset.index = index;

      storyEl.innerHTML = `
        <!-- Tanda Panah Fisik Graffiti di Sumbu Tengah Linimasa -->
        <div class="timeline-arrow-anchor" title="Alur Waktu Menuju Masa Berikutnya">
          <svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="4" x2="12" y2="20"></line>
            <polyline points="19 13 12 20 5 13"></polyline>
          </svg>
        </div>

        <!-- Kartu Cerita Urban Street-Art -->
        <div class="story-card">
          <div class="story-image-wrap">
            <img 
              src="${item.image}" 
              alt="${item.title}" 
              class="story-image" 
              loading="lazy"
              onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80';"
            />
            <div class="story-image-caption">
              📌 ${item.imageCaption}
            </div>
          </div>

          <span class="story-year-tag">${item.year}</span>
          <h3 class="story-title font-graffiti">${item.title}</h3>
          <p class="story-desc">${item.description}</p>

          ${
            !isLast
              ? `<button class="story-nav-btn font-graffiti" data-next="${nextIdx}">
                  <span>Lompat ke ${culturalHistoryData[nextIdx].year}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                </button>`
              : `<div style="margin-top:1.25rem; font-size:1.05rem; color:var(--graffiti-pink); font-weight:700;" class="font-hand">
                  ✦ Masa Kini & Masa Depan Budaya Digital Bali
                 </div>`
          }
        </div>
      `;

      storyList.appendChild(storyEl);
    });

    // Event listener untuk tombol panah di dalam card
    document.querySelectorAll(".story-nav-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const nextTarget = parseInt(e.currentTarget.dataset.next, 10);
        jumpToStory(nextTarget);
      });
    });
  }

  // Smooth Jump to specific card
  function jumpToStory(idx) {
    if (idx < 0 || idx >= culturalHistoryData.length) return;
    const targetEl = document.getElementById(culturalHistoryData[idx].id);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
      currentStoryIndex = idx;
    }
  }

  // Scroll Progress & Active Era Tracking
  function initScrollObserver() {
    window.addEventListener("scroll", () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      readingProgressBar.style.width = `${scrolled}%`;
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = parseInt(entry.target.dataset.index, 10);
          currentStoryIndex = idx;
          const currentData = culturalHistoryData[idx];
          if (currentData) {
            liveEraBadge.textContent = `${currentData.year}`;
          }
        }
      });
    }, {
      threshold: 0.35
    });

    document.querySelectorAll(".story-item").forEach(item => {
      observer.observe(item);
    });
  }

  // Floating dock jump buttons
  btnScrollUp.addEventListener("click", () => {
    if (currentStoryIndex > 0) {
      jumpToStory(currentStoryIndex - 1);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  btnScrollDown.addEventListener("click", () => {
    if (currentStoryIndex < culturalHistoryData.length - 1) {
      jumpToStory(currentStoryIndex + 1);
    }
  });

  // 2.5. Realtime Clock di Header
  const realtimeClock = document.getElementById("realtimeClock");
  function updateClock() {
    if (!realtimeClock) return;
    const now = new Date();
    const timeStr = now.toLocaleTimeString("id-ID", { hour12: false });
    realtimeClock.textContent = `🕒 ${timeStr}`;
  }
  updateClock();
  setInterval(updateClock, 1000);

  // 2.6. Focus Mode Toggle (Sembunyikan Header & Footer)
  const focusModeBtn = document.getElementById("focusModeBtn");
  if (focusModeBtn) {
    focusModeBtn.addEventListener("click", () => {
      const isFocus = document.body.getAttribute("data-focus") === "true";
      if (isFocus) {
        document.body.removeAttribute("data-focus");
        focusModeBtn.querySelector(".theme-icon").textContent = "🔍";
        showToast("Mode Fokus dinonaktifkan 👁️");
      } else {
        document.body.setAttribute("data-focus", "true");
        focusModeBtn.querySelector(".theme-icon").textContent = "✖️";
        showToast("Mode Fokus diaktifkan! 📵");
      }
    });
  }

  // 3. Useful Footer Features (Citation, Aksara Bali Converter, Share Link)
  const toastFeedback = document.getElementById("toastFeedback");
  function showToast(msg) {
    if (!toastFeedback) return;
    toastFeedback.textContent = msg;
    toastFeedback.classList.add("show");
    setTimeout(() => {
      toastFeedback.classList.remove("show");
    }, 2500);
  }

  // Sitasi Cepat
  const btnCopyCitation = document.getElementById("btnCopyCitation");
  if (btnCopyCitation) {
    btnCopyCitation.addEventListener("click", () => {
      const citationText = `Wikan. (2026). Jejak Budaya di Era Digital: Kronologi Perjalanan Kebudayaan Bali (1800 - 2020an). https://wikan-dev.github.io/jejak-budaya-bali/`;
      navigator.clipboard.writeText(citationText).then(() => {
        showToast("Format sitasi APA berhasil disalin! 📋");
      }).catch(() => {
        showToast("Sitasi tersalin ke memori! 📋");
      });
    });
  }

  // Interaktif Demo Aksara Bali
  const aksaraSelect = document.getElementById("aksaraSelect");
  const aksaraOutput = document.getElementById("aksaraOutput");
  if (aksaraSelect && aksaraOutput) {
    aksaraSelect.addEventListener("change", (e) => {
      aksaraOutput.textContent = e.target.value;
      showToast("Guratan aksara ditampilkan! ✨");
    });
  }

  // Salin Tautan Website
  const btnCopyShareLink = document.getElementById("btnCopyShareLink");
  if (btnCopyShareLink) {
    btnCopyShareLink.addEventListener("click", () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        showToast("Tautan website disalin ke clipboard! 🔗");
      }).catch(() => {
        showToast("Tautan siap dibagikan! 🔗");
      });
    });
  }

  // Kembali ke atas dari footer
  const btnBackTopFooter = document.getElementById("btnBackTopFooter");
  if (btnBackTopFooter) {
    btnBackTopFooter.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Init
  renderStories();
  initScrollObserver();
});
