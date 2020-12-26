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
  public isList: boolean = true;
  public filterBy: string = '';
  public filteredList: Item[] = [];
  public isAsc: boolean = true;

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

  public filterList(): void {
    if (this.filterBy !== '') {
      let list: Item[] = [...this.list];
      this.filteredList = list.filter(item => {
        var d = new Date(item.Year);
        let year = d.getFullYear().toString();
        if (item.Title.toLowerCase().includes(this.filterBy.toLowerCase()) || year.includes(this.filterBy)) { return item }
      });
    } else { this.filteredList = [] }
  }

  public clearInput(): void {
    this.filterBy = '';
    this.filteredList = [];
  }

  public getDataFromServer(): void {
    this.loadDataEmmiter.emit();
  }

  public onUpdateItem(item: Item): void {
    this.onUpdateItemEmmiter.emit(item);
  }
}
