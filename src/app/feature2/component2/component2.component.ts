import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataCollection2State } from '../store/data-collection.state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-component-2',
  templateUrl: './component2.component.html',
})
export class Component2Component {
  constructor(private readonly dataCollection2State: DataCollection2State) {}
}
