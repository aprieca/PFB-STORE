export class Favorite {

  id?:number|undefined;
  itemId:number;
  userId:number;


  constructor(id: number | undefined, itemId: number, userId: number) {
    this.id = id;
    this.itemId = itemId;
    this.userId = userId;
  }
}
