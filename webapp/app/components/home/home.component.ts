import { Component } from '@angular/core';
import { Grocery } from '../../models/grocery';
import { GroceryService } from '../../services/grocery.service';
import { OnInit } from '@angular/core';

@Component({
    providers: [
        GroceryService
    ],
    templateUrl: 'app/components/home/home.template.html'
})
export class HomeComponent implements OnInit {

    constructor(private groceryService: GroceryService) {}

    title = 'Groceries';
    groceries: Grocery[];

    selectedGrocery: Grocery;

    onSelect(grocery: Grocery): void {
        this.selectedGrocery = grocery;
    }

    getGroceries(): void {
        this.groceryService.getGroceries().then(groceries => this.groceries = groceries);
    }

    ngOnInit(): void {
        this.getGroceries()
    }

}
