import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { UtilService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() public list: Item[];
  @Output() public loadDataEmmiter: EventEmitter<void> = new EventEmitter<void>();
  @Output() public onUpdateItemEmmiter: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() public onDeleteItemEmmiter: EventEmitter<string> = new EventEmitter<string>();
  @Output() public onCreateNewItem: EventEmitter<Item> = new EventEmitter<Item>();
  public isList: boolean = true;
  public filteredList: Item[] = [];
  public isAsc: boolean = true;
  public showAddNewItem: boolean = true;

  constructor(private utilService: UtilService) { }

  ngOnInit() { this.toggleAsc() }

  public toggleAsc(): void {
    if (this.filteredList.length) {
      this.filteredList = this.utilService.sortList(this.isAsc, this.filteredList);
    } else {
      this.list = this.utilService.sortList(this.isAsc, this.list);
    }
    this.isAsc = !this.isAsc;
  }

  public toggleListView() {
    this.isList = !this.isList;
  }

  public filterList(str: string): void {
    if (str !== '') {
      let list: Item[] = [...this.list];
      this.filteredList = list.filter(item => {
        var d = new Date(item.Year);
        let year = d.getFullYear().toString();
        if (item.Title.toLowerCase().includes(str.toLowerCase()) || year.includes(str)) { return item }
      });
    } else { this.filteredList = [] }
  }

  public clearInput(): void {
    this.filteredList = [];
  }

  public getDataFromServer(): void {
    this.loadDataEmmiter.emit();
  }

  public onUpdateItem(item: Item): void {
    this.onUpdateItemEmmiter.emit(item);
  }

  public toggleShowNewItem(): void {
    this.showAddNewItem = !this.showAddNewItem;
  }

  public addNewItem(newItem: Item): void {
    this.onCreateNewItem.emit(newItem);
  }
}
