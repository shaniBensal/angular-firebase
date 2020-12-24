import { Injectable } from "@angular/core";
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})

export class UtilService {
  public sortList(isAsc: boolean, list: Item[]): Item[] {
    if(!!isAsc){
      return list.sort((a,b) => (a.Title > b.Title ? 1 : -1));
    } else {
      return list.sort((a,b) => (a.Title > b.Title ? -1 : 1));
    }
  }

  public arrangeData(itemList: Item[]): any {
    let arr = [...itemList];
    let sortedList = {};
    while (arr.length > 0) {
      let key = arr[0].Type;
      let filteredArr = arr.filter(item => { if (item.Type == key) return item });
      sortedList[arr[0].Type] = filteredArr;
      arr = arr.filter(item => item.Type !== key);
    }
    return sortedList;
  }
}
