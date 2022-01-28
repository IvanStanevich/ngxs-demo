import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataCollectionState } from '../store/data-collection.state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-component-1',
  templateUrl: './component1.component.html',
})
export class Component1Component {
  constructor(private readonly dataCollectionState: DataCollectionState) {}
}
