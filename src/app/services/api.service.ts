import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Item } from '../models/item.model';
import *  as  data from './data.json';
import { UtilService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private collectionName: string = 'data-list';

  constructor(private fireService: AngularFirestore, private utilService: UtilService, private toastr: ToastrService) { }

  public initiallizeDb(): any {
    data["results"].forEach(item => this.fireService.collection(this.collectionName).doc().set(item))
  }

  public getList(): any {
    return this.fireService.collection(this.collectionName).snapshotChanges().pipe(map(data => {
      if (!!data.length) {
        let itemList = data.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data() as {}
          } as Item
        });
        return this.utilService.arrangeData(itemList);
      } else {
        return this.initiallizeDb();
      }
    }
    ));
  }

  public getItemById(itemId): Observable<any> {
    return this.fireService.collection(this.collectionName).doc(itemId).get().pipe(map(res => {
      const item = res.data() as Item;
      return item;
    })
    )
  };

  public updateItemById(updatedItem: Item) {
    return this.fireService.collection(this.collectionName).doc(updatedItem.id).update(updatedItem);
  }

  public deleteItemById(itemId: string) {
    return this.fireService.collection(this.collectionName).doc(itemId).delete();
  }

  public createNewItem(item: Item) {
    return this.fireService.collection(this.collectionName).add(item).then((docRef) => {
      let itemWhithId: Item = item;
      itemWhithId.id = docRef.id;
      this.updateItemById(itemWhithId);
    })
      .catch((error) => {
        console.error("Error finding document: ", error);
      });
  }
}
