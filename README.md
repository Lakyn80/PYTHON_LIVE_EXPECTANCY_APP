
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