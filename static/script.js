let currentLang = "cs";

async function changeLanguage(lang) {
  currentLang = lang;

  try {
    // Načteme překlady z backendu
    const response = await fetch(`/get_translations?lang=${lang}`);
    const translations = await response.json();

    // Zkontrolujeme, zda se překlady načetly správně
    if (translations) {
      // Aktualizujeme texty na stránce
      document.title = translations["title"]; // Změní text v záložce prohlížeče
      document.getElementById("title").textContent = translations["title"];
      document.getElementById("label-age").textContent =
        translations["label_age"];
      document.getElementById("button-calculate").textContent =
        translations["button_calculate"];
      document.getElementById("age").placeholder =
        translations["placeholder_age"];
      document.getElementById("label-life-expectancy").textContent =
        translations["label_life_expectancy"];
    } else {
      console.error("Nepodařilo se načíst překlady.");
    }
  } catch (error) {
    console.error("Chyba při načítání překladů:", error);
  }
}

// Při odeslání formuláře se provede výpočet
document
  .getElementById("lifeForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const age = document.getElementById("age").value;
    const lifeExpectancy = document.getElementById("life-expectancy").value;

    // Odesíláme data na server s informací o aktuálním jazyce
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
  });

// Výchozí načtení stránky v češtině
window.addEventListener("load", () => {
  changeLanguage("cs");
});
