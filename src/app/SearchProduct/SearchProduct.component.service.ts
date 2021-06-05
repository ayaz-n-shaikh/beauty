import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchProductService {

    url = 'https://beauty--fest.herokuapp.com/MRlogin/search'
    constructor(private httpClient: HttpClient) { }
    

     getSearch(ProductName:String) {

         const body = {
            ProductName:ProductName
         }

        return this.httpClient.post(this.url,body)
      }
    
     
}