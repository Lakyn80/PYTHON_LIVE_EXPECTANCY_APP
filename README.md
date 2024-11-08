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