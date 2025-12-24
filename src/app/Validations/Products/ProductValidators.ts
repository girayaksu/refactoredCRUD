import { Validators, ValidatorFn } from '@angular/forms';

export const ProductValidators = {
  name: (): ValidatorFn[] => [Validators.required, Validators.minLength(3)],

  price: (): ValidatorFn[] => [
    Validators.required,
    Validators.min(0),
  ],

  stock: (): ValidatorFn[] => [
    Validators.required,
    Validators.min(0),
  ],

  categoryId: (): ValidatorFn[] => [
    Validators.required,
    Validators.min(1),
  ],
};
