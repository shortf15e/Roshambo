#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

class Outputs { //class with static methods
    
    static badThrow () {//similar to throwing an error
        return 'You must enter rock, paper or scissors';
    }

    static playGame () {
        return 'Playing a game of Roshambo against the computer.';
    }

    static logThrow (player) {
        return `${player.name} plays ${player.roll}!`
    }

    static announceWinner(p1, p2) {
        if (p1.win === p2.win) {return '~Tie. Please roll again!~'};
        if (p1.win) return `~${p1.name} wins.~`;
        else return `~${p2.name} wins.~`;
    }
} //end of class Outputs

class Player {
    constructor (name) {
        this.name = name;
        this.roll = '';
        this.win = false;
    }
}; //end class Player

class Throw {    //Object of static methods
    static screenThrow(player) {
        return player.roll = argv.move;
    };

    static randomThrow(player) {
       let rn = Math.random()
       if (rn <= .33) {return player.roll = 'rock'}
        else if (rn <=.66) {return player.roll = 'paper'}
        else {return player.roll = 'scissors'}
    }

    static compareThrows (p1, p2) { //p1,p2 are the player objects

        if (p1.roll === p2.roll) {return}//this is a tie
        else if (p1.roll === 'rock') {
            if (p2.roll === 'paper') {return p2.win = true}
            else {return p1.win = true}
         }
        else if (p1.roll === 'paper') {
            if (p2.roll === 'scissors') {return p2.win = true}
            else {return p1.win = true}
        }
        else if (p1.roll === 'scissors') {
            if (p2.roll === 'rock') {return p2.win = true}
            else {return p1.win = true}
        }
    } //end of compareThrows 
    
}; //end of class Throw

//let's play the game!

const player1 = new Player('Player');
const player2 = new Player('Computer');

player1.roll = argv.move;
// Throw.screenThrow(player1);//get input from terminal --move=rock (paper or scissors)
Throw.randomThrow(player2);
Throw.compareThrows(player1, player2);

console.log(Outputs.playGame());
console.log(Outputs.logThrow(player1));
console.log(Outputs.logThrow(player2));
console.log(Outputs.announceWinner(player1, player2))
// $ node main.js --move=rock