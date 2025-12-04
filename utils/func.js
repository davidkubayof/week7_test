import Riddle from "../riddles/r1.js"

function askRiddle(riddleObj){
    console.log(Riddle.name, Riddle.taskDescription);
    console.log("display the choices as numbered options ");
}
function measureSolveTime(fn){
    let cornat = Riddle.timestart.push(time);
    fn()
    let end = Riddle.timend.push(time);
    return end - cornat;
}

