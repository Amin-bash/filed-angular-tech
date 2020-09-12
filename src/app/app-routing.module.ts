import { PaymentListsComponent } from './payment/ui/payment-lists/payment-lists.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'payment', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule)}, 
  {path: 'payment-list', component: PaymentListsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
