
// Class Syntax & Creation
const student = {
    isName: "Sadeem Sattar",
    age : "25",
    phoneNumber : "0331-6536935",
    printAge: function()
    {
        console.log(this.age);
    }
}
// console.log(student.isName);
// Class Constructor
class Car {
    constructor(mileage , brand)
    {
        this.mileage = mileage
        this.brand = brand
    }
    start()
    {
        console.log("Start");
    }
    end()
    {
        console.log("Stop");
    }
}
let GR = new Car(100000,"Fortuner");
let LX570 = new Car (100000, "LEXUS");

// Parent-Child

class Person {
    constructor()
    {
        
        this.humanBeing = "Insan ka bacha hoon main bhai.";
        // console.log("This is Abbus Constructor");
    }
    eat()
    {
     console.log('Eat');
    }
    sleep()
    {
    console.log("Sleep");
    }
}
class softwareEngineer extends Person
{
    constructor (department)
    {
        // console.log("This is Child Constructor");
        super();
        this.department = department;
    }
    works(){
        console.log("Sleep & Do Not build Something");
    }    
}

let personObject = new Person();
let softwareEngineerObject = new softwareEngineer("Web Application Development");



//Practice Question 1
class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
    viewData() {
      console.log(`Name: ${this.name}, Email: ${this.email}`);
    }
  }

  class Admin extends User{
    constructor(name,email)
    {
        super(name,email);
    }
    editData()
    {
        console.log(`Admin: ${this.name}, Admin Email: ${this.email}`);
    } 
  }
  
  const studentArray = [];
  const adminArray = [];



  for (let index = 0; index < 10; index++) {

    // Object is being create no.of time till loops
    let admin = new Admin(`admin${index}`, `admin${index}@example.com`);
    let student = new User(`Student${index}`, `student${index}@example.com`);
    
    //Storing adminArray in their respective arrays
    adminArray.push(admin)
    studentArray.push(student);
  }
  adminArray.forEach(element => {
    element.viewData();
  });

  
  studentArray.forEach(student => {
    student.viewData();
  });
  
