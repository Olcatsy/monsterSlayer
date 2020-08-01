//// "Log" => an array that stores each message. Clear log when starting a new game and append a message "new game!"
// add color classes to each turn

//// "Start New Game" => set both health bars to 100 (styles width: 100%) and clear the log + append message "new game!". 
////  hide the new game button and reveal control buttons

//// "Attack" => decrease player health by a random # (1-20) and add "You lost X health" to the log. decrease monster's health by a random # and add "Monster took X damage" to the log.
//// I need a separate randomizer function (D20)


//// "Special attack" (not sure about project requirements) => decrease monster's health by random # x2 and add "Monster took X damage". Decrease player health same as "Attack" button. 
//Bonus: add timeout for this button

//Try to refactor 'Attack' and 'Special attack'

//// "Heal" => increase player health by a random number (5-20). 
// bonus: add timeout

//// "Give up" => print "You gave up!" in the log

//// If player health gets to 0, print "You loose!"
//// If monster health gets to 0, print "You win!"
//// instead of printing it to the console, save it in state and display a message based on that state using v-if
//// Where do I check this? Do I need to use v-if?

// disable buttons when the game is won or lost? or display a modal



new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    log: ['Time to fight!'],
  },
  methods: {
    calculateDamage: function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    checkWin: function() {
      // checks if player or monster's health is depleted and if yes, ends the game
      if (this.playerHealth <= 0) {
        
        this.playerHealth = 0;

        if (confirm('Monster won! New Game?')) {
          // creates a confirmation dialogue that allows to restart the game
          this.startNewGame();
        } else {
          this.gameIsRunning = false;
        }
      } else if (this.monsterHealth <= 0) {
        
        this.monsterHealth = 0;

        if (confirm('You won! New Game?')) {
          // creates a confirmation dialogue that allows to restart the game
          this.startNewGame();
        } else {
          this.gameIsRunning = false;
        }
      }
    },
    startNewGame: function() {
      // resets everything
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.log = ['Time to fight!'];
      this.youWon = false;
      this.monsterWon = false;
    },
    attack: function() {
      // decreases the players and monster's health by a random number between 1 and 20
      const damageToPlayer = this.calculateDamage(5, 30);
      this.playerHealth -= damageToPlayer;
      this.log.push(`You lost ${damageToPlayer} health!`)

      const damageToMonster = this.calculateDamage(1, 20);
      this.monsterHealth -= damageToMonster;
      this.log.push(`The monster took ${damageToMonster} damage!`);

      this.checkWin();
    },
    specialAttack: function() {
      // same as "attack" but player deals more damage
      const damageToPlayer = this.calculateDamage(10, 30);
      this.playerHealth -= damageToPlayer;
      this.log.push(`You lost ${damageToPlayer} health!`)

      const damageToMonster = this.calculateDamage(5, 30);
      this.monsterHealth -= damageToMonster;
      this.log.push(`Your special attack deals ${damageToMonster} damage!`);

      this.checkWin();
    },
    heal: function() {
      // heals 5-20 health points
      const healthGain = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
      //This prevents the player's health bar going over 100
      if (this.playerHealth + healthGain >= 100) {
        this.log.push(`You healed ${100 - this.playerHealth} health.`);
        this.playerHealth = 100;
      } else {
        this.playerHealth += healthGain;
        this.log.push(`You healed ${healthGain} health.`);
      }
    },
    giveUp: function() {
      this.playerHealth = 0;
      this.log.push(`You gave up and lost the game!`);
    }
  }
})