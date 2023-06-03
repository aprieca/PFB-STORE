export class User {
  username:string;
  firstname: string;
  lastname: string;
  email: string;
  phone:number | null;
  password: string;
  passwordrepeat: string;
  role:string

  constructor(username: string, firstname: string, lastname: string, email: string, phone: number|null , password: string,passwordrepeat:string,role:string) {
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.passwordrepeat = passwordrepeat;
    this.role = role;
  }
}
