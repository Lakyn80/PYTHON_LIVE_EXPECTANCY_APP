
BASIC APP 

1. Importy

from flask import Flask, render_template, request, jsonify

Flask – Třída pro vytvoření aplikace Flask.
render_template – Funkce pro vykreslení HTML šablon (frontend).
request – Objekt pro přístup k datům z HTTP požadavků (např. data odeslaná formulářem).
jsonify – Funkce pro převod Python slovníku na JSON odpověď (formát čitelný pro JavaScript na frontendové stránce).

2. Vytvoření Flask aplikace

app = Flask(__name__)

Flask(__name__) – Inicializuje aplikaci Flask. Argument __name__ říká Flasku, kde se nachází hlavní soubor aplikace.

3. Hlavní stránka (index.html)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/') – Dekorátor říká Flasku, že tato funkce bude spuštěna při přístupu na základní URL (např. http://127.0.0.1:5000/).
def index() – Definuje funkci, která vykreslí hlavní stránku.
return render_template('index.html') – Vykreslí soubor index.html ze složky templates.

4. API endpoint /calculate

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.json
    age = int(data['age'])
    remain = 90 - age
    months = remain * 12
    weeks = remain * 52
    days = remain * 365

    result = {
        "remain": remain,
        "months": months,
        "weeks": weeks,
        "days": days
    }

    return jsonify(result)

@app.route('/calculate', methods=['POST']) – Tato funkce se spustí při POST požadavku na URL /calculate.

data = request.json – Přečte data ve formátu JSON, která byla odeslána z frontendové stránky pomocí JavaScriptu.

age = int(data['age'])

remain = 90 - age – Počet zbývajících let, pokud průměrná délka života je 90 let.
months = remain * 12 – Převod zbývajících let na měsíce.
weeks = remain * 52 – Převod zbývajících let na týdny.
days = remain * 365 – Převod zbývajících let na dny (bez ohledu na přestupné roky).
result = {...} – Vytvoří slovník s výsledky výpočtu.
return jsonify(result) – Vrátí výsledky jako JSON odpověď, kterou může JavaScript na frontendové stránce použít.

5. Spuštění aplikace

app.run(debug=True) – Spustí Flask server s povoleným režimem ladění (debug=True). Režim ladění umožňuje sledovat chyby přímo v prohlížeči a automaticky restartuje server při změnách v kódu.

Jak aplikace funguje:
Uživatel otevře hlavní stránku (/):

Funkce index() vrátí obsah souboru index.html, což je frontendová stránka s formulářem.
Uživatel zadá svůj věk a klikne na tlačítko:

JavaScript na stránce odešle data (věk) jako JSON pomocí POST požadavku na URL /calculate.
Flask backend přijme POST požadavek:

Funkce calculate() načte věk z JSON dat, provede výpočty a vrátí výsledky jako JSON odpověď.
JavaScript přijme odpověď a zobrazí výsledky na stránce.

Možná vylepšení:
Můžete přidat validaci věku, aby uživatel nemohl zadat neplatnou hodnotu (např. záporné číslo).
Lze přidat možnost zadat jinou průměrnou délku života, než je 90 let.

========================================================================================================

BASIC APP ENGLISH

Imports
from flask import Flask, render_template, request, jsonify

Flask – Class for creating a Flask application.
render_template – Function for rendering HTML templates (frontend).
request – Object for accessing data from HTTP requests (e.g., form-submitted data).
jsonify – Function for converting a Python dictionary to a JSON response (a format readable by JavaScript on the frontend page).

Creating the Flask Application
app = Flask(name)

Flask(name) – Initializes a Flask application. The argument __name__ tells Flask where the main application file is located.

Main Page (index.html)
@app.route('/')
def index():
return render_template('index.html')

