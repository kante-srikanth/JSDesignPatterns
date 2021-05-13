class UserBuilder {
    constructor(email) {
        this.email = email;
    }

    withName(name) {
        this.name = name;
        return this;
    }

    withAge(age) {
        this.age = age;
        return this;
    }

    withPhone(phoneNum) {
        this.phone = phoneNum;
        return this;
    }

    withAdress(address) {
        this.address = address;
        return this;
    }

    withRole(role) {
        this.role = role;
        return this;
    }

    build() {
        return this;
    }
}

// Execution

var user1 = new UserBuilder("kantesrikanth@gmail.com")
    .withName("Srikanth Kante")
    .withAge(26)
    .withPhone(976093)
    .withAdress("Hyderabad")
    .withRole("employee")
    .build();
var user2 = new UserBuilder("srikanthkante@gmail.com")
    .withName("Srikanth Kante")
    .withAge(35)
    .withRole("manager")
    .build();
console.log(user1);
console.log(user2);

/*

Output: 

user1: 
UserBuilder {email: "kantesrikanth@gmail.com", name: "Srikanth Kante", age: 26, phone: 976093, address: "Hyderabad", …}
address: "Hyderabad"
age: 26
email: "kantesrikanth@gmail.com"
name: "Srikanth Kante"
phone: 976093
role: "employee"

user2:
UserBuilder {email: "srikanthkante@gmail.com", name: "Srikanth Kante", age: 35, role: "manager"}
age: 35
email: "srikanthkante@gmail.com"
name: "Srikanth Kante"
role: "manager"

*/


// Ref: https://medium.com/weekly-webtips/the-builder-design-pattern-a7c9e6429fb7#:~:text=What%20it%20is%20and%20how%20to%20implement%20it%20in%20JavaScript,-Abdul%20Haseeb%20Khan&text=The%20builder%20pattern%20is,to%20create%20a%20single%20object.
