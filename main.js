const cursor = document.querySelector("#cursor");

const onMove = (e) => {
  if (window.innerWidth >= 992) {
    let x = e.pageX;
    let y = e.pageY;
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
  }
};
document.addEventListener("mousemove", onMove);
