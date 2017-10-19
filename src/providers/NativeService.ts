import {Injectable} from '@angular/core';
import { Platform,AlertController } from "ionic-angular";
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Observable } from "rxjs";
import { InAppBrowser } from '@ionic-native/in-app-browser';

declare var LocationPlugin;
declare var AMapNavigation;

@Injectable()
export class NativeService {
    
    constructor(
        private platform: Platform,
        private alertCtrl: AlertController,
        private camera: Camera,
        private inAppBrowser: InAppBrowser,) {
    }
    
   /**
   * 是否真机环境
   */
  isMobile(): boolean {
    return this.platform.is('mobile') && !this.platform.is('mobileweb');
  }

  /**
   * 是否android真机环境
   */
  isAndroid(): boolean {
    return this.isMobile() && this.platform.is('android');
  }
  /**
   * 是否ios真机环境
   */
  isIos(): boolean {
    return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
  }
  alert(title: string, subTitle: string = "",): void {
    this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: [{text: '确定'}]
    }).present();
  }
  getCamera(){
    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.NATIVE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    return Observable.create( observer => {
      this.camera.getPicture().then( imgData => {
        if(options.destinationType === this.camera.DestinationType.DATA_URL) {
          observer.next('data:image/jpg;base64,' + imgData);
        }else {
          observer.next(imgData);
        }
      })
    }).catch(err => {
        if (err == 20) {
          this.alert('没有权限,请在设置中开启权限');
          return;
        }
        if (String(err).indexOf('cancel') != -1) {
          return;
        }
        this.alert('获取照片失败');
      });
  }
  /**
   * 通过浏览器打开url
   */
  openUrlByBrowser(url: string): void {
    this.inAppBrowser.create(url, '_system');
  }
}