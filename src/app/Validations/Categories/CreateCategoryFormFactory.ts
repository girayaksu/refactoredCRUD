import { FormGroup } from '@angular/forms';
import { CreateCategoryRequestModel } from '../../Models/Categories/CreateCategoryRequestModel';
import { baseCategoryForm } from './BaseCategoryFormFactory';

export type CreateCategoryForm = FormGroup<ReturnType<typeof baseCategoryForm>>;

export function createCategoryForm(): CreateCategoryForm {
  return new FormGroup(baseCategoryForm());
}

export function toCreateCategoryRequest(form: CreateCategoryForm): CreateCategoryRequestModel {
  return new CreateCategoryRequestModel(
    form.controls.name.value,
    form.controls.description.value
  );
}
