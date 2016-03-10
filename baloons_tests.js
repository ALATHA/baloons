test("orderBaloons", function(assert){
var balloonString =baloons("4 sets of red, 3 sets of blue, and 3 sets of yellow.");
assert.deepEqual(baloons.baloonString);
});

test("orderBaloons",function(assert){
	var expectedBaloon=[
      {
        "quantity": 4,
        "color": "red"
      },
      {
        "quantity": 3,
        "color": "blue"
      },
      {
        "quantity": 3,
        "color": "yellow"
      }
    
    ];
	assert.deepEqual(baloons.baloonsString);

})
