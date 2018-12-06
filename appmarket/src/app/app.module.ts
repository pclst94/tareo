import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainstPage } from '../pages/mainst/mainst';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

var config = {
    apiKey: "AIzaSyBqnHZknqD5jSKxNLKAB_Qy6ZVHrET8k8E",
    authDomain: "tareo-ionic-sft.firebaseapp.com",
    databaseURL: "https://tareo-ionic-sft.firebaseio.com",
    projectId: "tareo-ionic-sft",
    storageBucket: "tareo-ionic-sft.appspot.com",
    messagingSenderId: "913020562403"
  };
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainstPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
    AngularFireDatabaseModule;
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainstPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
