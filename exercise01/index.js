export function contains(string, searchCharacter = " ") { 
    if (typeof searchCharacter === 'function') {
        for (let i = 0; i < string.length; i++) {
            if(searchCharacter(string[i])) 
                return true;
        }
    } else {
        return false
    }
}

console.log(contains(" "));
console.log(contains("Ciao"))