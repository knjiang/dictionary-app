from flask import Flask
app = Flask(__name__)
import requests

@app.route('/')
def hello_world():
    requests.get("https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=")
    return 'Hello, World!'
