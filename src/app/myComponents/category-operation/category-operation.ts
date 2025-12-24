import { Component,signal,inject,OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AbstractControl,ReactiveFormsModule } from '@angular/forms';
import { CategoryApi } from '../../DataAccess/category-api';
import { CategoryResponseModel } from '../../Models/Categories/CategoryResponseModel';
import { createCategoryForm,toCreateCategoryRequest } from '../../Validations/Categories/CreateCategoryFormFactory';
import { updateCategoryForm,toUpdateCategoryRequest } from '../../Validations/Categories/UpdateCategoryFormFactory';

//BUrada dikkat direkt http degil bir data-access service inject edicez

@Component({
  selector: 'app-category-operation',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './category-operation.html',
  styleUrl: './category-operation.css',
})
export class CategoryOperation implements OnInit {

  private categoryApi = inject(CategoryApi);

  protected categories = signal<CategoryResponseModel[]>([]);
  protected selectedCategory = signal<CategoryResponseModel|null>
  (null);

  //UI state formlarımız
  protected createForm = createCategoryForm();
  protected updateForm = updateCategoryForm();

}
