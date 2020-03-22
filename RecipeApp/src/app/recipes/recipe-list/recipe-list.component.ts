import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Name',
      'This is a test description... 1',
      'https://media1.s-nbcnews.com/i/newscms/2018_33/1361101/omelet-eggs-mushroom-breakfast-stock-recipe-today-180817_18f5fc8ad9319ab76064b65e28429964.jpg'
    ),
    new Recipe(
      'Test Name',
      'This is a test description... 2',
      'https://media1.s-nbcnews.com/i/newscms/2018_33/1361101/omelet-eggs-mushroom-breakfast-stock-recipe-today-180817_18f5fc8ad9319ab76064b65e28429964.jpg'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
