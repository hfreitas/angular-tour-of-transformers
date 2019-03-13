import { Component, OnInit, Input } from '@angular/core';
import { Transformer } from '../../../transformer.model';

@Component({
  selector: 'app-transformer-item',
  templateUrl: './transformer-item.component.html',
  styleUrls: ['./transformer-item.component.css']
})
export class TransformerItemComponent implements OnInit {
  @Input() transformer: Transformer;
  @Input() index: number;

  ngOnInit() {
  }
}
