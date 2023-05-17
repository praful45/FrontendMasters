const fs = require('fs');

// Read the contents of the 'data.json' file
fs.readFile('JS/IPL Experiment/data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Parse the JSON data and store it in the 'player_data' variable
  const player_data = JSON.parse(data);

  // Specify the team name for which you want to extract the player data
  const team_name = "Gujarat Titans";

  // Initialize a list to store the player names and overall points
  const player_info = [];

  // Iterate over the list of players
  player_data.forEach(player => {
    // Check if the player's team name matches the desired team name
    if (player.tmnm === team_name) {
      // Extract the player name and overall points
      const player_name = player.plyrnm;
      const overall_points = player.ovrpoint;

      // Store the player name and overall points in the list
      player_info.push({ name: player_name, overall_points: overall_points });
    }
  });

  // Print the list of player names and overall points
  console.log(player_info);
});
