import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInterceptor } from './user-interceptor';
import { Provider } from '@angular/core';

// Injection token for the Http Interceptors multi-provider
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';

/** Provider for the User Interceptor. */
export const UserInterceptorProvider: Provider =
  { provide: HTTP_INTERCEPTORS, useClass: UserInterceptor, multi: true };
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UsersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    MultiSelectModule
  ],
  providers: [
    importProvidersFrom(HttpClientModule),
    UserInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
