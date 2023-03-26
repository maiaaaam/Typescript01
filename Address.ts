export class Address {
    private street: string;
    private city: string;
    private zipCode: string;
    private country: string;
  
    constructor(street: string, city: string, zipCode: string, country: string) {
      this.street = street;
      this.city = city;
      this.zipCode = zipCode;
      this.country = country;
    }
  
    public getAddress(): string {
      return `${this.street}, ${this.city}, ${this.zipCode}, ${this.country}`;
    }
  }
  