import { PaymentService } from './../../data-access/services/payment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'payment-lists',
  templateUrl: './payment-lists.component.html',
  styleUrls: ['./payment-lists.component.scss']
})
export class PaymentListsComponent implements OnInit {

  constructor(private data: PaymentService) { }

  public paymentData;

  ngOnInit(): void {
    this.data.currentPaymentValue.subscribe(value => this.paymentData = value);
  }
}
