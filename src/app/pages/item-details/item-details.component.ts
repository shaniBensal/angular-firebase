import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  public selectedItem: Item;
  public imgSrc: string = 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png';
  constructor(private actRoute: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
    this.actRoute.data.subscribe((data) => {
      this.selectedItem = data.item;
      fetch(this.selectedItem.Poster).then(res => {
        if (res.status == 200) {
          this.imgSrc = this.selectedItem.Poster
        }
      }, err=>{
        this.toastr.error(err)
      });
    })
  }

}
