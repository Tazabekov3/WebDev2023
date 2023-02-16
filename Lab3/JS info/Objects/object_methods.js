//Using 'this' in object literal

function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); // What's the result?

//The result will be an error because 'this' method is called as a function rather than a method



//Create a calculator

let calculator = {
    read() {
        this.a = prompt("Type a", 0);
        this.b = prompt("Type b", 0);
    },

    sum() {
        return (this.a + this.b); 
    },

    mul() {
        return (this.a * this.b); 
    }
}



//Chaining

let ladder = {
    step: 0,
    up() {
      return this.step++;
    },
    down() {
      return this.step--;
    },
    showStep: function() { // shows the current step
      alert( this.step );
    }
  };