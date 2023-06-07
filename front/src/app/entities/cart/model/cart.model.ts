export class CartItem {

  id?:number;
  itemId:number;
  userId:number;
  quantity:number;

  constructor(itemId: number, userId: number, quantity: number,id?: number) {
    this.id = id;
    this.itemId = itemId;
    this.userId = userId;
    this.quantity = quantity;
  }
}
