import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TransformersRoutingModule } from './transformers-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TransformersComponent } from './transformers.component';
import { TransformerStartComponent } from './transformer-start/transformer-start.component';
import { TransformerListComponent } from './transformer-list/transformer-list.component';
import { TransformerEditComponent } from './transformer-edit/transformer-edit.component';
import { TransformerDetailComponent } from './transformer-detail/transformer-detail.component';
import { TransformerItemComponent } from './transformer-list/transformer-item/transformer-item.component';

@NgModule({
  declarations: [
    TransformersComponent,
    TransformerStartComponent,
    TransformerListComponent,
    TransformerEditComponent,
    TransformerDetailComponent,
    TransformerItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TransformersRoutingModule,
    SharedModule
  ]
})
export class TransformersModule {}
