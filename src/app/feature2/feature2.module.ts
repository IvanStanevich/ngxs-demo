import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxsModule } from "@ngxs/store";
import { DataCollection2State } from "./store/data-collection.state";

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([DataCollection2State])],
  declarations: [],
})
export class Feature2Module {}
