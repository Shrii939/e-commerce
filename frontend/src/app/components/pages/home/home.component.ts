import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/shared/Models/itms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  Items: Item[] = [];

  constructor(private itemService: ItemService) {
    this.Items=itemService.getAll();
  }


  ngOnInit(): void {}
}
