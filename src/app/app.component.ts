import { Component } from '@angular/core';
import { ITariffItem } from './interfaces/tariffList.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  mainTitle = 'Успейте оформить подписку со скидкой';
  tariffList: ITariffItem[] = [
    {
      id: 1,
      period: '1 месяц',
      title: 'Для тех, кто пробует',
      price: '299 ₽',
      oldPrice: '499 ₽',
      periodOfPrice: 'в месяц',
      buttonTitle: 'Начать 7 дней бесплатно',
      discount: '',
      description: 'Ежемесячная оплата',
    },
    {
      id: 2,
      period: '1 год',
      title: 'Для тех, кто настроен серьезно',
      price: '249 ₽',
      oldPrice: '499 ₽',
      periodOfPrice: 'в месяц',
      buttonTitle: 'Купить подписку',
      discount: '50%',
      description: 'При оплате 2990 ₽ за год',
    },
    {
      id: 3,
      period: '50 лет',
      title: 'Для тех, кто ищет максимальную выгоду',
      price: '41 ₽',
      oldPrice: '499 ₽',
      periodOfPrice: 'в месяц',
      buttonTitle: 'Купить подписку',
      discount: '92%',
      description: 'При оплате 24 990 ₽ навсегда',
    },
  ];
}
