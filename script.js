let tulisan = document.getElementById("ttip");
let hide = document.getElementById("logoemail");

logoemail.onclick = function show_email() {
  tulisan.style.opacity = 1;
  tulisan.style.animation = "3s anim-Appear ease-out";
  hide_email();
};

function hide_email() {
  if ((tulisan.style.opacity = 1)) {
    setTimeout(() => {
      tulisan.style.animation = "2s anim-disAppear ease-out";
      tulisan.style.opacity = 0;
    }, 6000);
  }
}
