import { changeScreen } from "./pages.js";

function city() {
    document.querySelector('.toggle-screen4').addEventListener('click', () => {
        changeScreen(".screen4")
});
}

export {city}