import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PerfilPage } from '../pages/perfil/perfil';
import { ContactenosPage } from '../pages/contactenos/contactenos';

import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { HttpModule } from '@angular/http';    

import { Geolocation } from '@ionic-native/geolocation';
import { ImagesProvider } from '../providers/images/images';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerfilPage,
    ContactenosPage,
    LoginPage,
    WelcomePage,
    SignUpPage
   ], 



  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PerfilPage,
    ContactenosPage,
    LoginPage,
    WelcomePage,
    SignUpPage
  ], 



  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    ImagesProvider
  ]
})
export class AppModule {}
