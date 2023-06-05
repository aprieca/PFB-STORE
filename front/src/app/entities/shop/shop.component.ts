import {Component, OnInit} from '@angular/core';
import {ItemService} from "../item/service/item.service";
import {Item} from "../item/model/item.model";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  items$?: Observable<Item[]>

  constructor(private itemService: ItemService) {

  }

  ngOnInit(): void {
    this.getItemsByCategory()
  }

  getItemsByCategory() {
    this.items$ = this.itemService.getAllItemsByCategoryId(1).pipe(
      catchError(error => {
        console.log("Error al cargar los productos de la categoría", error)
        return throwError(() => error);
      }),
    )
  }
}
