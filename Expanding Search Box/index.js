const search = document.querySelector(".search-wrapper");
const input = search.querySelector("input");

search.addEventListener("mouseenter", () => {
  if (!input.matches(":focus")) {
    search.classList.add("active");
  }
});

search.addEventListener("mouseleave", () => {
  if (!input.matches(":focus") && !input.value.trim()) {
    search.classList.remove("active");
  }
});
