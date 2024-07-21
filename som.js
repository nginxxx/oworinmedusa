document.addEventListener("DOMContentLoaded", () => {
  const links = document.links;
  const main = document.getElementById("mainn");
  const pre = document.getElementById("pre_");

  pre.addEventListener("click", () => {
    pre.style.display = "none";
    main.style.display = "block";
  });
  console.log(links);

  for (let i = 0; i < links.length; i++) {
    const element = links[i];
    element.setAttribute("href", "javascript:void()");
    element.classList.add("interact-button");
  }
});
