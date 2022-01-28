import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataCollection3State } from '../store/data-collection.state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-calendar',
  styleUrls: [],
  templateUrl: './calendar.component.html',
})
export class CalendarComponent {
  constructor(private readonly dataCollection3State: DataCollection3State) {}
}
