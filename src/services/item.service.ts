import { Item } from "../models/item.model";
import { IItem } from "../interfaces/item.interface";


export class ITemService {
  async createItem(data: IItem): Promise<Item> {
    try {
      return new Item(
        "hhh-hythnuinh4hy-hntj",
        "Biscuits",
        10,
        new Date(),
        "njgbhngmnt-hrhjrkbyergu"
      );
    } catch (error) {
      throw new Error(`Failed to Create item: ${error}`);
    }
  }
    async getItem(name: string): Promise<Item> {
        let nameOfItem: string = "Biscuits";
        if (name == nameOfItem) {
            try {
                return new Item(
                    "hhh-hythnuinh4hy-hntj",
                    nameOfItem,
                    10,
                    new Date(),
                    "njgbhngmnt-hrhjrkbyergu"
                );
            } catch (error) {
                throw new Error(`Failed to Create item: ${error}`);
            }
        }
        return {} as Item;
  }
}