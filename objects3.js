function VehicleConstructor(name, numWheels, numPassg, speed) {
    // Prevent problems of not using the 'new' keyword when invoking Constructor
    if (!(this instanceof VehicleConstructor)) {
        // the constructor was called without "new".
        return new VehicleConstructor(name, numWheels, numPassg, speed);
    }


    //Private variables
    var distanceTraveled = 0;
    //var self = this;

    // Private methods


    // Public variables
    this.name = name || "noName";
    this.numWheels = numWheels || 1;
    this.numPassg = numPassg || 1;
    this.speed = speed || 1

    // Public methods
    this.checkMiles = function() {
        console.log(distanceTraveled)
        return this
    };
    this.updateDistanceTravelled = function() {
        distanceTraveled += this.speed
    };
}

//Adding prototype methods to VehicleConstructor
//sayHi()
VehicleConstructor.prototype.sayHi = function () {
    console.log("hi");
    return this
};

//makeNoise()
VehicleConstructor.prototype.makeNoise = function (xNoise) {
    console.log(xNoise)
    return this
};

//move()
VehicleConstructor.prototype.move = function (xNoise) {
    this.updateDistanceTravelled();
    this.makeNoise(xNoise)
    return this
};

//generateVIN()
VehicleConstructor.prototype.generateVIN = function () {
    //Pirvate Variables
    //choices are between 1-z
    var nums = "123456789abcdefghijklmnopqrstuvwxyz";
    var vinNum = "";

    //VIN will be 17 characters long
    for (var i = 0; i < 17; i++) {
        var randIndex = Math.floor(Math.random()*nums.length)
        vinNum += nums[randIndex]
    }

    console.log(vinNum)
    return vinNum;
};

// creating new object "Sedan"
var Sedan = new VehicleConstructor("Sedan", 4, 5, 10);

Sedan.generateVIN()
