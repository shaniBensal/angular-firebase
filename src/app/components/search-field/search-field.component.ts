import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent {
  public filterBy: string = '';
  @Output() public onFilterListEmmiter: EventEmitter<string> = new EventEmitter<string>();
  @Output() public onClearFilterListEmmiter: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  public filterList(): void{
    this.onFilterListEmmiter.emit(this.filterBy);
  }

  public clearInput(): void {
    this.filterBy = '';
    this.onClearFilterListEmmiter.emit();
  }

}
