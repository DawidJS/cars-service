import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cs-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.less']
})
export class TotalCostComponent {

  @Input() totalCost: number;
  @Output() shownGross: EventEmitter<number> = new EventEmitter<number>();
  // tslint:disable-next-line:no-inferrable-types
  private VAT: number = 1.23;

  showGross(): void {
    this.shownGross.emit(this.totalCost * this.VAT);
  }
}
