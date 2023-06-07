import {Component, OnInit} from '@angular/core';
import {ItemService} from "../service/item.service";
import {Observable, throwError} from "rxjs";
import {Item} from "../model/item.model";
import {ActivatedRoute} from "@angular/router";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  item$!: Observable<Item>
  itemId?: string;

  constructor(private itemService: ItemService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.itemId = this.activatedRoute.snapshot.paramMap.get('itemId') ?? undefined
    if (this.itemId) {
      this.item$ = this.itemService.getItemById(parseInt(this.itemId)).pipe(
        catchError(error => {
          console.log("Error al cargar los productos de la categoría", error)
          return throwError(() => error);
        }),
      );
    }
  }

  protected readonly parseInt = parseInt;
}






