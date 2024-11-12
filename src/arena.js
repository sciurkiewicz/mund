import { changeScreen } from "./pages.js";

function arena() {
    document.querySelector('.toggle-screen5').addEventListener('click', () => {
        changeScreen(".screen5")
});
}

export {arena}