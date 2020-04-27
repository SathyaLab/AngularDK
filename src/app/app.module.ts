import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './Products/product-list.component'
import {ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe';
import { StartComponent } from './shared/star.component';
import { ProductDetailComponet } from './Products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [AppComponent ,ProductListComponent, ConvertToSpacesPipe , StartComponent, ProductDetailComponet, WelcomeComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, 
    RouterModule.forRoot([
      {path:'products', component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailComponet},
      {path:'welcome', component: WelcomeComponent},
      {path:'', redirectTo:'welcome',pathMatch:'full'}
      //{path: '**', component: pageNotFound}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
