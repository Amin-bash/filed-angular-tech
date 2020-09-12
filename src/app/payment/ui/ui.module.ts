import { DataAccessModule } from './../data-access/data-access.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentListsComponent } from './payment-lists/payment-lists.component';

@NgModule({
  declarations: [PaymentFormComponent, PaymentListsComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DataAccessModule],
  exports: [PaymentFormComponent, PaymentListsComponent],
  providers: [DataAccessModule]
})
export class UiModule {}
