function init() {
  const dom = document.querySelector.bind(document);

  dom("#port-arrow").addEventListener("click", (event) => {
    if (dom("#port-tiles").className === "wrap-closed") {
      dom("#port-tiles").classList.remove("wrap-closed");
      dom("#port-tiles").classList.add("tile-wrapper");
      dom("#port-arrow").src = "/images/up.png";
      dom("#portfolio").style.flexDirection = "column";
    } else if (dom("#port-tiles").className === "tile-wrapper") {
      dom("#port-tiles").classList.remove("tile-wrapper");
      dom("#port-tiles").classList.add("wrap-closed");
      dom("#port-arrow").src = "/images/down.png";
      dom("#portfolio").style.flexDirection = "row";
    }
  });

  dom("#send").addEventListener("click", (event) => {
    alert("This function is coming soon!");
  });
}

window.addEventListener("load", (event) => {
  init();
});
