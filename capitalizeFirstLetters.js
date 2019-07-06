function capitalize(string) {
    let splitStr = string.split(" ");
    let capitalized = [];

    splitStr.forEach(word => {
        let wordChars = word.split("");
        wordChars.map(wordChar => {
            if (wordChar === wordChars[0]) {
                capitalized.push(wordChars[0].toUpperCase())
            } else { capitalized.push(wordChar) }
            capitalized.join("");
        })
        if (splitStr.indexOf(word) !== (splitStr.length - 1)) {
            capitalized.push(" ");
        }
    })
    return capitalized.join("").toString();
}