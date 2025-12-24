import { BaseProductViewModel } from './BaseProductViewModel';

export class CreateProductRequestModel extends BaseProductViewModel {
  constructor(productName: string, price: number, stock: number, categoryId: number) {
    super(productName, price, stock, categoryId);
  }
}
