export class User {
  username:string;
  firstname: string;
  lastname: string;
  email: string;
  phone:number | null;
  password: string;
  role:string

  constructor(username: string, firstname: string, lastname: string, email: string, phone: number|null , password: string,role:string) {
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.role = role;
  }
}
