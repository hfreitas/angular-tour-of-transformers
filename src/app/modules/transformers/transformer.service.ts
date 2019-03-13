import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Transformer } from './transformer.model';
import { Expression } from 'src/app/shared/expression.model';


@Injectable()
export class TransformerService {
  transformersChanged = new Subject<Transformer[]>();

  private transformers: Transformer[] = [
    new Transformer(
      'Pipes',
      'Function: Warrior',
      'https://static.tvtropes.org/pmwiki/pub/images/pipes_4751.jpg',
      [
        new Expression('Best', 'One Beings junk is anothers art')
      ]),
    new Transformer('Sandstorm',
      'Function: Recconnaissance',
      'https://static.tvtropes.org/pmwiki/pub/images/sandstorm_3343.jpg',
      [
        new Expression('Best', 'When the smoke clears, i have cleared out')
      ]),
      new Transformer('Ultra Magnus',
      'Function: City Commander',
      'https://static.tvtropes.org/pmwiki/pub/images/ultra_magnus_7404.jpg',
      [
        new Expression('Best', 'Consistency is Victory')
      ])
  ];

  setTransformers(transformers: Transformer[]) {
    this.transformers = transformers;
    this.transformersChanged.next(this.transformers.slice());
  }

  getTransformers() {
    return this.transformers.slice();
  }

  getTransformer(index: number) {
    return this.transformers[index];
  }

  addTransformer(transformer: Transformer) {
    this.transformers.push(transformer);
    this.transformersChanged.next(this.transformers.slice());
  }

  updateTransformer(index: number, newtransformer: Transformer) {
    this.transformers[index] = newtransformer;
    this.transformersChanged.next(this.transformers.slice());
  }

  deleteTransformer(index: number) {
    this.transformers.splice(index, 1);
    this.transformersChanged.next(this.transformers.slice());
  }
}
