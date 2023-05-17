
import json

# Open the data.json file and load its contents into a Python object
with open('JS/IPL Experiment/data.json', 'r') as f:
    data = f.read()
    player_data = json.loads(data)

#teams

# Royal Challengers Bangalore, Punjab Kings , Rajasthan Royals, Kolkata Knight Riders

# Specify the team name for which you want to extract the player data
team_names = ["Royal Challengers Bangalore", "Kolkata Knight Riders"]

# Initialize a list to store the player names and overall points
player_info = []

# Iterate over the list of players
for player in player_data["Data"]["Value"]["PlayerStats"]:
    # Check if the player's team name matches the desired team name
    if player["tmnm"] in team_names:
        # Extract the player name and overall points
        player_name = player["plyrnm"]
        overall_points = int(player["ovrpoint"])
        skill = player["sklnm"]

        if overall_points > 0:
        # Store the player name and overall points in the list
            player_info.append({"name": player_name, "overall_points": overall_points, "skill": skill})

# Print the list of player names and overall points
print(player_info)

# based on the list give 4 best combination of exactly 11 players where WK should be from 1(min)-4(max), Bat should be from 3(min)-6(max),AR should be from 1(min)-4(max), Bowl should be from 3(min)-6(max) also select Captian and Vice captain for each combination
# https://fantasy.iplt20.com/daily/stats