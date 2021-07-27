/**
 * A slot machine with three reels that can individually spin()
 * and then display() the current contents of all the reels
 */

function randMax(max) {
  return Math.trunc(1e9 * Math.random()) % max;
}

// 'this' aware functions and their dynamic functions allow re-use of these functions
// with data from different objects (reels)
var reel = {
  symbols: ["X", "Y", "Z", "W", "$", "*", "<", "@"],

  spin() {
    if (!this.position) {
      this.position = randMax(this.symbols.length - 1);
    }
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
  },

  display() {
    if (!this.position) {
      this.position = randMax(this.symbols.length - 1);
    }
    return this.symbols[this.position];
  },
};

// the execution context of our reels resides within slotMachine
var slotMachine = {
  // create 'row' of 3 reels with a prototype of reel (execution context is our slotMachine object)
  reels: [Object.create(reel), Object.create(reel), Object.create(reel)],

  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.spin();
    });
  },

  display() {
    var lines = [];

    // display/iterate all 3 lines of reels on the slot machine (-1, 0, 1).
    for (let linePos = -1; linePos <= 1; linePos++) {
      // each reel in array of reels
      let line = this.reels.map(function getSlot(reel) {
        var slot = Object.create(reel);
        slot.position =
          (reel.symbols.length + reel.position + linePos) % reel.symbols.length;
        return slot.display();
      });
      lines.push(line.join(" | "));
    }
    return lines.join("\n");
  },
};

// 1. init
slotMachine.spin();
console.log(slotMachine.display());
