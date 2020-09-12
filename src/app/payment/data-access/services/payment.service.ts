import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Payment } from '../../util/models/payment';
export interface ServerResponse {
  status: number;
  msg: string;
}
@Injectable({
  providedIn: 'root'
})

export class PaymentService {
  public constructor(private readonly http: HttpClient) {}

  private paymentFormData = new BehaviorSubject<{}>({});
  currentPaymentValue = this.paymentFormData.asObservable();
  public paymentInfo = [];

  public addPayment(value): void {
    this.paymentInfo.push({name: value.cardholder, amount: value.amount})
    return this.paymentFormData.next(this.paymentInfo)
  }

  // Save payment 
  public savePayment(paymentDetails: Payment): Observable<ServerResponse> {
    return this.http.post<ServerResponse>(environment.api, paymentDetails);
  }
}
