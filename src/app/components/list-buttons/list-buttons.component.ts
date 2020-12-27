import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-buttons',
  templateUrl: './list-buttons.component.html',
  styleUrls: ['./list-buttons.component.scss']
})
export class ListButtonsComponent implements OnInit {
  @Input() public isList: boolean;
  @Input() public isAsc: boolean;
  @Input() public addBtn: boolean = true;
  @Output() public onToggleViewEmmiter: EventEmitter<void> = new EventEmitter<void>();
  @Output() public onToggleAscEmmiter: EventEmitter<void> = new EventEmitter<void>();
  @Output() public onRefreshEmmiter: EventEmitter<void> = new EventEmitter<void>();
  @Output() public onAddNewEmmiter: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  public toggleView(): void {
    this.onToggleViewEmmiter.emit();
  }

  public toggleAsc(): void {
    this.onToggleAscEmmiter.emit();
  }

  public refreshList(): void {
    this.onRefreshEmmiter.emit();
  }

  public addNew(): void {
    this.onAddNewEmmiter.emit();
  }

}
