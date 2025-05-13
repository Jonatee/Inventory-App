"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    id;
    name;
    count;
    dateCreated;
    userId;
    constructor(id, name, count, dateCreated, userId) {
        this.id = id;
        this.count = count;
        this.name = name;
        this.dateCreated = dateCreated;
        this.userId = userId;
    }
}
exports.Item = Item;
