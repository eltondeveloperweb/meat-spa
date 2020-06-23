import { MenuItem } from "../menu-item/menu-item.model";

export class CartItem {

    constructor(public menuItem: MenuItem,
                public quantity: number = 0){

    }

    value():number{
        return this.menuItem.price * this.quantity
    }

}