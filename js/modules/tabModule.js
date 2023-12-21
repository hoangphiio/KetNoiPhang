export default function tabModule() {
  let tab = document.querySelectorAll(".tabMain");
  if (tab) {
    tab.forEach((t) => {
      let tBtn = t.querySelectorAll(".tabBtn");
      let tPanel = t.querySelectorAll(".tabContent");

      if (tBtn.length !== 0 && tPanel.length === tBtn.length) {
        if (!t.classList.contains("none-active-first")) {
          tBtn[0].classList.add("active");
          tPanel[0].classList.add("open");
        }

        for (let i = 0; i < tBtn.length; i++) {
          tBtn[i].addEventListener("click", showPanel);

          function showPanel(e) {
            e.preventDefault();
            for (let a = 0; a < tBtn.length; a++) {
              tBtn[a].classList.remove("active");
              tPanel[a].classList.remove("open");
            }
            tBtn[i].classList.add("active");
            tPanel[i].classList.add("open");
          }
        }
      }
    });
  }
}
