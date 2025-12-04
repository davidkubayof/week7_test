//libary input str 
import input from 'analiza-sync';
//all riddale
import allriddle from './riddles/all.js';
// creat player
import {createPlayer} from './utils/utility.js'
console.log(allriddle);



function play(){
    let bool = true;
    while(bool){
        console.log(` welcome to you .`);
        const playerName = input("entar your name: ");
        console.log(createPlayer(playerName));


        
    }
}


play()