@app.route('/') – A decorator that tells Flask this function should be executed when accessing the base URL (e.g., http://127.0.0.1:5000/).
def index() – Defines a function that renders the main page.
return render_template('index.html') – Renders the index.html file from the templates folder.

API Endpoint /calculate
@app.route('/calculate', methods=['POST'])
def calculate():
data = request.json
age = int(data['age'])
remain = 90 - age
months = remain * 12
weeks = remain * 52
days = remain * 365

sql
result = {  
    "remain": remain,  
    "months": months,  
    "weeks": weeks,  
    "days": days  
}  

return jsonify(result)
@app.route('/calculate', methods=['POST']) – This function is triggered when a POST request is made to the URL /calculate.
data = request.json – Reads the JSON data sent from the frontend page using JavaScript.
age = int(data['age']) – Converts the received age data to an integer.
remain = 90 - age – Calculates the remaining years assuming an average life expectancy of 90 years.
months = remain * 12 – Converts the remaining years to months.
weeks = remain * 52 – Converts the remaining years to weeks.
days = remain * 365 – Converts the remaining years to days (ignoring leap years).
result = {...} – Creates a dictionary with the calculation results.
return jsonify(result) – Returns the results as a JSON response, which can be used by JavaScript on the frontend page.

Running the Application
app.run(debug=True) – Starts the Flask server with debug mode enabled (debug=True). Debug mode allows you to see errors directly in the browser and automatically restarts the server when code changes are made.

How the Application Works:

The user opens the main page (/):

The index() function returns the content of the index.html file, which is a frontend page with a form.
The user enters their age and clicks the button:

JavaScript on the page sends the data (age) as JSON via a POST request to the URL /calculate.
The Flask backend receives the POST request:

The calculate() function reads the age from the JSON data, performs the calculations, and returns the results as a JSON response.
JavaScript receives the response and displays the results on the page.

Possible Improvements:

You can add age validation to prevent the user from entering invalid values (e.g., a negative number).
You can add an option to input a different average life expectancy instead of the default 90 years.

===================================================================================================

BASIC APP

Импорт библиотек
from flask import Flask, render_template, request, jsonify

Flask – Класс для создания Flask приложения.
render_template – Функция для рендеринга HTML-шаблонов (frontend).
request – Объект для доступа к данным из HTTP-запросов (например, данные из формы).
jsonify – Функция для преобразования словаря Python в JSON-ответ (формат, читаемый JavaScript на frontend странице).

Создание Flask приложения
app = Flask(name)

Flask(name) – Инициализирует Flask приложение. Аргумент __name__ указывает Flask, где находится основной файл приложения.

Главная страница (index.html)
@app.route('/')
def index():
return render_template('index.html')

@app.route('/') – Декоратор, указывающий Flask, что данная функция должна выполняться при обращении к базовому URL (например, http://127.0.0.1:5000/).
def index() – Определяет функцию, возвращающую главную страницу.
return render_template('index.html') – Рендерит файл index.html из папки templates.

API endpoint /calculate
@app.route('/calculate', methods=['POST'])
def calculate():
data = request.json
age = int(data['age'])
remain = 90 - age
months = remain * 12
weeks = remain * 52
days = remain * 365

sql
result = {  
    "remain": remain,  
    "months": months,  
    "weeks": weeks,  
    "days": days  
}  

return jsonify(result)
@app.route('/calculate', methods=['POST']) – Эта функция запускается при POST-запросе на URL /calculate.
data = request.json – Считывает JSON данные, отправленные с frontend страницы через JavaScript.
age = int(data['age']) – Преобразует полученные данные возраста в целое число.
remain = 90 - age – Рассчитывает оставшиеся годы при средней продолжительности жизни в 90 лет.
months = remain * 12 – Перевод оставшихся лет в месяцы.
weeks = remain * 52 – Перевод оставшихся лет в недели.
days = remain * 365 – Перевод оставшихся лет в дни (без учета високосных годов).
result = {...} – Создает словарь с результатами вычислений.
return jsonify(result) – Возвращает результаты в формате JSON, который может быть использован JavaScript на frontend странице.

Запуск приложения
app.run(debug=True) – Запускает Flask сервер с включенным режимом отладки (debug=True). Режим отладки позволяет отслеживать ошибки в браузере и автоматически перезагружает сервер при изменении кода.

Как работает приложение:

Пользователь открывает главную страницу (/):

Функция index() возвращает содержимое файла index.html, который представляет собой frontend страницу с формой.
Пользователь вводит свой возраст и нажимает кнопку:

JavaScript на странице отправляет данные (возраст) в формате JSON через POST-запрос на URL /calculate.
Flask backend получает POST-запрос:

Функция calculate() считывает возраст из JSON данных, выполняет вычисления и возвращает результаты в формате JSON.
JavaScript получает ответ и отображает результаты на странице.

Возможные улучшения:

Можно добавить валидацию возраста, чтобы пользователь не мог вводить некорректные значения (например, отрицательные числа).
Можно добавить возможность ввода другой средней продолжительности жизни, отличной от 90 лет.

====================================================================================================

FINAL APP VERSION APP.PY

1. Importy
python
Zkopírovat kód
from flask import Flask, render_template, request, jsonify
import json
Flask: Hlavní třída pro vytvoření aplikace Flask.
render_template: Funkce Flasku pro vykreslení HTML šablon (frontend stránky).
request: Objekt, který umožňuje přístup k datům odeslaným z klienta (např. z formuláře).
jsonify: Funkce, která vrací odpověď ve formátu JSON, což je vhodné pro JavaScript na frontendové stránce.
json: Modul Pythonu pro práci s JSON daty, který použijeme k načtení překladů.

2. Inicializace aplikace Flask

python

app = Flask(__name__)
Flask(__name__): Vytvoří instanci aplikace Flask. Argument __name__ pomáhá Flasku určit umístění souborů a šablon v projektu.

3. Načtení překladů
python

with open('translations.json', encoding='utf-8') as f:
    translations = json.load(f)
with open('translations.json', encoding='utf-8'): Otevře soubor translations.json, který obsahuje překlady pro různé jazyky (čeština, angličtina, ruština).
translations = json.load(f): Načte obsah souboru jako Python slovník, kde jsou uložené překlady.
Příklad struktury souboru translations.json:

json

{
    "cs": {
        "title": "Průměrná délka dožití",
        "result_message": "Do konce života ti zbývá {remain} let, {months} měsíců, {weeks} týdnů a {days} dnů."
    },
    "en": {
        "title": "Average Life Expectancy",
        "result_message": "You have {remain} years, {months} months, {weeks} weeks, and {days} days left to live."
    },
    "ru": {
        "title": "Средняя продолжительность жизни",
        "result_message": "Вам осталось жить {remain} лет, {months} месяцев, {weeks} недель и {days} дней."
    }
}
4. Hlavní stránka (index.html)
python
Zkopírovat kód
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/'): Dekorátor, který říká Flasku, že tato funkce bude volána při přístupu na základní URL (/).
def index(): Funkce, která vykreslí hlavní HTML stránku.
return render_template('index.html'): Vrátí obsah souboru index.html, což je HTML šablona frontendové stránky.

5. API endpoint pro výpočet délky dožití
python
@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.json
    age = int(data['age'])
    life_expectancy = int(data.get('lifeExpectancy', 90))
    lang = data.get('lang', 'cs')

    remain = life_expectancy - age
    months = remain * 12
    weeks = remain * 52
    days = remain * 365

    result_message = translations[lang]['result_message'].format(
        remain=remain, months=months, weeks=weeks, days=days
    )

    return jsonify({"message": result_message})
Vysvětlení:
@app.route('/calculate', methods=['POST']): Endpoint, který přijímá POST požadavky na URL /calculate.
data = request.json: Načte data odeslaná z frontendové stránky ve formátu JSON (věk uživatele a zvolený jazyk).
age = int(data['age']): Načte věk uživatele a převede ho na celé číslo (int).
life_expectancy = int(data.get('lifeExpectancy', 90)): Načte průměrnou délku dožití z dat. Pokud není zadaná, použije výchozí hodnotu 90.
lang = data.get('lang', 'cs'): Načte aktuální jazyk z dat. Pokud není zadaný, použije výchozí jazyk (cs - čeština).
Výpočet zbývající délky života:
remain = life_expectancy - age: Vypočítá, kolik let zbývá do konce průměrné délky dožití.
months = remain * 12: Převod let na měsíce.
weeks = remain * 52: Převod let na týdny.
days = remain * 365: Převod let na dny (ignoruje přestupné roky).
Lokalizovaná zpráva:
result_message = translations[lang]['result_message'].format(...): Načte lokalizovanou zprávu podle zvoleného jazyka a doplní ji o výsledky výpočtu (remain, months, weeks, days).
Odpověď:
return jsonify({"message": result_message}): Vrátí výsledek jako JSON odpověď, která je snadno použitelná v JavaScriptu na frontendové stránce.

6. API endpoint pro načítání překladů
python
@app.route('/get_translations', methods=['GET'])
def get_translations():
    lang = request.args.get('lang', 'cs')
    return jsonify(translations.get(lang, translations['cs']))
@app.route('/get_translations', methods=['GET']): Endpoint, který přijímá GET požadavky na URL /get_translations.
lang = request.args.get('lang', 'cs'): Načte jazyk z dotazovacích parametrů URL. Pokud není zadaný, použije výchozí jazyk cs.
return jsonify(...): Vrátí překlady jako JSON odpověď.
Tento endpoint používá JavaScript na frontendové stránce k načtení textů podle aktuálně zvoleného jazyka.

7. Spuštění aplikace
python
if __name__ == '__main__':
    app.run(debug=True)
if __name__ == '__main__': Tato podmínka zajistí, že se aplikace spustí pouze při přímém spuštění souboru (python app.py).
app.run(debug=True): Spustí Flask server v režimu ladění (debug=True). Režim ladění automaticky restartuje server při změně kódu a zobrazuje chyby přímo v prohlížeči.
Shrnutí:
Flask server poskytuje hlavní stránku a dva API endpointy.
JavaScript na frontendové stránce načítá překlady a odesílá data (věk a průměrnou délku dožití) na server.
Server provádí výpočty a vrací lokalizovanou zprávu jako JSON odpověď.
JavaScript zobrazí zprávu na stránce podle vybraného jazyka.
=========================================================================================================

INDEX.HTML 

1. <!DOCTYPE html>
html

<!DOCTYPE html>
Toto je deklarace typu dokumentu. Říká prohlížeči, že tento soubor je napsán v HTML5.
Je to nutné, aby prohlížeč správně vykreslil obsah stránky podle standardu HTML5.
2. Otevírací tag <html lang="cs">
html

<html lang="cs">
Otevírá hlavní část dokumentu HTML.
lang="cs": Tento atribut říká prohlížeči, že obsah stránky je v českém jazyce (cs znamená čeština). Pomáhá to prohlížeči a vyhledávačům lépe pochopit, jaký jazyk je použit.
3. Hlava stránky <head>
html

<head>
Tato část obsahuje meta informace o stránce, které nejsou přímo viditelné uživateli, ale jsou důležité pro prohlížeč a vyhledávače.
3.1 Meta tag pro kódování znaků
html

<meta charset="UTF-8" />
Nastavuje kódování znaků na UTF-8, což je standardní způsob, jak správně zobrazit všechny znaky, včetně speciálních znaků a diakritiky (háčky a čárky).
3.2 Meta tag pro responzivní design
html

<meta name="viewport" content="width=device-width, initial-scale=1.0" />
Tento tag říká prohlížeči, aby stránku přizpůsobil velikosti obrazovky zařízení (telefon, tablet, počítač).
width=device-width znamená, že šířka stránky by měla odpovídat šířce obrazovky zařízení.
initial-scale=1.0 nastavuje počáteční úroveň přiblížení na 100 %.
3.3 Titulek stránky
html

<title>Průměrná délka dožití</title>
Tento text se zobrazí v záložce prohlížeče a také může být použit jako název stránky ve výsledcích vyhledávání.
"Průměrná délka dožití" je název aplikace.
3.4 Odkaz na CSS soubor
html

<link rel="stylesheet" href="/static/style.css" />
Tento řádek připojuje soubor s CSS styly (style.css), který určuje vzhled stránky (barvy, fonty, rozložení).
rel="stylesheet" říká, že jde o soubor se styly.
href="/static/style.css" určuje cestu k souboru.
4. Tělo stránky <body>
html

<body>
Tato část obsahuje viditelný obsah stránky.
4.1 Hlavní kontejner stránky
html

<div class="container">
<div> je obecný kontejner, který seskupuje obsah.
class="container" určuje CSS třídu container, která definuje styly tohoto kontejneru.
4.2 Hlavní nadpis stránky
html

<h1 id="title">Průměrná délka dožití</h1>
<h1> je hlavní nadpis stránky, který je obvykle největší.
id="title" identifikuje tento prvek pro JavaScript, aby mohl být změněn při přepnutí jazyka.
4.3 Přepínač jazyků
html

<div id="language-switcher">
    <button onclick="changeLanguage('cs')">Čeština</button>
    <button onclick="changeLanguage('en')">English</button>
    <button onclick="changeLanguage('ru')">Русский</button>
</div>
Tento <div> obsahuje tři tlačítka pro přepínání jazyků.
onclick="changeLanguage('cs')" volá JavaScript funkci changeLanguage() a předává jí kód jazyka (cs, en, ru).
4.4 Formulář pro zadání věku a délky dožití
html

<form id="lifeForm">
<form> je formulář, který uživatel vyplňuje.
id="lifeForm" umožňuje JavaScriptu přistupovat k formuláři.
4.4.1 Vstupní pole pro věk
html

<label for="age" id="label-age">Kolik je ti let?</label>
<input
    type="number"
    id="age"
    name="age"
    required
    min="0"
    max="150"
    placeholder="Zadej svůj věk"
/>
<label> poskytuje popisek pro vstupní pole.
<input> je pole, kde uživatel zadá svůj věk.
type="number" určuje, že jde o číselné pole.
required znamená, že pole musí být vyplněno.
min="0" a max="150" omezují hodnotu na rozmezí od 0 do 150.
placeholder="Zadej svůj věk" zobrazuje text v poli, dokud uživatel nezačne psát.
4.4.2 Vstupní pole pro průměrnou délku dožití
html

<label for="life-expectancy" id="label-life-expectancy">Průměrná délka dožití:</label>
<input
    type="number"
    id="life-expectancy"
    name="life-expectancy"
    value="90"
    min="0"
    max="150"
/>
Pole umožňuje uživateli změnit průměrnou délku dožití.
value="90" nastavuje výchozí hodnotu na 90 let.
4.4.3 Tlačítko pro odeslání formuláře
html

<button type="submit" id="button-calculate">Spočítat</button>
<button> je tlačítko, které odesílá formulář.
type="submit" určuje, že tlačítko odesílá data z formuláře.
4.5 Výstupní oblast pro zobrazení výsledků
html

<div id="result"></div>
Tento <div> je prázdný kontejner, kam JavaScript vloží výsledek výpočtu.
5. Odkaz na JavaScript soubor
html

<script src="/static/script.js"></script>
Tento řádek připojuje JavaScript soubor (script.js), který obsahuje logiku aplikace (interakce s uživatelem, přepínání jazyků, výpočty).
6. Konec dokumentu
html

</body>
</html>
</body> uzavírá tělo stránky.
</html> uzavírá celý HTML dokument.
Shrnutí:
Tento HTML dokument obsahuje základní strukturu webové aplikace pro výpočet průměrné délky dožití. Obsahuje nadpis, přepínač jazyků, formulář pro zadání věku a délky dožití, tlačítko pro výpočet a výstupní oblast pro zobrazení výsledků. JavaScript soubor zajišťuje interaktivitu, změnu jazyka a odeslání dat na backend (Flask).

========================================================================================================

JAVASCRIPT 

1. Proměnná currentLang
javascript

let currentLang = "cs";
let je způsob, jak vytvořit proměnnou v JavaScriptu. Proměnná je jako "krabička", do které uložíme hodnotu.
currentLang je proměnná, která uchovává aktuálně vybraný jazyk. Na začátku je nastavena na "cs", což znamená čeština.

2. Funkce changeLanguage(lang)
javascript

async function changeLanguage(lang) {
  currentLang = lang;
Tato funkce mění jazyk aplikace. Když zavoláte tuto funkci, změní se hodnota proměnné currentLang na nový jazyk (lang), který předáte jako argument (např. "en" pro angličtinu).
Co je to async?
async znamená, že tato funkce může provádět asynchronní operace, což jsou úkoly, které trvají delší dobu, jako například načítání dat z internetu. Díky tomu může kód pokračovat dál, aniž by musel čekat.

Načítání překladů z backendu
javascript

const response = await fetch(`/get_translations?lang=${lang}`);
const translations = await response.json();
fetch() je funkce, která slouží k načítání dat z internetu. V našem případě načítáme překlady z backendu (Flask server) pomocí URL /get_translations?lang=${lang}.
${lang} je způsob, jak vložit hodnotu proměnné do řetězce (textu).
await znamená, že JavaScript musí počkat, než se načítání dat dokončí.
response.json() převede odpověď z backendu (která je ve formátu JSON) na JavaScript objekt

Příklad odpovědi:
json

{
  "title": "Average Life Expectancy",
  "label_age": "How old are you?",
  "button_calculate": "Calculate",
  "placeholder_age": "Enter your age",
  "label_life_expectancy": "Average Life Expectancy:"

}

Aktualizace textů na stránce
javascript

document.title = translations["title"];
document.getElementById("title").textContent = translations["title"];
document.getElementById("label-age").textContent = translations["label_age"];
document.getElementById("button-calculate").textContent = translations["button_calculate"];
document.getElementById("age").placeholder = translations["placeholder_age"];
document.getElementById("label-life-expectancy").textContent = translations["label_life_expectancy"];
document.getElementById("title"): Tato část kódu najde HTML prvek podle jeho id (např. "title").
.textContent: Nastaví text tohoto HTML prvku.
.placeholder: Nastaví text, který se zobrazuje v prázdném vstupním poli (pole, kde uživatel zadá věk).
JavaScript zde aktualizuje texty na stránce podle zvoleného jazyka.

Automatická aktualizace výsledku
javascript

const age = document.getElementById("age").value;
const lifeExpectancy = document.getElementById("life-expectancy").value;

if (age) {
  await calculateLifeExpectancy(age, lifeExpectancy);
}
document.getElementById("age").value: Načte hodnotu, kterou uživatel zadal do pole pro věk.
if (age): Pokud uživatel zadal nějaký věk (pole není prázdné), automaticky se zavolá funkce calculateLifeExpectancy() pro výpočet zbývající délky života.


Pojďme si tento JavaScript kód rozebrat krok po kroku, jako bychom to vysvětlovali úplnému začátečníkovi. Nevadí, že jste nikdy předtím JavaScript nedělal. Vysvětlím vám vše jednoduše a srozumitelně.

1. Proměnná currentLang
javascript

let currentLang = "cs";
let je způsob, jak vytvořit proměnnou v JavaScriptu. Proměnná je jako "krabička", do které uložíme hodnotu.
currentLang je proměnná, která uchovává aktuálně vybraný jazyk. Na začátku je nastavena na "cs", což znamená čeština.
2. Funkce changeLanguage(lang)
javascript

async function changeLanguage(lang) {
  currentLang = lang;
Tato funkce mění jazyk aplikace. Když zavoláte tuto funkci, změní se hodnota proměnné currentLang na nový jazyk (lang), který předáte jako argument (např. "en" pro angličtinu).
Co je to async?
async znamená, že tato funkce může provádět asynchronní operace, což jsou úkoly, které trvají delší dobu, jako například načítání dat z internetu. Díky tomu může kód pokračovat dál, aniž by musel čekat.
Načítání překladů z backendu
javascript

const response = await fetch(`/get_translations?lang=${lang}`);
const translations = await response.json();
fetch() je funkce, která slouží k načítání dat z internetu. V našem případě načítáme překlady z backendu (Flask server) pomocí URL /get_translations?lang=${lang}.
${lang} je způsob, jak vložit hodnotu proměnné do řetězce (textu).
await znamená, že JavaScript musí počkat, než se načítání dat dokončí.
response.json() převede odpověď z backendu (která je ve formátu JSON) na JavaScript objekt.
Příklad odpovědi:
json

{
  "title": "Average Life Expectancy",
  "label_age": "How old are you?",
  "button_calculate": "Calculate",
  "placeholder_age": "Enter your age",
  "label_life_expectancy": "Average Life Expectancy:"
}
Aktualizace textů na stránce
javascript

document.title = translations["title"];
document.getElementById("title").textContent = translations["title"];
document.getElementById("label-age").textContent = translations["label_age"];
document.getElementById("button-calculate").textContent = translations["button_calculate"];
document.getElementById("age").placeholder = translations["placeholder_age"];
document.getElementById("label-life-expectancy").textContent = translations["label_life_expectancy"];
document.getElementById("title"): Tato část kódu najde HTML prvek podle jeho id (např. "title").
.textContent: Nastaví text tohoto HTML prvku.
.placeholder: Nastaví text, který se zobrazuje v prázdném vstupním poli (pole, kde uživatel zadá věk).
JavaScript zde aktualizuje texty na stránce podle zvoleného jazyka.

Automatická aktualizace výsledku
javascript

const age = document.getElementById("age").value;
const lifeExpectancy = document.getElementById("life-expectancy").value;

if (age) {
  await calculateLifeExpectancy(age, lifeExpectancy);
}
document.getElementById("age").value: Načte hodnotu, kterou uživatel zadal do pole pro věk.
if (age): Pokud uživatel zadal nějaký věk (pole není prázdné), automaticky se zavolá funkce calculateLifeExpectancy() pro výpočet zbývající délky života.
3. Funkce calculateLifeExpectancy()
javascript

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
Tato funkce provádí výpočet zbývající délky života na základě věku a průměrné délky dožití.
fetch("/calculate", { ... }): Odesílá POST požadavek na backend (Flask server) na URL /calculate.
method: "POST": Říká, že data budou odeslána pomocí POST metody.
headers: { "Content-Type": "application/json" }: Říká, že odesíláme data ve formátu JSON.
body: JSON.stringify({...}): Převádí data (věk, průměrná délka dožití a jazyk) na JSON formát.

Příklad odeslaných dat:
json

{
  "age": 30,
  "lifeExpectancy": 90,
  "lang": "cs"
}
Zpracování odpovědi:
response.json(): Načte odpověď z backendu jako JSON objekt.
data.message: Obsahuje zprávu o zbývající délce života, kterou zobrazíme na stránce.


4. Odeslání formuláře
javascript

document.getElementById("lifeForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const age = document.getElementById("age").value;
  const lifeExpectancy = document.getElementById("life-expectancy").value;

  await calculateLifeExpectancy(age, lifeExpectancy);
});
addEventListener("submit", ...): Poslouchá na událost odeslání formuláře.
event.preventDefault(): Zabraňuje výchozímu chování formuláře (tj. zabrání tomu, aby se stránka znovu načetla).
Zavolá funkci calculateLifeExpectancy(), aby provedla výpočet.
5. Výchozí nastavení jazyka
javascript
Zkopírovat kód
window.addEventListener("load", () => {
  changeLanguage("cs");
});
window.addEventListener("load", ...): Tato část kódu se provede, jakmile se stránka načte.
Zavolá funkci changeLanguage("cs"), která nastaví výchozí jazyk na češtinu.


# https-github.com-Lakyn80-PYTHON_LIVE_EXPECTANCY_APP
