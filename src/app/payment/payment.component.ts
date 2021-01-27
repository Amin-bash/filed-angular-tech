import { Component, OnInit, OnDestroy } from '@angular/core';
import { Payment } from './util/models/payment';
import { PaymentService } from './data-access/services/payment.service';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit, OnDestroy {

  public constructor(
    private readonly paymentService: PaymentService,
    private readonly router: Router,
    private toastr: ToastrService
  ) {}

  private readonly _destroy$ = new Subject();
  public showProgress: boolean = false;

  public ngOnInit(): void {}

  // Submit the form data
  public submit(data: Payment): void {
    this.showProgress = true;
    this.paymentService
      .savePayment(data)
      .pipe(takeUntil(this._destroy$), debounceTime(450))
      .subscribe((res) => {
        if (res.status === 200) {
          this.showProgress = false;
          this.toastr.success("* Successfully reached api, now you will redirect to home page", "Success")
          setTimeout(() => {
            this.router.navigate(['/payment-list']);
          }, 2500);
        }
      }, error => {
        this.showProgress = false;
        this.toastr.error("Something went wrong, Please try again later", "Error")
      });
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
