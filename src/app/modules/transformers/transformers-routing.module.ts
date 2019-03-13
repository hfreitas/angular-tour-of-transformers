import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransformersComponent } from './components/transformers.component';
import { TransformerStartComponent } from './components/transformer-start/transformer-start.component';
import { TransformerEditComponent } from './components/transformer-edit/transformer-edit.component';
import { TransformerDetailComponent } from './components/transformer-detail/transformer-detail.component';
import { AuthGuard } from 'src/app/auth/auth-guard.service';



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
