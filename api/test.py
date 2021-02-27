import json
import os
import os.path
directory = os.getcwd();
with open(directory + '/maps/gamemaps.json', 'r') as f:
        mapsDict = json.load(f)
        print(mapsDict)