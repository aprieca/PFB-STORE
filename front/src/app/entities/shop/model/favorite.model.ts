export class Favorite {

  id?:string|undefined;
  itemId:string;
  userId:string;


  constructor(id: string | undefined, itemId: string, userId: string) {
    this.id = id;
    this.itemId = itemId;
    this.userId = userId;
  }
}
