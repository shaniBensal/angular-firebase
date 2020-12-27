import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import{X, Trash, Grid, List, RefreshCw, PlusCircle, Edit, ArrowLeft} from 'angular-feather/icons';

const icons = {
  X,
  Trash,
  ArrowLeft,
  Grid,
  List,
  RefreshCw,
  PlusCircle,
  Edit
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule, FeatherModule.pick(icons)
  ],
  exports: [FeatherModule]
})
export class IconsModule { }
