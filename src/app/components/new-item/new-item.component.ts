import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {
  public updatePoster: boolean = false;
  private defaultSrc: string = 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png';
  @Input() public isList: boolean = false;
  @Input() public itemType: string = '';
  @Output() public newItemEmmiter: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() public closeNewItemEmmiter: EventEmitter<void> = new EventEmitter<void>();
  public newItem: Item = {
    id: '',
    Poster: '',
    Title: '',
    imdbID: '',
    Type: '',
    Year: new Date().getFullYear()
  }

  constructor(private alertService: ToastrService) { }

  ngOnInit() {
    this.newItem.Type = this.itemType;
    this.newItem.Poster = this.defaultSrc;
  }

  public saveNewItem(): void {
    if (this.newItem.Year < 1900) this.newItem.Year = new Date().getFullYear();
    if (this.newItem.Poster == 'N/A' || '') this.newItem.Poster = this.defaultSrc;
    this.newItemEmmiter.emit(this.newItem);
  }

  public imageNotFound(): void {
    this.alertService.error('URL not valid');
    this.newItem.Poster = this.defaultSrc;
  }
}
