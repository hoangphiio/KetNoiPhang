export default function dropdownSelectModule() {
  function initializeDropdown(optionMenu) {
    const selectBtn = optionMenu.querySelector(".select-btn"),
      options = optionMenu.querySelectorAll(".option"),
      btn_text = optionMenu.querySelector(".btn-text");

    function closeDropdown() {
      optionMenu.classList.remove("active");
    }

    selectBtn.addEventListener("click", () => {
      optionMenu.classList.toggle("active");
    });

    options.forEach((option) => {
      option.addEventListener("click", (event) => {
        let selectedOption = option.querySelector(".option-text").innerText;
        btn_text.innerText = selectedOption;
        closeDropdown();
        event.stopPropagation(); // Ngăn sự kiện click lan sang body
      });
    });

    // Sự kiện click trên body
    document.body.addEventListener("click", (event) => {
      const targetElement = event.target;
      if (!optionMenu.contains(targetElement)) {
        closeDropdown();
      }
    });
  }

  // Sử dụng hàm để khởi tạo dropdown cho mỗi dropdown trên trang
  document.querySelectorAll(".select").forEach((optionMenu) => {
    initializeDropdown(optionMenu);
  });
}
