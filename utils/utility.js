export let obj = {
    name: "",
    times:[] 
    }


export function createPlayer(name){
    obj.name+=name;
    return obj;
}

export function addSolveTime(player, seconds){
    return player.times.posh(seconds)
}


export function showStats(player){
    const total = player.times;
    const len = player.times.length;
    let sum = 0
    for (let i=0; i < len; i++) {sum += total[i];}
    const average = sum / len ;
    console.log(`is total: ${sum},is average: ${average}`);
}



