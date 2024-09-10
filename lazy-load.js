// lazy-load.js
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".about-video");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Įkeliame video tik kai jis matomas
        video.src = video.dataset.src;
        observer.unobserve(video); // Nustoja stebėti video po įkėlimo
      }
    });
  });

  observer.observe(video);
});
