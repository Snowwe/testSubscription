import { Component, Input } from '@angular/core';
import { ITariffItem } from '../interfaces/tariffList.interface';

@Component({
  selector: 'app-tariff-item',
  templateUrl: './tariff-item.component.html',
  styleUrls: ['./tariff-item.component.scss'],
})
export class TariffItemComponent {
  @Input() tariffItem: ITariffItem;
}
