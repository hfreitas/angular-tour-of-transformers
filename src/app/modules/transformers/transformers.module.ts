import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TransformersRoutingModule } from './transformers-routing.module';

import { TransformersComponent } from './components/transformers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TransformerStartComponent } from './components/transformer-start/transformer-start.component';
import { TransformerListComponent } from './components/transformer-list/transformer-list.component';
import { TransformerEditComponent } from './components/transformer-edit/transformer-edit.component';
import { TransformerDetailComponent } from './components/transformer-detail/transformer-detail.component';
import { TransformerItemComponent } from './components/transformer-list/transformer-item/transformer-item.component';


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
