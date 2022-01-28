import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { DataCollection2State } from './store/data-collection.state';
import { Feature3SharedModule } from '../feature3-shared/feature3.module';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([DataCollection2State]),
    Feature3SharedModule,
  ],
  declarations: [],
})
export class Feature2Module {}
