const optionMenu = document.querySelector('.select-menu'),
        selectBtn = document.querySelector('.select-menu'),
        options = optionMenu.querySelectorAll('.option'),
        sBtn_text = optionMenu.querySelector('.sBtn-text');

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option =>{
    option.addEventListener('click', () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

    })
})