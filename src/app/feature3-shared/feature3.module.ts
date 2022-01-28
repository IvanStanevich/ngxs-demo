import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { DataCollection3State } from './store/data-collection.state';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([DataCollection3State])],
  declarations: [CalendarComponent],
})
export class Feature3SharedModule {}
