export class Mail {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  public getEmail(): string {
    return this.email;
  }
}
