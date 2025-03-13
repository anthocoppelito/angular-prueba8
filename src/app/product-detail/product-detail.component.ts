// Recordar que === es igual con todo y tipo
// Recordar que == es igual solo en valor
// Recordar que != es diferente en valor
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productsList } from '../products/products.mock';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  product?: Product;
  productList: Product[] = productsList;
  loading : boolean= true;
  color : string='';

  constructor(private _route: ActivatedRoute) {

   }

  ngOnInit(): void {
    setTimeout(() => {
      this._route.params.subscribe(params => {
        this.product = this.productList.find(product => product.id == params['productId']);
        this.loading = false;
        this.color = this.product?.price as number > 2000 ? 'red' : 'green';
        // this.product=(params['productId']);
        // this.color=(params['category']);
      });
      
    },1500);
  }

}
