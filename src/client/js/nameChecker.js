function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
   // let names=["www..com"]
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]
    
    if(names.includes(inputText)) {
        alert("Welcome, it is valid url!")
        console.log("It is right")
    } else{
        alert("No No No")
    }
}

export { checkForName }
