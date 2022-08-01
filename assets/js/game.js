// Game States

// "WIN" - Player robot has defeated all enemy-robots.
//  * Fight all enemy-robots
//  * Defeat each enemy-robot

// "LOSE" - Player robot's health is zero or less





var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
// console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// console.log(enemyNames);
// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);

// for(var i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index.");
// }

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "skip" || promptFight === "SKIP") {
    // Confirm that the player wants to skip
    var confirmSkip = window.confirm("Are you sure you would like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip the fight. Goodbye!");

        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
    }
}

        //  remove enemy's health by subtracting the amount set in the playerAttack var
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            // award player money for winning 
            playerMoney = playerMoney + 20;
            break;
            
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health remaining.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack var
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health remaining.");
        }
    }  // end of while loop
}; // end of fight function        
        
  

//  function to start a new game 

var startGame = function () {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i = 0; i < enemyNames.length; i++) {

        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost your robot in battle! Game Over");
            break;
        }
    }
    
    endGame();
};

    var endGame = function() {
        window.alert("The game has now ended. Let's see how you did!");
        if (playerHealth > 0){
            window.alert("Great job, you survived the game! You now have a score of " + playerMoney + ".");
        }
        else {
            window.alert("You've lost your robot in battle.");
        }

        var playAgainConfirm = window.confirm("Would you like to play again?");
        if (playAgainConfirm) {
            startGame();
        }
        else {
            window.alert("Thank you for playing Robot Gladiators! Come back soon!")
        }

    };


startGame();