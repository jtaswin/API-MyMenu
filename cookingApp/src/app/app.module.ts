import { MatModule } from './mat.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { LoaderModule } from './loader/loader.module';
import { LoaderInterceptor } from './loader/loader-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    UpdateComponent,
    ConfirmDeleteComponent,
    IngredientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatModule,
    LoaderModule,
  ],
  entryComponents: [
    ConfirmDeleteComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
