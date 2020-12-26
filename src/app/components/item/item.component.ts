import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() public item: Item;
  @Input() public isList: boolean = false;
  @Output() public updateItemEmmiter: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() public onRemoveItemEmmiter: EventEmitter<string> = new EventEmitter<string>();
  public imgSrc: string = 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png';
  public newTitle: string = '';
  public editMode: boolean = false;
  constructor(private toastr: ToastrService) { }

  ngOnInit() {
    if (this.item) {
      this.newTitle = this.item.Title;
      if (this.item.Poster !== 'N/A') {
        fetch(this.item.Poster).then(res => {
          if (res.status == 200) {
            this.imgSrc = this.item.Poster
          }
        })
      }
    }
  }

  public toggleEdit(): void {
    this.editMode = !this.editMode;
    this.newTitle = this.item.Title;
  }

  public updateTitle(): void {
    if (this.newTitle != '') {
      this.item.Title = this.newTitle;
      this.updateItemEmmiter.emit(this.item);
    }
    this.toggleEdit();
  }

  public removeItem(): void {
    this.onRemoveItemEmmiter.emit(this.item.id);

  }
}
