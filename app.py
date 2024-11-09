from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)

# Načtení překladů
with open('translations.json', encoding='utf-8') as f:
    translations = json.load(f)

# Hlavní stránka
@app.route('/')
def index():
    return render_template('index.html')

# API endpoint pro výpočet délky dožití
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

# API endpoint pro načítání překladů
@app.route('/get_translations', methods=['GET'])
def get_translations():
    lang = request.args.get('lang', 'cs')
    return jsonify(translations.get(lang, translations['cs']))

if __name__ == '__main__':
    app.run(debug=True)


