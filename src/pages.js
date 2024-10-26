function toggle() {
    function hideAll() {
        const screens = [".screen1", ".screen2", ".screen3", ".screen4", ".screen5", ".screen6"];
        screens.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) element.style.display = "none";
        });
    }

    hideAll()
    if (document.querySelector(".screen1")) document.querySelector(".screen1").style.display = "block";

    const toggleScreen2Button = document.querySelector(".toggle-screen2");
    if (toggleScreen2Button) {
        toggleScreen2Button.addEventListener("click", function() {
            hideAll();
            const screen2 = document.querySelector(".screen2");
            if (screen2) screen2.style.display = "block";
        });
    }
}

toggle()

export { toggle };