const svg = document.querySelectorAll("svg");

svg.forEach((svg) => {
  svg.addEventListener("click", (e) => {
    const svgElements = svg.querySelectorAll("*");
    const desribeDiv = document.querySelector("#flash-desribe");
    if (desribeDiv) {
      desribeDiv.remove();
    }
    svgElements.forEach((element) => {
      // Generate random RGB values
      let randomColor =
        "rgb(" +
        Math.floor(Math.random() * 256) +
        "," +
        Math.floor(Math.random() * 256) +
        "," +
        Math.floor(Math.random() * 256) +
        ")";
      element.setAttribute("fill", randomColor);
    });
  });
});
