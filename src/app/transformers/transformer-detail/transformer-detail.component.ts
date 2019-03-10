import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Transformer } from '../transformer.model';
import { TransformerService } from '../transformer.service';

@Component({
  selector: 'app-transformer-detail',
  templateUrl: './transformer-detail.component.html'
})
export class TransformerDetailComponent implements OnInit {
  transformer: Transformer;
  id: number;

  constructor(private transformerService: TransformerService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.transformer = this.transformerService.getTransformer(this.id);
        }
      );
  }

  onEditTransformer() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteTransformer() {
    this.transformerService.deleteTransformer(this.id);
    this.router.navigate(['/transformers']);
  }

}
