import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HTTP } from '@ionic-native/http/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { UsaqiPipe } from './Pipes/US AQI/usaqi.pipe';

//Servicios
const firebaseConfig = {
  apiKey: "AIzaSyDb7oZFCLb0ZJ6l6WkHcl_VECoXHxpSEcI",
  authDomain: "airnl-58f75.firebaseapp.com",
  databaseURL: "https://airnl-58f75.firebaseio.com",
  projectId: "airnl-58f75",
  storageBucket: "airnl-58f75.appspot.com",
  messagingSenderId: "200150779174",
  appId: "1:200150779174:web:47520130de4bca23632de7",
  measurementId: "G-TYB4YFRS68"
};


@NgModule({
  declarations: [AppComponent,MenuComponent, UsaqiPipe ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot({name: '__mydb',
    driverOrder: ['indexeddb', 'sqlite', 'websql']}),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
