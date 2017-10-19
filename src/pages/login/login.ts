import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToastService } from '../../providers/util/toast.service';
import { Welcome } from '../welcome/welcome';
import { GlobalData } from '../../providers/GlobalData';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private userName :string;
  private password :string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public alertCtrl: AlertController,
    public http : ToastService,
    public globalData :GlobalData,
    public loadingCtrl: LoadingController) {
  }
  ionViewDidLoad() {
    
  }
  login (name:string,pas: string) {
    let loader = this.loadingCtrl.create({
      content: "请稍等..."
    });
    loader.present();
    this.http.getUser(`v1/login?account=${name}&password=${pas}`)
    .then(res => {
      if(res.code == 0){
        this.storage.set('userName',name);
        this.storage.set('token',res.data);
        this.storage.get('token').then((val) => {
          this.globalData.token = val;
          localStorage.setItem('token',res.data);//持久保存在本地
          loader.dismiss();
          this.navCtrl.push(Welcome);  
        })
      }else {
        let confirm = this.alertCtrl.create({
          title: '登录失败!!!',
          message: res.msg,
          buttons: [
              {
                text: '确认'
              }
            ]
          });
          confirm.present();
      }
    });
    // this.storage.set('token',pas );
  }
}
