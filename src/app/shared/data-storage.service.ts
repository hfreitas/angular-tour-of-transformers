
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { TransformerService } from '../modules/transformers/transformer.service';
import { Transformer } from '../modules/transformers/transformer.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private transformerService: TransformerService,
              private authService: AuthService) {
  }

  storetransformers() {
    const token = this.authService.getToken();

    return this.http.put('https://angular-tour-of-transformers.firebaseio.com/transformers.json?auth=' + token, this.transformerService.getTransformers());
  }

  gettransformers() {
    const token = this.authService.getToken();

    this.http.get('https://angular-tour-of-transformers.firebaseio.com/transformers.json?auth=' + token).pipe(
      map(
        (response: Response) => {
          const transformers: Transformer[] = response.json();
          for (let transformer of transformers) {
            if (!transformer['expressions']) {
              transformer['expressions'] = [];
            }
          }
          return transformers;
        }
      ))
      .subscribe(
        (transformers: Transformer[]) => {
          this.transformerService.setTransformers(transformers);
        }
      );
  }
}
