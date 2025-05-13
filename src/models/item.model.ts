import { IItem } from '../interfaces/item.interface';

export class Item implements IItem{
    id: string;
    name: string;
    count: number;
    dateCreated: Date;
    userId: string;

    constructor(id: string, name: string, count: number, dateCreated: Date, userId: string)
    {
        this.id = id;
        this.count = count;
        this.name = name;
        this.dateCreated = dateCreated
        this.userId = userId
    }
}