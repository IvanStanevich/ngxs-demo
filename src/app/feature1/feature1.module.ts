import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([])],
  declarations: [],
})
export class Feature1Module {}
