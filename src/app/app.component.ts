import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'justin case';
  productName = 'rose powder';
  productDescription = 'face talc';
  productCost = '5 rs';
  productReviews = [{name :'ramu',review :'this product is good to use'},
                    {name:'rani',review :'this product is very smooth'}];
}
