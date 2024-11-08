let currentLang = "cs";

async function changeLanguage(lang) {
  currentLang = lang;

  try {
    // Načteme překlady z backendu
    const response = await fetch(`/get_translations?lang=${lang}`);
    const translations = await response.json();

    // Aktualizujeme texty na stránce
    document.title = translations["title"];
    document.getElementById("title").textContent = translations["title"];
    document.getElementById("label-age").textContent =
      translations["label_age"];
    document.getElementById("button-calculate").textContent =
      translations["button_calculate"];
    document.getElementById("age").placeholder =
      translations["placeholder_age"];
    document.getElementById("label-life-expectancy").textContent =
      translations["label_life_expectancy"];

    // Pokud je již zadán věk, automaticky aktualizujeme výsledek
    const age = document.getElementById("age").value;
    const lifeExpectancy = document.getElementById("life-expectancy").value;

    if (age) {
      await calculateLifeExpectancy(age, lifeExpectancy);
    }
  } catch (error) {
    console.error("Chyba při načítání překladů:", error);
  }
}

// Funkce pro výpočet délky dožití
async function calculateLifeExpectancy(age, lifeExpectancy) {
  const response = await fetch("/calculate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      age: age,
      lifeExpectancy: lifeExpectancy,
      lang: currentLang,
    }),
  });

  const data = await response.json();
  document.getElementById("result").textContent = data.message;
}

// Při odeslání formuláře se provede výpočet
document
  .getElementById("lifeForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const age = document.getElementById("age").value;
    const lifeExpectancy = document.getElementById("life-expectancy").value;

    await calculateLifeExpectancy(age, lifeExpectancy);
  });

// Výchozí načtení stránky v češtině
window.addEventListener("load", () => {
  changeLanguage("cs");
});
