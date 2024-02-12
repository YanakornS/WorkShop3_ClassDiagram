class Author {
  constructor(name, email, gender) {
    this.name = name;
    this.email = email;
    this.gender = gender;
  }

  getName(getName) {
    return this.name;
  }
  getEmail(getEmail) {
    return this.email;
  }
  setEmail(email) {
    return (this.email = email);
  }
  toString() {
    return `Author[name=${this.name}, email=${this.email}, gender=${this.gender}]`;
  }
}

class Book {
  name = "";
  author = [];
  price = 0;
  qty = 0;

  constructor(name, author, price, qty = 0) {
    this.name = name;
    this.author = author;
    this.price = price;
    this.qty = qty;
  }

  getName() {
    return this.name;
  }

  getAuthor() {
    return this.getAuthor();
  }

  getPrice() {
    return this.price;
  }

  setPrice(price) {
    this.price = price;
  }

  getQty() {
    return this.qty;
  }

  setQty(qty) {
    this.qty = qty;
  }
  toString() {
    let authorNames = "";
    for (let i = 0; i < this.author.length; i++) {
      authorNames += this.author[i].toString();            //ถ้าต้องการให้โชว์ email กับ gender  เปลี่ยนจาก getName เป็น toString//
      if (i < this.author.length - 1) {
        authorNames += ", ";
      }
    }
    return `Book [name = ${this.name}, authors = {${authorNames}}, price = ${this.price}, qty = ${this.qty}]`;
  }

  getAuthorNames() {
    return this.author.map((author) => author.getName()).join(", ");
    
  }
}







const main = () => {
  
  
  //สร้างผู้ซื้อ
  const author1 = new Author("Vick", "vick@email.com", "M");      
  const author2 = new Author("Mind", "mind@email.com", "F");

  //สร้างคนสั่งหนังสือ

  const book1 = new Book("กระต่ายกับเต๋า",  [author1, author2], 12.99);



    //โชว์ผลลัพ์ที่เราทำ
  console.log("Name : " + author1.toString());
  console.log("Email : " + author2.toString());
  console.log(book1.toString());

};

main();
