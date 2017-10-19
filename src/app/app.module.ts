import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { Camera } from '@ionic-native/camera';//获取摄像头
import { Geolocation } from '@ionic-native/geolocation';//获取定位
import { ImagePicker } from '@ionic-native/image-picker';//获取图片
import { IonicStorageModule } from '@ionic/storage';
import { CallNumber } from '@ionic-native/call-number';//拨打电话号码
import { PhotoViewer } from '@ionic-native/photo-viewer';//全屏显示图像
import { InAppBrowser } from '@ionic-native/in-app-browser';//打开浏览器

// import { Welcome } from '../pages/welcome/welcome';
import { WelcomeModule } from '../pages/welcome/welcome.module';
import { LoginPageModule } from '../pages/login/login.module';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingPage } from '../pages/setting/setting';
import { SettingPageModule } from '../pages/setting/setting.module';
import { ReimbursementPage } from '../pages/reimbursement/reimbursement';
import { ReimbursementPageModule } from '../pages/reimbursement/reimbursement.module';
import { SharedModule } from './shared.module';
//通讯录
import { ContactsPageModule } from '../pages/contacts/contacts.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MultiPickerModule } from 'ion-multi-picker';
import { PROVIDERS } from './imports';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage
  ], 
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:'',
      cancelButton:' 取消'
    }),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    SettingPageModule,
    ReimbursementPageModule,
    WelcomeModule,
    MultiPickerModule ,
    SharedModule,
    ContactsPageModule,
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    SettingPage,
    ReimbursementPage,
  ],
  providers: [
    StatusBar,
    PROVIDERS,
    SplashScreen,
    ImagePicker,
    Camera,
    CallNumber,
    PhotoViewer,
    Geolocation,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
