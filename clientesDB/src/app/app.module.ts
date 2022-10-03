import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientesViewComponent } from './components/clientes-view/clientes-view.component';
import { ClientesEditComponent } from './components/clientes-edit/clientes-edit.component';
import { ClientesCreateComponent } from './components/clientes-create/clientes-create.component';
import { ClientesAddComponent } from './components/clientes-add/clientes-add.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientesViewComponent,
    ClientesEditComponent,
    ClientesCreateComponent,
    ClientesAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
