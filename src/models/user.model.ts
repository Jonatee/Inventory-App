import { IUser } from '../interfaces/user.interface';

export class User implements IUser{
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    dateCreated: Date;

    constructor(id: string, firstname: string, lastname: string, email: string, password: string, dateCreated: Date)
    {
        this.dateCreated = dateCreated;
        this.email = email;
        this.firstname = firstname;
        this.id = id;
        this.lastname = lastname;
        this.password = password;
    }

}