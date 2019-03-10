import { Expression } from '../shared/expression.model';

export class Transformer {
  public name: string;
  public description: string;
  public imagePath: string;
  public expressions: Expression[];

  constructor(name: string, desc: string, imagePath: string, expressions: Expression[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.expressions = expressions;
  }
}
