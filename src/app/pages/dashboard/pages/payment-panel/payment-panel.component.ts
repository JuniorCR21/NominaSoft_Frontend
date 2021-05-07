import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-panel',
  templateUrl: './payment-panel.component.html',
  styleUrls: ['./payment-panel.component.css']
})
export class PaymentPanelComponent implements OnInit {

  date:Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
