// Cat exercise

var Cat = function(name,furColor) {
    this.name = name;
    this.furColor = furColor;
    this.tiredness = 20;
    this.sleep = function (numMinutes) {
        for (var i = 0; i < numMinutes; i++) {
            console.log('z');
            this.tiredness--;
        }
    };
    this.hunger = 10;
    this.feed = function (sizeFood) {
        for (var i = 0; i < sizeFood; i++) {
            console.log('nom');
            this.hunger--;
        }
    };
    this.loneliness = 20;
    this.playTime = function (numPlaymates) {
        for (var i = 0; i < numPlaymates; i++){
            this.loneliness--;
            console.log("Hoormeoway!!!!!");
        }
    };
    this.happiness = 0;
    this.petMe = function (numPettings) {
        for (var i = 0; i < numPettings; i++) {
            console.log("Purrrrr...");
            this.happiness++;
        }
    };
    this.timePassed = function (timepassed) {
        this.tiredness += timepassed;
        this.hunger += timepassed;
        this.loneliness += timepassed;
        this.happiness -= timepassed;
    };
};

var bilbo = new Cat("Bilbo", "calico");

bilbo.playTime(10);
console.log("Bilbo is this lonely: " + bilbo.loneliness);

bilbo.petMe(20);
console.log("Bilbo is now this happy (YAYAYAYAY): " + bilbo.happiness);

bilbo.timePassed(5);
console.log(bilbo.tiredness, bilbo.hunger, bilbo.loneliness, bilbo.happiness);