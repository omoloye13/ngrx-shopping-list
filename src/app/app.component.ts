import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/models/app-state.models';
import { ShoppingItem } from './store/models/shopping-list.models';
import { AddItemAction, DeleteItemAction } from './store/actions/shopping-list.actions';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 constructor(private store: Store<AppState>) { }
 shoppingItems: Observable<Array<ShoppingItem>>;
 newShoppingItem: ShoppingItem = { id: '', name: '' }
 ngOnInit() {
   this.shoppingItems = this.store.select(store => store.shopping);
 }
 addItem() {
  this.newShoppingItem.id = uuid();

    this.store.dispatch(new AddItemAction(this.newShoppingItem));

    this.newShoppingItem = { id: '', name: '' };
  }
  deleteItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }
}
