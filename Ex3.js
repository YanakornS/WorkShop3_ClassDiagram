class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  getName() {
    return this.name;
  }

  getAddress() {
    return this.address;
  }

  setAddress(address) {
    this.address = address;
  }

  toString() {
    return `Person[name=${this.name}, address=${this.address}]`;
  }
}

class Student extends Person {
  constructor(name, address, school, program, year, fee) {
    super(name, address);
    this.school = school;
    this.program = program;
    this.year = year;
    this.fee = fee;
  }

  getSchool() {
    return this.school;
  }

  setSchool(school) {
    this.school = school;
  }

  getProgram() {
    return this.program;
  }

  setProgram(program) {
    this.program = program;
  }

  getYear() {
    return this.year;
  }

  setYear(year) {
    this.year = year;
  }

  getFee() {
    return this.fee;
  }

  setFee(fee) {
    this.fee = fee;
  }

  toString() {
    return `Student[${super.toString()}, school=${this.school}, program=${
      this.program
    }, year=${this.year}, fee=${this.fee}]`;
  }
}

class Staff extends Person {
  constructor(name, address, pay) {
    super(name, address);
    this.pay = pay;
  }

  getPay() {
    return this.pay;
  }

  setPay(pay) {
    this.pay = pay;
  }

  toString() {
    return `Staff[${super.toString()}, pay=${this.pay}]`;
  }
}

const main = () => {
  const student = new Student(
    "John Doe",
    "123 Main Street",
    "University of California, Berkeley",
    "Computer Science",
    2024,
    10000
  );
  const staff = new Staff("Jane Doe", "456 Elm Street", 50000);

  console.log(student.toString()); // "Student[Person[name=John Doe, address=123 Main Street], school=University of California, Berkeley, program=Computer Science, year=2024, fee=10000]"

  console.log(staff.toString()); // "Staff[Person[name=Jane Doe, address=456 Elm Street], pay=50000]"
};
main();
