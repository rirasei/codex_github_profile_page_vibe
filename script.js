const root = document.documentElement;
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const themeToggle = document.querySelector(".theme-toggle");
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const copyButton = document.querySelector("[data-copy]");
const year = document.querySelector("#year");

const savedTheme = localStorage.getItem("portfolio-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

root.dataset.theme = savedTheme || (prefersDark ? "dark" : "light");

if (year) {
  year.textContent = new Date().getFullYear();
}

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
});

siteNav?.addEventListener("click", (event) => {
  if (!(event.target instanceof HTMLAnchorElement)) return;

  siteNav.classList.remove("is-open");
  document.body.classList.remove("nav-open");
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", "메뉴 열기");
});

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("portfolio-theme", nextTheme);
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter || "all";

    filterButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });

    projectCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

copyButton?.addEventListener("click", async () => {
  const email = copyButton.getAttribute("data-copy");
  if (!email) return;

  try {
    await navigator.clipboard.writeText(email);
    const originalText = copyButton.textContent;
    copyButton.textContent = "복사됨";
    window.setTimeout(() => {
      copyButton.textContent = originalText;
    }, 1600);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});
