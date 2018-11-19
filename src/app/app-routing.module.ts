import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CartComponent} from './pages/cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: 'welcome' },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
