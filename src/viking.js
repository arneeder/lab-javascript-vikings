// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super (health, strength)
    this.name = name
  }
  receiveDamage(damage) {
    this.health -=  damage
    if(this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry() {
    return 'Odin Owns You All!'
  }
}
let viking = new Viking

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage
    if(this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
//  QUESTION: HOW DO I KNOW WHAT TO INSERT INSTEAD OF SAXON AND VIKING IN vikingAttack
// IF NOW PARAMETER IS PASSED? -> I ONLY HAVE THE CLASSES, NO OBJECT IS GENERATED YET.

class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(viking) {
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }
  vikingAttack() {
    // get random Saxon
    let attackedSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    let attackedSaxon = this.saxonArmy[attackedSaxonIndex]
    // get random Viking
    let attackingVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    let attackingViking = this.vikingArmy[attackingVikingIndex]

    console.log('Vinking Strength: ' + attackingViking.strength)
    console.log('Saxon health before: ' + attackedSaxon.health)
    let returnValue =  attackedSaxon.receiveDamage(attackingViking.strength)
    console.log('Saxon health after: ' + attackedSaxon.health)
    if(attackedSaxon.health <= 0) {
      attackedSaxon.splice(attackedSaxonIndex, 1)
    }
    return returnValue
  }
  saxonAttack() {}
  showStatus() {}
}

// TRYING OUT //

const saxon0 = new Saxon(1000,100)
const saxon1 = new Saxon(1000,100)
const saxon2 = new Saxon(1000,100)
const saxon3 = new Saxon(1000,100)

const viking0 = new Viking('firstViking', 1000,100)
const viking1 = new Viking('secondViking', 1000, 100)

const testWar = new War()
testWar.addSaxon(saxon0)
testWar.addSaxon(saxon1)
testWar.addSaxon(saxon2)
testWar.addSaxon(saxon3)

testWar.addViking(viking0)
testWar.addViking(viking1)

console.log(testWar.vikingAttack())

// TRYING OUT END //


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
