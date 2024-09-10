export function contains(string, searchCharacter = " ") { 
    if (string===searchCharacter) {
    return true;
    } else {
        return false
    }
}

console.log(contains(" "));
console.log(contains("Ciao"))