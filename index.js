class Vehicle {
    constructor(model){
      this.model = model
    }
    drive(){
      return this.model + " " + "drives"
    }
  }
            

  //  Sedan
  class Sedan extends Vehicle {
    constructor(model, backupCamera) {
        super(model)
        this.backupCamera = backupCamera
    }
  }


// SUV
class Suv extends Vehicle {
    constructor(model, offroadPackage) {
        super(model)
        this.offroadPackage = offroadPackage
    }
}


// truck
class Truck extends Vehicle {
    constructor(model, towingCapacity) {
        super(model)
        this.towingCapacity = towingCapacity
    }
}


// esedan
class EVSedan extends Vehicle {
    constructor(model) {
        super(model)
    }

    recharge() {
        return this.model + " recharges"
    }
}