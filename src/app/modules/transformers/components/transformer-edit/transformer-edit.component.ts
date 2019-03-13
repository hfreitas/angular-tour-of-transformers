import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { TransformerService } from '../../transformer.service';



@Component({
  selector: 'app-transformers-edit',
  templateUrl: './transformer-edit.component.html',
  styleUrls: ['./transformer-edit.component.css']
})
export class TransformerEditComponent implements OnInit {
  id: number;
  editMode = false;
  transformerForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private transformerService: TransformerService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    // const newtransformer = new transformer(
    //   this.transformerForm.value['name'],
    //   this.transformerForm.value['description'],
    //   this.transformerForm.value['imagePath'],
    //   this.transformerForm.value['ingredients']);
    if (this.editMode) {
      this.transformerService.updateTransformer(this.id, this.transformerForm.value);
    } else {
      this.transformerService.addTransformer(this.transformerForm.value);
    }
    this.onCancel();
  }

  onAddExpression() {
    (<FormArray>this.transformerForm.get('expressions')).push(
      new FormGroup({
        'title': new FormControl(null, Validators.required),
        'description': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteExpression(index: number) {
    (<FormArray>this.transformerForm.get('expressions')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  getControls() {
    return (<FormArray>this.transformerForm.get('expressions')).controls;
  }

  private initForm() {
    let transformerName = '';
    let transformerImagePath = '';
    let transformerDescription = '';
    let transformerExpressions = new FormArray([]);

    if (this.editMode) {
      const transformer = this.transformerService.getTransformer(this.id);
      transformerName = transformer.name;
      transformerImagePath = transformer.imagePath;
      transformerDescription = transformer.description;
      if (transformer['expressions']) {
        for (let expression of transformer.expressions) {
          transformerExpressions.push(
            new FormGroup({
              'title': new FormControl(expression.title, Validators.required),
              'description': new FormControl(expression.description, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.transformerForm = new FormGroup({
      'name': new FormControl(transformerName, Validators.required),
      'imagePath': new FormControl(transformerImagePath, Validators.required),
      'description': new FormControl(transformerDescription, Validators.required),
      'expressions': transformerExpressions
    });
  }

}
