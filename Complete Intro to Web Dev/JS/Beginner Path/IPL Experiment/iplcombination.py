import json
import random

# Open the data.json file and load its contents into a Python object
with open('JS/IPL Experiment/data.json', 'r') as f:
    data = f.read()
    player_data = json.loads(data)

# Define the range of players for each category
wk_range = range(1, 5)
bat_range = range(3, 7)
ar_range = range(1, 5)
bowl_range = range(3, 7)

#teams
# Kolkata Knight Riders
# Royal Challengers Bangalore

# Specify the team names for which you want to select players
team_names = ["Royal Challengers Bangalore", "Kolkata Knight Riders"]

# Initialize a list to store the player names and overall points
player_info = []

# Iterate over the list of players
for player in player_data["Data"]["Value"]["PlayerStats"]:
    # Check if the player's team name matches one of the desired team names
    if player["tmnm"] in team_names:
        # Extract the player name, category and overall points
        player_name = player["plyrnm"]
        player_category = player["sklnm"]
        overall_points = int(player["ovrpoint"])
        
        # Check if the player falls into one of the desired categories and if the desired number of players has not been reached for that category
        if overall_points > 0 and player_category == "WICKET KEEPER" and len([p for p in player_info if p['category'] == 'WK']) < random.choice(wk_range):
            # Store the player in the list
            player_info.append({"name": player_name, "category": player_category, "overall_points": overall_points})
        elif overall_points > 0 and player_category == "BATTER" and len([p for p in player_info if p['category'] == 'BAT']) < random.choice(bat_range):
            player_info.append({"name": player_name, "category": player_category, "overall_points": overall_points})
        elif overall_points > 0 and player_category == "ALL ROUNDER" and len([p for p in player_info if p['category'] == 'AR']) < random.choice(ar_range):
            player_info.append({"name": player_name, "category": player_category, "overall_points": overall_points})
        elif overall_points > 0 and player_category == "BOWLER" and len([p for p in player_info if p['category'] == 'BOWL']) < random.choice(bowl_range):
            player_info.append({"name": player_name, "category": player_category, "overall_points": overall_points})
            
        # If exactly 11 players have been selected, break out of the loop
        if len(player_info) == 11:
            break

# Print the list of selected players
print(player_info)

# based on the list give 4 best combination of exactly 11 players where WK can be from 1(min)-4(max), Bat can be from 3(min)-6(max),AR can be from 1(min)-4(max), Bowl can be from 3(min)-6(max) also select Captian and Vice captain for each combination
# https://fantasy.iplt20.com/daily/stats
