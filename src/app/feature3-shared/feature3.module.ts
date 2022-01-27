import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxsModule } from "@ngxs/store";
import { DataCollection3State } from "./store/data-collection.state";

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([DataCollection3State])],
  declarations: [],
})
export class Feature3SharedModule {}
