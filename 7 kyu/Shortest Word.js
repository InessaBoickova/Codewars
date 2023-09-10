// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


function findShort(s){
    let array = s.split(' ');
    return array.reduce((acc,current)=> {
        if(current.length < acc){
           return current.length 
        }
     return acc
    },100)
}

findShort('bitcoin take over the world maybe who knows perhaps')