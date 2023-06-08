export class CartItem {


  itemId:number;
  userId:number;
  quantity:number;
  image:string;
  name:string;
  categoryName:string;
  price:number;
  id?:number;


  constructor(itemId: number, userId: number, quantity: number, image: string, name: string, categoryName: string, price: number, id?: number) {
    this.itemId = itemId;
    this.userId = userId;
    this.quantity = quantity;
    this.image = image;
    this.name = name;
    this.categoryName = categoryName;
    this.price = price;
    this.id = id;
  }
}
