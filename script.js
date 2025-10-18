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
        });}

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !started) {
            startCounters();
            started = true;
          }
        });
      }, { threshold: 0.3 });

      observer.observe(document.querySelector("#stats"));

      const showMoreBtn = document.getElementById("show-more-btn");
      const extraNews = document.querySelector("#extra-news");

      showMoreBtn.addEventListener("click", () => {
        if (extraNews.style.display === "flex") {
          extraNews.style.display = "none";
          showMoreBtn.textContent = "Show More";
        } else {
          extraNews.style.display = "flex";
          showMoreBtn.textContent = "Show Less";
        }
      });
