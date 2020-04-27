import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import {ActivatedRoute} from '@angular/router';
import { ProductService } from './product.service';

@Component(
    {
        templateUrl:'./product-detail.component.html'
    }
)
export class ProductDetailComponet implements OnInit{
constructor(private route: ActivatedRoute, private productService: ProductService){}
    ngOnInit(): void {
      let id = +this.route.snapshot.paramMap.get('id');
      this.productService.getProducts().subscribe({
          next: p => this.products = p
      });
     
    }
    pageTitle: string = 'Product Detail';
    product:IProduct;
    products:IProduct[];
}