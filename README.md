## 🌟 SPACE BATTLE GAME
space battle game built with javascript

Today's task is to build something according to specification. Pretend you have received the specification below for a class project. Planning your program is a challenge unto itself. START SIMPLE. Break the problem down as far as you can and don't move on until the smallest piece works.
Once you've figured out the basics, it's up to you to make the game you want, but remember, your game does not have to be elegant. The only thing that matters is that it works.


## 🚀 SPECIFICATIONS
Build a game of battling alien spaceships using Javascript.
Earth has been attacked by a horde of aliens! You are the captain of the USS Schwarzenegger, on a mission to destroy every last alien ship.
Battle the aliens as you try to destroy them with your lasers.

There are six 👽🚢 alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat.

A game round would look like this:
You attack the first alien ship 💥👽🚢
If the ship survives, it attacks you 💥
If you survive, you attack the ship again 💥
If it survives, it attacks you again 💥💥💥
Etc.

If you destroy the ship, you have the option to attack the next ship or to retreat
If you retreat, the game is over, perhaps leaving the game open for further developments or options.
You win the game if you destroy all of the aliens.
You lose the game if you are destroyed.

## 🚢 SHIP PROPERTIES

hull is the same as hitpoints. If hull reaches 0 or less, the ship is destroyed.
firepower is the amount of damage done to the hull of the target with a successful hit.
accuracy is the chance between 0 and 1 that the ship will hit its target.
Every time the ship will attack, calculate the chance that the damage will hit the opposing ship using Math.random() 
If the ship's accuracy is 0.8 - then if the number generated from Math.random() is less than or equal to 0.8 then the attack will be successful. If the value is greater than  0.8 then the attack has missed. 


💢 Adjust the accuracy based on the specs for each ship 💢

<h3> Your spaceship, the USS Schwarzenegger should have the following properties:</h3>

<p> hull - 20 </p>
<p> firepower - 5 </p>
<p> accuracy - .7 </p>

<h3> The alien ships should each have the following ranged properties determined randomly: </h3> 

<p> hull - between 3 and 6 </p> 
<p> firepower - between 2 and 4 </p> 
<P> accuracy - between .6 and .8 </p>

<h3> You could be battling six alien ships each with unique values.</h3>
