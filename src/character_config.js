import { hero } from "../src/data.js";

function characterEditor() {
    // Funkcja aktualizująca wyświetlane statystyki
    function updateStats() {
        document.getElementById('talents').textContent = hero.talents;
        document.getElementById('strength').textContent = hero.strength;
        document.getElementById('perception').textContent = hero.perception;
        document.getElementById('dexterity').textContent = hero.dexterity;
        document.getElementById('intelligence').textContent = hero.intelligence;
        document.getElementById('wisdom').textContent = hero.wisdom;
        document.getElementById('charisma').textContent = hero.charisma;
    }

    // Funkcja do zwiększania wartości danej statystyki
    function increaseStat(stat) {
        // Sprawdzenie czy są dostępne talenty do wydania
        if (hero.talents > 0) {
            hero[stat]++;
            hero.talents--;  // Odejmowanie talentu
            updateStats();
        }
    }

    // Funkcja do zmniejszania wartości danej statystyki
    function decreaseStat(stat) {
        if (hero[stat] > 0) {
            hero[stat]--;
            hero.talents++;  // Przywracanie talentu, gdy zmniejszamy statystykę
            updateStats();
        }
    }

    // Funkcja inicjalizująca event listenery
    function init() {
        // Obsługa kliknięcia dla przycisków "increase"
        document.querySelectorAll('.increase').forEach(button => {
            button.addEventListener('click', (event) => {
                const stat = event.target.getAttribute('data-stat');
                increaseStat(stat);
            });
        });

        // Obsługa kliknięcia dla przycisków "decrease"
        document.querySelectorAll('.decrease').forEach(button => {
            button.addEventListener('click', (event) => {
                const stat = event.target.getAttribute('data-stat');
                decreaseStat(stat);
            });
        });

        // Wyświetlenie początkowych statystyk
        updateStats();
    }

    // Wywołanie funkcji inicjalizującej po załadowaniu strony
    init();
}

export { characterEditor };
