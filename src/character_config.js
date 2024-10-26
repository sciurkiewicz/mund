import { hero } from "../src/data.js";
import { changeScreen } from "./pages.js";

function characterEditor() {
    function updateStats() {
        document.getElementById('talents').textContent = hero.talents;
        document.getElementById('strength').textContent = hero.strength;
        document.getElementById('perception').textContent = hero.perception;
        document.getElementById('dexterity').textContent = hero.dexterity;
        document.getElementById('intelligence').textContent = hero.intelligence;
        document.getElementById('wisdom').textContent = hero.wisdom;
        document.getElementById('charisma').textContent = hero.charisma;
    }

    function increaseStat(stat) {
        if (hero.talents > 0) {
            hero[stat]++;
            hero.talents--;
            updateStats();
        }
    }

    function decreaseStat(stat) {
        if (hero[stat] > 0) {
            hero[stat]--;
            hero.talents++;
            updateStats();
        }
    }

    function init() {
        document.querySelectorAll('.increase').forEach(button => {
            button.addEventListener('click', (event) => {
                const stat = event.target.getAttribute('data-stat');
                increaseStat(stat);
            });
        });

        document.querySelectorAll('.decrease').forEach(button => {
            button.addEventListener('click', (event) => {
                const stat = event.target.getAttribute('data-stat');
                decreaseStat(stat);
            });
        });

        document.querySelector('.toggle-screen3').addEventListener('click', () => {
            if (hero.talents === 0) {
                changeScreen(".screen3")
            } else {
                alert("Please allocate all talent points before starting!");
            }
        });

        updateStats();
    }
    init();
}

export { characterEditor };
