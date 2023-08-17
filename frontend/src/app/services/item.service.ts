import { Injectable } from '@angular/core';
import { Item } from '../shared/Models/itms';
import { Item_Array } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }
  
  getAll():Item[] {
    return Item_Array;
  }

  getAllFoodsBySearchTerm(searchTerm:string){
    return this.getAll().filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }


}
