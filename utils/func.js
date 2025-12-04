import Riddle from "../riddles/all.js"

import {addSolveTime} from './utility.js'

export function askRiddle(riddleObj){
    
    for(let ridd of riddleObj){
        {
        console.log(`name is: ${ridd.name} > taskDescription: ${ridd.taskDescription}`);
        }
    }
}

export function measureSolveTime(fn){
    const start = Date.now();
    console.log("starting timer...");

    fn(Riddle)
    const ms = Date.now();
    console.log(ms - start);

}


measureSolveTime()