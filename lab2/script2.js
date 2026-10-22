var car1 = new Object ();
car1.color = "grey";
car1.maxSpeed = 250;
car1.driver = {
    name: "Kotselivska Anastasia",
    category: "C",
    personal_limitations: "No driving at night"
};
car1.tuning = true;
car1["number of accidents"] = 0;

var car2 = new Object;
car2.color = "red";
car2.maxSpeed = 240;
car2.driver = {
    name: "Telep Yulia",
    category: "B",
    personal_limitations: null
};
car1.tuning = false;
car1["number of accidents"] = 2;

car1.drive = function ()
{ 
    console.log("I am not driving at night");
};

car2.drive = function ()
{
    console.log("I can drive anytime");
};

car1.drive();
car2.drive();

function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;

    this.trip = function() {
        if (!this.driver) {
        console.log("No driver assigned");
        }
        else {
            var message = "Driver " + this.driver.name;

            if (this.driver.nightDriving) {
                message += " drives at night";
            } else {
                message += " does not drive at night";
            }

            message += " and has " +
                this.driver.experience +
                " years of experience";

            console.log(message);
        }
    };
}

Truck.prototype.AssignDriver = function (
    name, nightDriving, experience
) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

var truck1 = new Truck("white", 8000, 90, "Volvo", "FH");
var truck2 = new Truck("black", 6000, 80, "MAN", "TGX");

truck1.AssignDriver("Telep Yulia", true, 5);
truck2.AssignDriver("Kotselivska Anastasia", false, 3);

truck1.trip();
truck2.trip();

