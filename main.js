const prompt = require("prompt-sync")();

// UC1
class Contact{

    constructor(firstName, lastName, city, state, zip, phone, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    toString(){
        return "firstname: "+this.firstName+" lastname: "+this.lastName+" city: "+this.city+" zip: "+this.zip+" phone: "+this.phone+" email: "+this.email;
    }

}

class Addressbook{

    constructor(){
        this.addressbook = new Array;
    }

    addContactInAB(){
        let firstName = prompt("Enter FirstName: ");
        let lastName = prompt("Enter LastName: ");
        let city = prompt("Enter City: ");
        let state = prompt("Enter State: ")
        let zip = prompt("Enter zip: ")
        let phone = prompt("Enter phone: ")
        let email = prompt("Enter E-mail: ")
        let contact = new Contact(firstName, lastName, city, state, zip, phone, email);
        addressbook.push(contact);
    }

    showAddressbook(){
        addressbook.forEach(Contact.toString)
    }
}

