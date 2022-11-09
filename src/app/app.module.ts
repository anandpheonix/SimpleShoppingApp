// Refer NgModule Decorator
import { NgModule } from '@angular/core';

// Define a class for App Module
@NgModule({})
export class AppModule {
  constructor() {
    console.log('app module instantiated');
  }
}
