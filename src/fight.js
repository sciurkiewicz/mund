import { hero } from "./data.js";
import { enemy } from "./enemies.js";
import { hit } from "./sound.js";

function fight() {
    // script.js

    document.addEventListener("DOMContentLoaded", () => {
        // Pobranie elementów z DOM
        const heroName = document.querySelector(".fight-hero div");
        const heroImage = document.querySelector(".fight-hero img");
        const heroHealthMeter = document.querySelector(".fight-hero .meter-health");
        const heroEnergyMeter = document.querySelector(".fight-hero .meter-energy");

        const enemyName = document.querySelector(".fight-enemy div");
        const enemyImage = document.querySelector(".fight-enemy img");
        const enemyHealthMeter = document.querySelector(".fight-enemy .meter-health");
        const enemyEnergyMeter = document.querySelector(".fight-enemy .meter-energy");

        // Funkcja aktualizująca informacje o bohaterze
        function updateHeroStats() {
            heroName.textContent = hero.name;
            heroImage.src = hero.image;
            heroHealthMeter.value = hero.health;
            heroHealthMeter.max = 100;
            heroEnergyMeter.value = hero.energy;
            heroEnergyMeter.max = 100;
        }

        // Funkcja aktualizująca informacje o przeciwniku
        function updateEnemyStats() {
            enemyName.textContent = enemy.name;
            enemyImage.src = enemy.image;
            enemyHealthMeter.value = enemy.health;
            enemyHealthMeter.max = 100;
            enemyEnergyMeter.value = enemy.energy;
            enemyEnergyMeter.max = 100;
        }

        // Funkcja obsługująca atak
        function attack() {
            // Oblicz obrażenia
            const damageToEnemy = hero.strength;
            const damageToHero = enemy.strength;

            // Aktualizacja zdrowia przeciwnika i odtwarzanie dźwięku
            if (enemy.health > 0) {
                enemy.health -= damageToEnemy;
                if (enemy.health < 0) enemy.health = 0;
                // hit()
            }

            // Aktualizacja statystyk bohatera i przeciwnika
            updateHeroStats();
            updateEnemyStats();

            // Sprawdzenie, czy przeciwnik został pokonany
            if (enemy.health <= 0) {
                checkFightOutcome();
                return;
            }

            // Zablokowanie przycisku na czas ataku przeciwnika
            attackButton.disabled = true;

            // Opóźniony atak przeciwnika (1 sekunda)
            setTimeout(() => {
                hit()
                // Atak przeciwnika i odtwarzanie dźwięku
                if (hero.health > 0) {
                    hero.health -= damageToHero;
                    if (hero.health < 0) hero.health = 0;
                }
                // Aktualizacja wyświetlanych statystyk
                updateHeroStats();
                updateEnemyStats();
                // Sprawdzenie wyniku walki
                checkFightOutcome();
                // Odblokowanie przycisku po ataku przeciwnika
                attackButton.disabled = false;
            }, 1000);
        }

        // Funkcja sprawdzająca wynik walki
        function checkFightOutcome() {
            if (hero.health <= 0) {
                alert("Przegrałeś! Bohater został pokonany.");
            } else if (enemy.health <= 0) {
                alert("Wygrałeś! Przeciwnik został pokonany.");
            }
        }

        // Przypisanie funkcji do przycisku ataku
        const attackButton = document.querySelector(".fight-options button:nth-child(1)");
        attackButton.addEventListener("click", attack);

        // Inicjalizacja
        updateHeroStats();
        updateEnemyStats();
    });
}

export { fight };
