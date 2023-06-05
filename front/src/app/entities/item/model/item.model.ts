export class Item {
  id: number|undefined;
  name: string;
  price: number;
  discount?:number;
  categoryId?:number;
  categoryName?:string;
  description?: string;
  image?: string;
  favorite?:boolean;



  constructor(id: number | undefined, name: string, price: number, categoryId?: number, categoryName?: string, description?: string, image?: string,
  discount?:number,favorite?:boolean) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.categoryId = categoryId;
    this.categoryName = categoryName;
    this.description = description;
    this.image = image;
    this.discount = discount;
    this.favorite = favorite;
  }
}
