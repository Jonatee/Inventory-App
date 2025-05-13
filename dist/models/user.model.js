"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    id;
    firstname;
    lastname;
    email;
    password;
    dateCreated;
    constructor(id, firstname, lastname, email, password, dateCreated) {
        this.dateCreated = dateCreated;
        this.email = email;
        this.firstname = firstname;
        this.id = id;
        this.lastname = lastname;
        this.password = password;
    }
}
exports.User = User;
