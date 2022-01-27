import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxsModule } from "@ngxs/store";
import { DataCollectionState } from "./store/data-collection.state";

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([DataCollectionState])],
  declarations: [],
})
export class Feature1Module {}
