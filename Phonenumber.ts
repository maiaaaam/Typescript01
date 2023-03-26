export class PhoneNumber {
    private number: string;
  
    constructor(number: string) {
      this.number = number;
    }
  
    public getPhoneNumber(): string {
      return this.number;
    }
  }
  