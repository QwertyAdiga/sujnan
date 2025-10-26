const counters = document.querySelectorAll(".stat-number");
let started = false;

function startCounters() {
  counters.forEach(counter => {
    counter.innerText = "0";

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText.replace("+", "");
      const increment = Math.ceil(target / 200);

      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(updateCounter, 20);
      } else {
        counter.innerText = target + "+";
      }
    };
    updateCounter();
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !started) {
      startCounters();
      started = true;
    }
  });
}, { threshold: 0.3 });

observer.observe(document.querySelector("#stats"));

function getItemsPerRow(items) {
  if (!items || items.length === 0) return 1;
  const firstTop = items[0].offsetTop;
  let count = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].offsetTop === firstTop) {
      count++;
    } else {
      break;
    }
  }
  return Math.max(count, 1);
}

const facilitiesBtn = document.getElementById("facilities-show-more-btn");
const facilitiesFlex = document.getElementById("facilities-flex");
const facilitiesBoxes = facilitiesFlex ? facilitiesFlex.querySelectorAll(".facilities-box") : [];
let facilitiesExpanded = false;

function updateFacilitiesDisplay() {
  if (!facilitiesBoxes || facilitiesBoxes.length === 0) return;

  const perRow = getItemsPerRow(facilitiesBoxes);
  const collapsedVisible = Math.min(facilitiesBoxes.length, Math.max(perRow, 3));

  if (!facilitiesExpanded) {
    facilitiesBoxes.forEach((box, index) => {
      box.classList.toggle("hidden", index >= collapsedVisible);
    });
  } else {
    facilitiesBoxes.forEach(box => box.classList.remove("hidden"));
  }

  if (facilitiesBtn) {
    facilitiesBtn.textContent = facilitiesExpanded ? "Show Less" : "Show More";
  }
}

if (facilitiesBtn) {
  facilitiesBtn.addEventListener("click", () => {
    facilitiesExpanded = !facilitiesExpanded;
    updateFacilitiesDisplay();
  });
}

window.addEventListener("resize", () => {
  if (!facilitiesExpanded) updateFacilitiesDisplay();
});

updateFacilitiesDisplay();

const newsBtn = document.getElementById("news-show-more-btn");
const newsFlex = document.getElementById("news-flex");
const newsLinks = newsFlex ? newsFlex.querySelectorAll(".news-link") : [];
let newsExpanded = false;

function calculateVisibleNews() {
  if (!newsLinks || newsLinks.length === 0) return 0;
  const perRow = getItemsPerRow(newsLinks);
  const collapsedVisible = Math.min(newsLinks.length, Math.max(perRow, 3));
  return collapsedVisible;
}

function updateNewsDisplay() {
  if (!newsLinks || newsLinks.length === 0) return;

  if (!newsExpanded) {
    const visibleCount = calculateVisibleNews();
    newsLinks.forEach((link, index) => {
      link.classList.toggle("hidden", index >= visibleCount);
    });
  } else {
    newsLinks.forEach(link => link.classList.remove("hidden"));
  }

  if (newsBtn) {
    newsBtn.textContent = newsExpanded ? "Show Less" : "Show More";
  }
}

if (newsBtn) {
  newsBtn.addEventListener("click", () => {
    newsExpanded = !newsExpanded;
    updateNewsDisplay();
  });
}

window.addEventListener("resize", () => {
  if (!newsExpanded) updateNewsDisplay();
});

updateNewsDisplay();

const hamburger = document.getElementById("hamburger");
const linksHeader = document.getElementById("links-header");
const navLinks = document.querySelectorAll(".nav-link");

if (hamburger && linksHeader) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    linksHeader.classList.toggle("active");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      linksHeader.classList.remove("active");
    });
  });

  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !linksHeader.contains(e.target)) {
      hamburger.classList.remove("active");
      linksHeader.classList.remove("active");
    }
  });
}
