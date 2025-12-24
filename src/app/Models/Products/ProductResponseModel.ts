import { BaseProductViewModel } from './BaseProductViewModel';

export class ProductResponseModel extends BaseProductViewModel {
  id: number;
  constructor(id: number, productName: string, price: number, stock: number, categoryId: number) {
    super(productName, price, stock, categoryId);
    this.id = id;
  }
}
