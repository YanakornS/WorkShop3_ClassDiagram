class Order {
  constructor(id, customer, items) {
    this.id = id;
    this.customer = customer;
    this.items = items;
  }

  getId() {
    return this.id;
  }

  getCustomer() {
    return this.customer;
  }

  setCustomer(customer) {
    this.customer = customer;
  }

  getItems() {
    return this.items;
  }

  setItems(items) {
    this.items = items;
  }

  getTotalPrice() {
    let total = 0;
    for (const item of this.items) {
      total += item.getPrice() * item.getQuantity();
    }
    return total;
  }

  toString() {
    return `Order[id=${
      this.id
    }, customer=${this.customer.toString()}, items=${this.items
      .map((item) => item.toString())
      .join(", ")}]`;
  }
}

class Customer {
  constructor(id, name, address) {
    this.id = id;
    this.name = name;
    this.address = address;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getAddress() {
    return this.address;
  }

  setAddress(address) {
    this.address = address;
  }

  toString() {
    return `Customer[id=${this.id}, name=${this.name}, address=${this.address}]`;
  }
}

class Item {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getPrice() {
    return this.price;
  }

  setPrice(price) {
    this.price = price;
  }

  getQuantity() {
    return this.quantity;
  }

  setQuantity(quantity) {
    this.quantity = quantity;
  }

  toString() {
    return `Item[id=${this.id}, name=${this.name}, price=${this.price}, quantity=${this.quantity}]`;
  }
}

const main = () => {
  const customer = new Customer(1, "John Doe", "123 Main Street");
  const items = [
    new Item(1, "Product 1", 100, 1),
    new Item(2, "Product 2", 200, 2),
  ];
  const order = new Order(1, customer, items);

  console.log(order.toString()); // "Order[id=1, customer=Customer[id=1, name=John Doe, address=123 Main Street], items=[Item[id=1, name=Product 1, price=100, quantity=1], Item[id=2, name=Product 2, price=200, quantity=2]]]"

  console.log(order.getTotalPrice()); // 500
};
main();
