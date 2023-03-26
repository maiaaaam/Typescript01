import { Mail } from './Mail';
import { Address } from './Address';
import { PhoneNumber } from './PhoneNumber';

class Person {
  private id: number;
  private name: string;
  private email: Mail;
  private address: Address;
  private phone: PhoneNumber;

  constructor(id: number, name: string, email: Mail, address: Address, phone: PhoneNumber) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): Mail {
    return this.email;
  }

  public getAddress(): Address {
    return this.address;
  }

  public getPhone(): PhoneNumber {
    return this.phone;
  }

  public setAddress(address: Address): void {
    this.address = address;
  }

  public setEmail(email: Mail): void {
    this.email = email;
  }

  public setPhone(phone: PhoneNumber): void {
    this.phone = phone;
  }
}

// Create some Person objects
const person1 = new Person(1, 'John Doe', new Mail('john.doe@example.com'), new Address('123 Main St', 'Anytown', '12345', 'USA'), new PhoneNumber('555-123-4567'));
const person2 = new Person(2, 'Jane Smith', new Mail('jane.smith@example.com'), new Address('456 Oak St', 'Sometown', '54321', 'USA'), new PhoneNumber('555-987-6543'));
const person3 = new Person(3, 'Bob Johnson', new Mail('bob.johnson@example.com'), new Address('789 Elm St', 'Otherplace', '67890', 'USA'), new PhoneNumber('555-555-5555'));

// Modify the information for person1 by searching by ID
const targetId = 1;

if (person1.getId() === targetId) {
  const newAddress = new Address('456 New St', 'Newtown', '67890', 'USA');
  const newEmail = new Mail('john.doe@newemail.com');
  const newPhone = new PhoneNumber('555-444-1234');

  person1.setAddress(newAddress);
  person1.setEmail(newEmail);
  person1.setPhone(newPhone);
}

// Log the updated information for all Person objects
console.log(person1.getId(), person1.getName(), person1.getEmail().getEmail(), person1.getAddress().getAddress(), person1.getPhone().getPhoneNumber());
console.log(person2.getId(), person2.getName(), person2.getEmail().getEmail(), person2.getAddress().getAddress(), person2.getPhone().getPhoneNumber());
console.log(person3.getId(), person3.getName(), person3.getEmail().getEmail(), person3.getAddress().getAddress(), person3.getPhone().getPhoneNumber());
