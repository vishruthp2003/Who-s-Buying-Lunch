function whoIsPaying(names){
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition]
    return randomPerson + " will pay for lunch today." 
}