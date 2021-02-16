import { ShoppingItem } from './shopping-list.models';

export interface AppState {
  readonly shopping: Array<ShoppingItem>
}