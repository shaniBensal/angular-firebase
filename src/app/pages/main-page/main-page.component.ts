import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public itemList: Item[];
  public selectedKey: string = 'movie';

  constructor(private service: ApiService) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData(): void {
   this.service.getList().subscribe(res => this.itemList = res);
  }

  public updateData(item: Item): void{
    this.service.updateItemById(item);
  }

  public deleteItem(itemId: string): void{
    this.service.deleteItemById(itemId);
  }

  public createNew(item: Item): void {
    this.service.createNewItem(item);
  }

  public setSelectedKey(key: string): void {
    this.selectedKey = key;
  }
}
