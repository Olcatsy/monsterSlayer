// "Log" => an array that stores each message. Clear log when starting a new game and append a message "new game!"

// "Start New Game" => set both health bars to 100 (styles width: 100%) and clear the log + append message "new game!". 

// "Attack" => decrease your health by a random # (1-20) and add "You lost X health" to the log. decrease monster's health by a random # and add "Monster took X damage" to the log.
// I need a separate randomizer function (D20)

// "Special attack" (not sure about project requirements) => decrease monster's health by random # x2 and add "Monster took X damage". Decrease your health same as "Attack" button. Bonus: add timeout for this button

// "Heal" => increase your health by a random number (5-20). bonus: add timeout

// "Give up" => print "You gave up!" in the log

// If your health gets to 0, print "You loose!"

// If monster health gets to 0, print "You win!"


new Vue({
  el: '#app',
  data: {
    yourHealth: 80,
    monsterHealth: 100,
  },
  methods: {
    startNewGame: function() {
      this.yourHealth = 100;
      this.monsterHealth = 100;
    }
  }
})