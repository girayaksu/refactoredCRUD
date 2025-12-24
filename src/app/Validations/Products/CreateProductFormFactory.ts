import { FormGroup } from '@angular/forms';
import { CreateProductRequestModel } from '../../Models/Products/CreateProductRequestModel';
import { baseProductForm } from './BaseProductFormFactory';

export type CreateProductForm = FormGroup<ReturnType<typeof baseProductForm>>;

export function createProductForm(): CreateProductForm {
  return new FormGroup(baseProductForm());
}

export function toCreateProductRequest(form: CreateProductForm): CreateProductRequestModel {
  return new CreateProductRequestModel(
    form.controls.name.value,
    form.controls.price.value,
    form.controls.stock.value,
    form.controls.categoryId.value
  );
}
