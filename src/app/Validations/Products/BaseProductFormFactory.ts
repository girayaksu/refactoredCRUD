import { FormControl, Validators } from '@angular/forms';
import { ProductValidators } from './ProductValidators';

export type BaseProductForm = {
  name: FormControl<string>;
  price: FormControl<number>;
  stock: FormControl<number>;
  categoryId: FormControl<number>;
};

export function baseProductForm(): BaseProductForm {
  return {
    name: new FormControl<string>('', { nonNullable: true, validators: ProductValidators.name() }),
    price: new FormControl<number>(0, {
      nonNullable: true,
      validators: ProductValidators.price(),
    }),
    stock: new FormControl<number>(0, {
      nonNullable: true,
      validators: ProductValidators.stock(),
    }),
    categoryId: new FormControl<number>(1, {
      nonNullable: true,
      validators: ProductValidators.categoryId(),
    }),
  };
}
