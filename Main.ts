import { Mail } from './Mail';
import { Address } from './Address';
import { PhoneNumber } from './PhoneNumber';

class Client {
  private name: string;
  private email: Mail;
  private address: Address;
  private phone: PhoneNumber;

  constructor(name: string, email: Mail, address: Address, phone: PhoneNumber) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
  }

  public getClientInfo(): string {
    return `Name: ${this.name} | Email: ${this.email.getEmail()} | Address: ${this.address.getAddress()} | Phone Number: ${this.phone.getPhoneNumber()}`;
  }
}

const client1 = new Client('John Doe', new Mail('john.doe@example.com'), new Address('123 Main St', 'Anytown', '12345', 'USA'), new PhoneNumber('555-123-4567'));
const client2 = new Client('Jane Smith', new Mail('jane.smith@example.com'), new Address('456 Oak St', 'Sometown', '54321', 'USA'), new PhoneNumber('555-987-6543'));
const client3 = new Client('Bob Johnson', new Mail('bob.johnson@example.com'), new Address('789 Elm St', 'Otherplace', '67890', 'USA'), new PhoneNumber('555-555-5555'));

console.log(client1.getClientInfo());
console.log(client2.getClientInfo());
console.log(client3.getClientInfo());
