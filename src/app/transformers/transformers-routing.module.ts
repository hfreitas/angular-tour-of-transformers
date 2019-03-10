import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { TransformersComponent } from './transformers.component';
import { TransformerStartComponent } from './transformer-start/transformer-start.component';
import { TransformerEditComponent } from './transformer-edit/transformer-edit.component';
import { TransformerDetailComponent } from './transformer-detail/transformer-detail.component';

const transformersRoutes: Routes = [
  { path: '', component: TransformersComponent, children: [
    { path: '', component: TransformerStartComponent },
    { path: 'new', component: TransformerEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: TransformerDetailComponent },
    { path: ':id/edit', component: TransformerEditComponent, canActivate: [AuthGuard] },
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(transformersRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class TransformersRoutingModule {}
