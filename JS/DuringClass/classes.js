class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const car1 = new Car("Ford", 2014);
const car2 = new Car("Audi", 2019);

document.getElementById("demo").innerHTML = car1.name + " " + car2.year;


class Parent {
    constructor(brand) {
        this.carName = brand;
    }
    presentCar() {
        return "I have a " + this.carName
    }
}

class Child extends Parent {
    constructor(brand, model) {
        super(brand)
        this.model = model;
    }
    show() {
        return this.presentCar() + " it is a " + this.model;
    }
}
const car3 = new Child("Ford", 2014);
document.getElementById("demo2").innerHTML = car3.show();