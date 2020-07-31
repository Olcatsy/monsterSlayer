//// "Log" => an array that stores each message. Clear log when starting a new game and append a message "new game!"
// add color classes to each turn

//// "Start New Game" => set both health bars to 100 (styles width: 100%) and clear the log + append message "new game!". 

//// "Attack" => decrease your health by a random # (1-20) and add "You lost X health" to the log. decrease monster's health by a random # and add "Monster took X damage" to the log.
//// I need a separate randomizer function (D20)


//// "Special attack" (not sure about project requirements) => decrease monster's health by random # x2 and add "Monster took X damage". Decrease your health same as "Attack" button. 
//Bonus: add timeout for this button

//Try to refactor 'Attack' and 'Special attack'

//// "Heal" => increase your health by a random number (5-20). 
// bonus: add timeout

//// "Give up" => print "You gave up!" in the log

//// If your health gets to 0, print "You loose!"
//// If monster health gets to 0, print "You win!"
// instead of printing it to the console, save it in state and display a message based on that state using v-if
//// Where do I check this? Do I need to use v-if?

// disable buttons when the game is won or lost?

new Vue({
  el: '#app',
  data: {
    yourHealth: 100,
    monsterHealth: 100,
    log: ['Time to fight!'],
    youWon: false,
    monsterWon: false,
  },
  methods: {
    rollD20: function() {
      return Math.floor(Math.random() * 20 + 1)
    },
    winnerCheck: function() {
      if (this.yourHealth <= 0) {
        this.monsterWon = !this.monsterWon;
        this.yourHealth = 0;
      } else if (this.monsterHealth <= 0) {
        this.youWon = !this.youWon;
        this.monsterHealth = 0;
      }
    },
    startNewGame: function() {
      this.yourHealth = 100;
      this.monsterHealth = 100;
      this.log = ['Time to fight!'];
      this.youWon = false;
      this.monsterWon = false;
    },
    attack: function() {
      // decreases the players and monster's health by a random number between 1 and 20
      const yourDamage = this.rollD20();
      const monsterDamage = this.rollD20();
      this.yourHealth -= yourDamage;
      this.monsterHealth -= monsterDamage;
      this.log.push(`You lost ${yourDamage} health!`)
      this.log.push(`The monster took ${monsterDamage} damage!`);
      this.winnerCheck();
    },
    specialAttack: function() {
      // same as "attack" but player deals twice the damage
      const yourDamage = this.rollD20() ;
      const monsterDamage = this.rollD20() * 2;
      this.yourHealth -= yourDamage;
      this.monsterHealth -= monsterDamage;
      this.log.push(`You lost ${yourDamage} health!`)
      this.log.push(`Your special attack deals ${monsterDamage} damage!`);
      this.winnerCheck();
    },
    heal: function() {
      // heals 5-20 health points
      const healthGain = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
      this.yourHealth += healthGain;
      this.log.push(`You healed ${healthGain} health.`);
    },
    giveUp: function() {
      this.yourHealth = 0;
      this.log.push(`You gave up and lost the game!`);
    }
  }
})