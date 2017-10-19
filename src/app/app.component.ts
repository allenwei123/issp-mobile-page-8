import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { Welcome } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { ToastService } from '../providers/util/toast.service';
import { GlobalData } from '../providers/GlobalData';
import { NativeService } from '../providers/NativeService';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = '';
  public userName =localStorage.getItem("userName");
  public password =localStorage.getItem("password");
  constructor(
    platform: Platform, 
    statusBar: StatusBar,
    public http : ToastService,
    public storage: Storage,
    splashScreen: SplashScreen,
    public globalData: GlobalData,
    public nativeHttp: NativeService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.globalData.token = localStorage.getItem('token');
      let url = this.nativeHttp.isMobile() ? 'https://lendreimbursement.issp.bjike.com:8080/' : '/';
      this.http.get(`${url}phoneApplylend/v1/listAll`,{lendPhoneSelectStatus:'ALL',page:1})
      .then( res => {
         if(res.code == 0){
            this.rootPage = Welcome;
         }else{
           this.rootPage = LoginPage;
         }
      })   
    });
  }
}
