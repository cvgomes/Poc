import { Injectable } from '@angular/core';
import { Grocery } from '../models/grocery';
import { GROCERIES } from '../mock-groceries';

@Injectable()
export class GroceryService {
    getGroceries(): Promise<Grocery[]> {
        return Promise.resolve(GROCERIES);
    }
}