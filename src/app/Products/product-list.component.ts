import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) {
    // this.FilteredProducts =  productService.getProducts();// this.Products;
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      {
        next: products => {
        this.Products = products;
          this.FilteredProducts = this.Products;
        },
        error: err => this.errorMessage = err
      }
    );
    this.FilteredProducts = this.Products;
    console.log('In onInit');
  }
  PageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  errorMessage: string;
  //listFilter: string = 'Cart';
  private _listfilter: string;

  get listFilter(): string {
    return this._listfilter;
  }
  set listFilter(value: string) {
    this._listfilter = value;
    this.FilteredProducts = this.listFilter ? this.PerformFilter(this.listFilter) : this.Products;
  }

  onRatingClicked(message: string): void {
    this.PageTitle = message;
  }
  showImage = false;
  FilteredProducts: IProduct[];
  Products: IProduct[] = []

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  PerformFilter(filterby: string): IProduct[] {
    filterby = filterby.toLocaleLowerCase();
    return this.Products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterby) !== -1);
  }
}