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

const main = () => { //จุดเปลี่ยนของ Student
    const student = new Student(
        " Yanakorn ",
        " 111/64  Nakhon Pathom ",
        " Nakhon Pathom Rajabhat University ",
        " Software Engineering ",
        2022,
        12000
    );
    const staff = new Staff(" SSS ", "456 Bar", 30000);

    console.log(student.toString()); // "Student[Person[ชื่อ=Yanakorn, ที่อยู่=111/64  Nakhon Pathom], มหาลัย= Nakhon Pathom Rajabhat University , year=2022, fee=12000]"

    console.log(staff.toString()); // "Staff[Person[name=SSS, address=456 bar], pay=30000]"
};
main();