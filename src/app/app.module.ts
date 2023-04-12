import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import{ MatInputModule } from '@angular/material/input'
import{ MatCardModule } from '@angular/material/card'
import{ MatToolbarModule } from '@angular/material/toolbar'
import{MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';

import {HttpClientModule} from "@angular/common/http";

import {PostCreateComponent} from './post/post-create/post-create.component';
import { HeaderComponent } from './header/header-component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PostListComponent } from './post/post-create/post-list/post-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatMenuModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
