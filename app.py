from flask import Flask, json, g, request, jsonify
app = Flask(__name__)
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route('/', methods=["GET","POST"])
def dictionary_app():
    if request.method == 'POST':
        request.json['data']
    response_object = {'status': 'success'}
    response = requests.get("https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=497f069e-3608-4b8e-8451-44a1302617aa")
    data = response.json()
    stems = str(data[0]['meta']['stems'])
    response_object['stems'] = stems
    return jsonify(response_object)
