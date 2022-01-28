import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { DataCollectionState } from './store/data-collection.state';
import { Component1Component } from './component1/component1.component';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([DataCollectionState])],
  declarations: [Component1Component],
})
export class Feature1Module {}
