const prompt = require("prompt-sync")();

//UC1/
//UC//
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

    get firstName() { return this._firstName;}
    set firstName(firstName) {
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(firstNameRegex.test(firstName))
            this._firstName = firstName;
        else throw 'First Letter should contain one upper case and min 3 characters';    
    }

    get lastName() { return this._lastName;}
    set lastName(lastName) {
        let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(lastNameRegex.test(lastName))
            this._lastName = lastName;
        else throw 'Last Name Should have upper case 1st letter and min 3 characters';    
    }

    get city() { return this._city;}
    set city(city) {
        let cityRegex = RegExp('^[A-Za-z]{4,}$');
        if(cityRegex.test(city))
            this._city = city;
        else throw 'City Name Should contain at least 4 characters';    
    }

    get state() { return this._state;}
    set state(state) {
        let stateRegex = RegExp('^[A-Za-z]{4,}$');
        if(stateRegex.test(state))
            this._state = state;
        else throw 'State Name Should contain at least 4 characters';  
    }

    get zip() { return this._zip;}
    set zip(zip) {
        let zipRegex = RegExp('^[0-9]{6}$');
        if(zipRegex.test(zip))
            this._zip = zip;
        else throw 'Zip code Should contain exact 6 digits'; 
    }

    get phone() { return this._phone;}
    set phone(phone) {
        let phoneRegex = RegExp('^[6-9]{1}[0-9]{9}$');
        if(phoneRegex.test(phone))
            this._phone = phone;
        else throw 'Phone Number Should contain exact 10 digits'; 
    }

    get email() { return this._email;}
    set email(email) {
        let emailRegex = RegExp('^[a-z\\+\\-\\_\\.a-z0-9]{3,}\\@[a-z]*\\.[a-z]{1,3}$');
        if(emailRegex.test(email))
            this._email = email;
        else throw 'Email should be in the proper format'; 
    }

    toString(){
        return "[ firstname: "+this.firstName+", lastname: "+this.lastName+", city: "+this.city+", zip: "+this.zip+", phone: "+this.phone+", email: "+this.email + " ]";
    }

}

class Addressbook{

    constructor(){
        this.addressbook = new Array;
    }

    addContactInAB(){
        console.log("**Add A Contact**");
        let firstName = prompt("Enter FirstName: ");
        let lastName = prompt("Enter LastName: ");
        let city = prompt("Enter City: ");
        let state = prompt("Enter State: ");
        let zip = prompt("Enter zip: ");
        let phone = prompt("Enter phone: ");
        let email = prompt("Enter E-mail: ");

        let alreadyExist = false;
        this.addressbook.forEach(contact => {
            if(contact.firstName === firstName && contact.lastName === lastName){
                console.log("Contact already Exist : Cannot add duplicate Entry");
                alreadyExist = true;
            }
        });

        if(alreadyExist == false){
            let contact = new Contact(firstName, lastName, city, state, zip, phone, email);
            this.addressbook.push(contact);
        }
        
    }

    showAddressbook(){
        this.addressbook.forEach(contact => {
            console.log(contact.toString());
        });
    }

    editContactInAddressbook(){
        let firstName = prompt("Enter FirstName Of Contact You Wanna Edit ");
        let contactFound = false;
        this.addressbook.forEach(contact => {
            if(contact.firstName === firstName){
                let firstName = prompt("Enter FirstName: ");
                let lastName = prompt("Enter LastName: ");
                let city = prompt("Enter City: ");
                let state = prompt("Enter State: ");
                let zip = prompt("Enter zip: ");
                let phone = prompt("Enter phone: ");
                let email = prompt("Enter E-mail: ");

                contact.firstName = firstName;
                contact.lastName = lastName;
                contact.city = city;
                contact.state = state;
                contact.zip = zip;
                contact.phone = phone;
                contact.email = email;

                console.log("Contact Edited");
                contactFound = true;
            }
        });
        if(contactFound == false){
            console.log("Contact Not Found");
        }
    }

    deleteContactFromAddressbook(){
        let firstName = prompt("Enter FirstName Of Contact You Wanna delete ");
        let contactExist = false;
        this.addressbook.forEach(contact => {
            if(contact.firstName === firstName){
                contactExist = true;
            }
        });
        if(contactExist == true){
            this.addressbook = this.addressbook.filter(contact => {
                contact.firstName != firstName;
                console.log("Contact Deleted");
            })
        }
        else{
            console.log("Contact not Found");
        }
    }

    countContactsInAB(){
        let count = 0;
        this.addressbook.forEach( contact => {
            contact.toString();
            count++;
        });
        console.log(count+" Contacts are there in this Addressbook");
    }

    searchByCityInAB(){
        let city = prompt("Enter City Of Contact You Wanna Search ");

        let count = 0;
        console.log("The contact of your desired city are:");
        this.addressbook.forEach(contact => {
            if(contact.city === city){
                count++;
                console.log(contact.toString());
            }
        });

        console.log(count+" number Of people Found From This city");
    }


}



let student = new Addressbook();


let exit = false;
while(exit == false){
    let choice = parseInt(prompt("Enter Choice : \n1.add Contact \n2.edit Contact \n3.deleteContact \n4.Show Addressbook \n5.Count Contacts In Addressbook \n6.search Contact by city name\n7.EXIT"));
    switch(choice){
        case 1:
            student.addContactInAB();
            break;
        case 2:
            student.editContactInAddressbook();
            break;
        case 3:
            student.deleteContactFromAddressbook();
            break;
        case 4:
            student.showAddressbook();
            break;
        case 5:
            student.countContactsInAB();
            break;
        case 6:
            student.searchByCityInAB();
            break;
        case 7:
            exit = true;
            console.log("EXIT");
            break;
        default:
            console.log("Invalid Choice");
    }
}
