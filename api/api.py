import time
from flask import Flask
import json
import os
import os.path

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/board')
def get_game_board():
    curDirectory = os.getcwd()
    with open(curDirectory + '/maps/gamemaps.json', 'r') as f:
        mapsDict = json.load(f)
        return {'board': mapsDict['NC']}
