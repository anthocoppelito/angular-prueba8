import { Component, inject, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { productsList } from './products.mock';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';
//import { HttpClientModule } from '@angular/common/http';

// se concluye que no se puede traer la api externa de esta manera debido a incompatibilidad de versiones en angular
//
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    RouterModule,
    CurrencyPipe,
    CommonModule,
    //HttpClientModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  //productsList: any [] = productsList;
  productsList: any [] = [];

  // constructor(private _apiService: ApiService) { }
  private servicio = inject(ApiService);

  ngOnInit(): void {
    this.servicio.getAllProducts().subscribe((data: IProduct[]) => {
      console.log(data)
      this.productsList = productsList
    });
  } 
}
