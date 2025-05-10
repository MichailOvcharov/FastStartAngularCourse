import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchComponent } from './components/search/search.component';
import { ToolbarModule } from 'primeng/toolbar';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    BreadcrumbsComponent,
    SearchComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    CardModule,
    FormsModule,
    InputTextModule,
    ButtonModule,

  ]
})
export class CoreModule { }
