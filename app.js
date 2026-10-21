/**
 * JEJAK BUDAYA DI ERA DIGITAL - HUMANIST TIMELINE
 * Menangani render story cards, pembacaan progress scroll, dan navigasi panah.
 */

document.addEventListener("DOMContentLoaded", () => {
  const storyList = document.getElementById("storyList");
  const readingProgressBar = document.getElementById("readingProgressBar");
  const liveEraBadge = document.getElementById("liveEraBadge");
  const btnScrollUp = document.getElementById("btnScrollUp");
  const btnScrollDown = document.getElementById("btnScrollDown");

  let currentStoryIndex = 0;

  // Render Story Cards
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
        <!-- Tanda Panah Beneran di Tengah Sumbu Timeline -->
        <div class="timeline-arrow-anchor" title="Alur Masa: ${item.year}">
          <svg viewBox="0 0 24 24" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </div>

        <!-- Kartu Cerita -->
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
              ${item.imageCaption}
            </div>
          </div>

          <span class="story-year">${item.year}</span>
          <h3 class="story-title">${item.title}</h3>
          <p class="story-desc">${item.description}</p>

          ${
            !isLast
              ? `<button class="story-nav-btn" data-next="${nextIdx}">
                  Menuju ${culturalHistoryData[nextIdx].year}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                </button>`
              : `<span style="display:inline-block; margin-top:1rem; font-size:0.8rem; color:var(--accent-gold); font-weight:600;">
                  ✦ Masa Kini & Masa Depan Budaya Digital
                 </span>`
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
      threshold: 0.4
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

  // Init
  renderStories();
  initScrollObserver();
});
