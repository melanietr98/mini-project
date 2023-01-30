//Space Battle: Java Space Games
// 
class alienShip {
    constructor(name) {
      this.name = name,
      this.hull = Math.floor(Math.random() * (7 - 3) + 3),
      this.firepower = Math.floor(Math.random() * (5 - 2) + 2),
      this.accuracy = Math.floor(Math.random() * (.8 - .6) + .6)
    }
  
    attackuss(){
      let randomNum = Math.floor(Math.random())
       if (randomNum < this.accuracy) {
            hero.hull -= this.firepower
            window.alert(`You were hit for ${this.firepower} damage!`); 
          } else { 
            window.alert('Awesome the flerken missed!')
            console.loh('flerken missed!') 
          }
        }
  };
  
  class ussShip {
    constructor() {
      this.name = "USS Pandora";
      this.hull = 20,
      this.firepower = 5,
      this.accuracy = .7
    }
  
    attackAlien(){ // attackAlien occurs whenever the player attacks the alien. --
      let randomNum = Math.floor(Math.random())
      if (randomNum <= this.accuracy) { // checks if the player hits the alien
        alien.hull -= this.firepower // subtracts the player's firepower from the enemy's health if it hits
        window.alert(`You successfully attacked ${alien.name} for ${this.firepower} damage!`)
      } else {
        window.alert('You have missed!') 
        console.log('You missed cmon, are you serious!?')
      }
      // after the player attacks, we are going to run the target's (alien's) attackuss method so that it attacks back.
      }
  };
  
  const uss = new ussShip();
  
  const gameBegin = () => {
    window.alert('Welcome to Cyberspace!'); // welcome alert
    window.alert('Planet Earth has been attacked by flerkens! Your mission is to destroy every last flerken ship.'); // flerken are the ailens in this case
    window.alert('The USS Marvel has the opportunity to strike first, LETS GO!.'); // okay we are gearing up to fight
  };
  
  const stat = () => {
    window.alert(`Your Hull is ${uss.hull} and the Flerken hull is  ${uss.hull}`);
  };
  let alienCount = 6;
  let alienList = [];
  for (let i = alienCount; i > 0; i --){
    alienList.push("alienShip"+i);
  };
  
  let alienName = ('Alien '+ alienList.length)
  let alien = alienList.pop() 
  alien = new alienShip(alienName)
  
  const prepare = () => {
    if (alienList.length > 0){
      if (alien.hull > 0 && uss.hull > 0){
        window.alert('Ready for Battle of your LIFE!!')
        uss.attackAlien();
        if (alien.hull > 0){
          alien.attackuss();
        }
        battle();
      } else if (alien.hull <= 0 && alienList.length > 0){
        window.alert(`${alien.name} destroyed! Next one is coming!`)
        alienName = ('Alien '+ alienList.length)
        alien = alienList.pop()
        alien = new alienShip(alienName)
        window.alert(`${alien.name} is in the lead and is locked in.`)
      } else if (alienList.length >= 1 && uss.hull <= 0){
        window.alert('You have been destroyed!')
      }
    } else {
      window.alert('All flerken ships have been defeated so YOU WIN! yay yay yay')
    }
  };
  
  const battle = () => {
    stat();
    prepare();
  };
  
  
  const attackButton = document.getElementById('attack')
  attackButton.addEventListener('click', () => {battle()})
  
  const retreatButton = document.getElementById('retreat')
  retreatButton.addEventListener('click', () => {
        window.alert('The avengers would be disappointed. I guess we better call Carol Danvers!!');
        uss.hull=0;
        uss.firepower=0;
        uss.accuracy=0;
        stat();
  })
  
  const startButton = document.getElementById('start')
  startButton.addEventListener('click', () => {gameBegin()})