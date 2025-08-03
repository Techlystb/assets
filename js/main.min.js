const scripts = [
  "https://cdn.jsdelivr.net/gh/Techlystb/assets/js/ThemeChangerAuto.min.js",
  "https://cdn.jsdelivr.net/gh/Techlystb/assets/js/file2.js",
  "https://cdn.jsdelivr.net/gh/Techlystb/assets/js/file3.js"
];

scripts.forEach(src => {
  const s = document.createElement("script");
  s.src = src;
  document.head.appendChild(s);
});

