//Create new calculator

function Calculator() {
    this.read = function() {
        this.a = prompt("Type a", 0);
        this.b = prompt("Type b", 0);
    };
  
    this.sum = function() {
        return this.a + this.b;
    };
  
    this.mul = function() {
        return this.a * this.b;
    };
}



//Create new accumulator

function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
        this.value += prompt('How much to add?', 0);
    };
}