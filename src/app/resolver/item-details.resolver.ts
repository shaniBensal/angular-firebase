import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
// import { AlertifyService } from '../_service/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Item } from '../models/item.model';
import { ApiService } from '../services/api.service';

@Injectable()

export class ItemDetailsResolver implements Resolve<Item> {
  constructor(private service: ApiService, private router: Router){}
  resolve(route: ActivatedRouteSnapshot): Observable<Item>{
    let itemId: string = route.paramMap.get('id');

    return this.service.getItemById(itemId).pipe(catchError(err => {
      // this.notifications.error('problem retriving your data');
      this.router.navigate(['/']);
      return of (null);
    }))
  }
}
