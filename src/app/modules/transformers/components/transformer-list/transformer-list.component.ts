import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TransformerService } from '../../transformer.service';
import { Transformer } from '../../transformer.model';


@Component({
  selector: 'app-transformer-list',
  templateUrl: './transformer-list.component.html',
  styleUrls: ['./transformer-list.component.css']
})
export class TransformerListComponent implements OnInit, OnDestroy {
  transformers: Transformer[];
  subscription: Subscription;

  constructor(private transformerService: TransformerService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.transformerService.transformersChanged
      .subscribe(
        (transformers: Transformer[]) => {
          this.transformers = transformers;
        }
      );
    this.transformers = this.transformerService.getTransformers();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
