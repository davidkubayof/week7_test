//libary input str 
import input from 'analiza-sync';
//all riddale
import allriddle from './riddles/all.js';
// creat player
import {createPlayer ,addSolveTime , showStats ,obj} from './utils/utility.js'
// ask and check timing
import {measureSolveTime , askRiddle} from './utils/func.js'


function play(){
    let bool = true;
    while(bool){
        //hello
        console.log(` welcome to you .`);
        //user enter a name
        const playerName = input("entar your name: ");
        //print the name 
        console.log("is user name: ",createPlayer(playerName));
        // ask riddle and cacualt timing
        measureSolveTime(askRiddle())
        

    }
}


play()

///Great job, Bob!
// Total time: 72 seconds
// Average per riddle: 36 seconds