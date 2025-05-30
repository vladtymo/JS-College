const user = {
    name: "John Doe",
    login: "johndoe",
    password: "securepassword",
    email: "example@gmial.com",
    age: 30,
    lastActive: new Date(2025, 4, 30),
}

const order = {
    number: 101,
    date: new Date(2025, 4, 30),
    total: 250.75,
    items: ["iPhone X", "Samsung G56", "Xiaomi R4"],
    address: {
        city: "New York",
        street: "5th Avenue",
        house: 10,
        apartment: 20,
    },

    print() {
        console.log(`Order #${this.number} on ${this.date.toLocaleDateString()} for $${this.total}`);
        console.log("Items:", this.items.join(", "));
        console.log("Shipping to:", `${this.address.city}, ${this.address.street} ${this.address.house}, Apt. ${this.address.apartment}`);
    }
}

order.total = 300.50; // Update total
order.print();