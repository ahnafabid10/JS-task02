function  onlyCharacter( str ) {
    if(typeof str !== "string"){
        return "Invalid"
    }
    return str.replaceAll(" ", "").toUpperCase()
}

const character = onlyCharacter(true)
console.log(character)


