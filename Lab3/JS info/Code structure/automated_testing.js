//What's wrong in the test?

it("Raises x to the power n", function() {
    let x = 5;
  
    let result = x;
    assert.equal(pow(x, 1), result);
  
    result *= x;
    assert.equal(pow(x, 2), result);
  
    result *= x;
    assert.equal(pow(x, 3), result);
  });

//Here we pass 3 tests in a single iteration which is a poor practice. It is better to pass all 3 cases and separate iterations