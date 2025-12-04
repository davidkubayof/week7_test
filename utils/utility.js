import input from 'analiza-sync';

export function createPlayer(name){
    return {
        name,
        times:[]
    }
}


export function addSolveTime(player, seconds){
    return player.times.posh(seconds)
}

export function showStats(player){
    const total = player.times
    const average = null//
    console.log(`is total: ${total},is average: ${average}`);
}

