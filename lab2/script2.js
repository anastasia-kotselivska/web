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
// ВИПРАВЛЕНО: замінено car1 на car2
car2.tuning = false;
car2["number of accidents"] = 2;

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


// Клас Square
class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log(
            "Square — квадрат має 4 рівні сторони та 4 кути по 90 градусів"
        );
    }

    length() {
        return 4 * this.a;
    }

    square() {
        return this.a * this.a;
    }

    info() {
        console.log("Інформація про квадрат:");
        console.log("Сторони:", this.a, this.a, this.a, this.a);
        console.log("Кути: 90°, 90°, 90°, 90°");
        console.log("Периметр:", this.length());
        console.log("Площа:", this.square());
    }
}

// Клас Rectangle
class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log(
            "Rectangle — прямокутник має 4 прямі кути та рівні протилежні сторони."
        );
    }

    length() {
        return 2 * (this.a + this.b);
    }

    square() {
        return this.a * this.b;
    }

    info() {
        console.log("Інформація про прямокутник:");
        console.log("Сторони:", this.a, this.b, this.a, this.b);
        console.log("Кути: 90°, 90°, 90°, 90°");
        console.log("Периметр:", this.length());
        console.log("Площа:", this.square());
    }
}

// Клас Rhombus
class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log(
            "Rhombus — ромб має 4 рівні сторони, а протилежні кути рівні."
        );
    }

    length() {
        return 4 * this.a;
    }

    square() {
        return this.a * this.a *
            Math.sin(this.beta * Math.PI / 180);
    }

    info() {
        console.log("Інформація про ромб:");
        console.log("Сторони:", this.a, this.a, this.a, this.a);
        console.log(
            "Кути:",
            this.alpha + "°",
            this.beta + "°",
            this.alpha + "°",
            this.beta + "°"
        );
        console.log("Периметр:", this.length());
        console.log("Площа:", this.square().toFixed(2));
    }
}

// Клас Parallelogram
class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log(
            "Parallelogram — паралелограм має попарно паралельні та рівні протилежні сторони."
        );
    }

    length() {
        return 2 * (this.a + this.b);
    }

    square() {
        return this.a * this.b *
            Math.sin(this.beta * Math.PI / 180);
    }

    info() {
        console.log("Інформація про паралелограм:");
        console.log("Сторони:", this.a, this.b, this.a, this.b);
        console.log(
            "Кути:",
            this.alpha + "°",
            this.beta + "°",
            this.alpha + "°",
            this.beta + "°"
        );
        console.log("Периметр:", this.length());
        console.log("Площа:", this.square().toFixed(2));
    }
}

// Getter і setter для Rhombus
Object.defineProperties(Rhombus.prototype, {
    side: {
        get: function () {
            return this.a;
        },
        set: function (value) {
            this.a = value;
        }
    },

    obtuseAngle: {
        get: function () {
            return this.alpha;
        },
        set: function (value) {
            this.alpha = value;
            this.beta = 180 - value;
        }
    },

    acuteAngle: {
        get: function () {
            return this.beta;
        },
        set: function (value) {
            this.beta = value;
            this.alpha = 180 - value;
        }
    }
});

// Виклик статичного методу help
console.log("\n===== ДОВІДКА ПРО ФІГУРИ =====");
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

// Створення об'єктів і виклик info
console.log("\n===== ХАРАКТЕРИСТИКИ ФІГУР =====");
var mySquare = new Square(5);
var myRectangle = new Rectangle(6, 4);
var myRhombus = new Rhombus(5, 120, 60);
var myParallelogram = new Parallelogram(8, 4, 120, 60);

mySquare.info();
myRectangle.info();
myRhombus.info();
myParallelogram.info();

// Перевірка getter і setter
console.log("\n===== GETTER І SETTER =====");
console.log("Сторона ромба:", myRhombus.side);
myRhombus.side = 7;
console.log("Нова сторона ромба:", myRhombus.side);
console.log("Тупий кут:", myRhombus.obtuseAngle);
console.log("Гострий кут:", myRhombus.acuteAngle);

// Функція Triangular з деструктуризацією
function Triangular({ a = 3, b = 4, c = 5 } = {}) {
    return { a, b, c };
}

console.log("\n===== TRIANGULAR =====");
console.log(Triangular()); // за замовчуванням (3, 4, 5)
console.log(Triangular({ a: 5, b: 12, c: 13 }));
console.log(Triangular({ a: 7, b: 24, c: 25 }));

// Функція PiMultiplier (замикання)
function PiMultiplier(factor) {
    return function() {
        return Math.PI * factor;
    };
}

const multiplyPiBy2 = PiMultiplier(2);
const multiplyPiByTwoThirds = PiMultiplier(2 / 3);
const dividePiBy2 = PiMultiplier(1 / 2);

console.log("\n===== PI MULTIPLIER =====");
console.log("Pi * 2 =", multiplyPiBy2());
console.log("Pi * (2/3) =", multiplyPiByTwoThirds());
console.log("Pi / 2 =", dividePiBy2());

// Функція Painter та тестові об'єкти
function Painter(color) {
    return function(obj) {
        if (obj && obj.type !== undefined) {
            console.log(`Колір: ${color}, тип об'єкта (type): ${obj.type}`);
        } else {
            console.log("No 'type' property occurred!");
        }
    };
}

const PaintBlue = Painter("blue");
const PaintRed = Painter("red");
const PaintYellow = Painter("yellow");

const Object1 = {
    maxSpeed: 280,
    type: "Sportcar",
    color: "magenta"
};

const Object2 = {
    type: "Truck",
    "avg speed": 90,
    "load capacity": 2400
};

const Object3 = {
    maxSpeed: 180,
    color: "purple",
    isCar: true
};

console.log("\n===== PAINTER TESTS =====");
console.log("Object 1:");
PaintBlue(Object1);
PaintRed(Object1);
PaintYellow(Object1);

console.log("Object 2:");
PaintBlue(Object2);
PaintRed(Object2);
PaintYellow(Object2);

console.log("Object 3:");
PaintBlue(Object3);
PaintRed(Object3);
PaintYellow(Object3);
