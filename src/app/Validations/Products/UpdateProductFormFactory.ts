import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateProductRequestModel } from '../../Models/Products/UpdateProductRequestModel';
import { baseProductForm } from './BaseProductFormFactory';

export type UpdateProductForm = FormGroup<{
  id: FormControl<number>;
  name: FormControl<string>;
  price: FormControl<number>;
  stock: FormControl<number>;
  categoryId: FormControl<number>;
}>;

export function updateProductForm() {
  const base = baseProductForm();

  base.name.addValidators([Validators.maxLength(100)]);

  base.name.updateValueAndValidity({ emitEvent: false });

  return new FormGroup({
    id: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(1)],
    }),
    ...base,
  });
}

export function toUpdateProductRequest(form: UpdateProductForm): UpdateProductRequestModel {
  return new UpdateProductRequestModel(
    form.controls.id.value,
    form.controls.name.value,
    form.controls.price.value,
    form.controls.stock.value,
    form.controls.categoryId.value
  );
}
