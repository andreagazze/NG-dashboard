import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { NavbarComponent } from './navbar/navbar.component';
import {MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatListModule} from '@angular/material';
import { NavprincipaleComponent } from './navprincipale/navprincipale.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import {MatInputModule} from '@angular/material/input';
import{MatDatepickerModule} from '@angular/material/datepicker';
import{MatNativeDateModule} from '@angular/material';
import{ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DashboardComponent,
    NavbarComponent,
    NavprincipaleComponent,
    LoginComponent,
    FormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatTabsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

