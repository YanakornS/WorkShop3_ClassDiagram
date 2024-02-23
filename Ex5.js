class Customer {
    constructor(name) {
        this.name = name;
        this.member = false;
        this.memberType = null;
    }

    getName() {
        return this.name;
    }

    isMember() {
        return this.member;
    }

    setMember(member) {
        this.member = member;
    }

    getMemberType() {
        return this.memberType;
    }

    setMemberType(type) {
        this.memberType = type;
    }

    toString() {
        return `Customer: ${this.name}, Member: ${this.member}, Member Type: ${this.memberType}`;
    }
}

class Visit {
    constructor(customer, date, serviceExpense, productExpense) {
        this.customer = customer;
        this.date = date;
        this.serviceExpense = serviceExpense;
        this.productExpense = productExpense;
    }

    getName() {
        return this.customer.getName();
    }

    getServiceExpense() {
        return this.serviceExpense;
    }

    setServiceExpense(expense) {
        this.serviceExpense = expense;
    }

    getProductExpense() {
        return this.productExpense;
    }

    setProductExpense(expense) {
        this.productExpense = expense;
    }

    getTotalExpense() {
        return this.serviceExpense + this.productExpense;
    }

    toString() {
        return `Visit: ${this.customer.getName()}, Date: ${this.date}, Service Expense: ${this.serviceExpense}, Product Expense: ${this.productExpense}, Total Expense: ${this.getTotalExpense()}`;
    }
}

class DiscountRate {
    static serviceDiscountPremium = 0.2;
    static serviceDiscountGold = 0.15;
    static serviceDiscountSilver = 0.1;
    static productDiscountPremium = 0.1;
    static productDiscountGold = 0.1;
    static productDiscountSilver = 0.1;

    static getServiceDiscountRate(type) {
        switch (type) {
            case "Premium":
                return DiscountRate.serviceDiscountPremium;
            case "Gold":
                return DiscountRate.serviceDiscountGold;
            case "Silver":
                return DiscountRate.serviceDiscountSilver;
            default:
                return 0;
        }
    }

    static getProductDiscountRate(type) {
        switch (type) {
            case "Premium":
                return DiscountRate.productDiscountPremium;
            case "Gold":
                return DiscountRate.productDiscountGold;
            case "Silver":
                return DiscountRate.productDiscountSilver;
            default:
                return 0;
        }
    }
}

const main = () => {

    const customer1 = new Customer("YanakornS");
    customer1.setMember(true);
    customer1.setMemberType("Premium");

    const visit1 = new Visit(customer1, new Date(), 3000, 800);

    console.log(customer1.toString());
    console.log(visit1.toString());

    const discountRate = DiscountRate.getServiceDiscountRate(customer1.getMemberType());
    console.log(`Service discount rate: ${discountRate}`);



}
main();