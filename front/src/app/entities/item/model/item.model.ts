export class Item {
  id: number|undefined;
  name: string;
  price: number;
  discount?:number;
  categoryId?:number;
  categoryName?:string;
  description?: string;
  image?: string;
  imageBg?:string;
  stock: number;





  constructor(id: number | undefined, name: string, price: number,stock:number, categoryId?: number, categoryName?: string, description?: string, image?: string,
  discount?:number,imageBg?:string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.categoryId = categoryId;
    this.categoryName = categoryName;
    this.description = description;
    this.image = image;
    this.discount = discount;
    this.imageBg = imageBg
    this.stock = stock;

  }
}
