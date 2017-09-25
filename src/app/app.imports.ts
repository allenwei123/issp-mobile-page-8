// Global state (used for theming)
// import { AppState } from './app.global';

// Providers
// import { ToastService } from '../providers/util/toast.service';
// import { AlertService } from '../providers/util/alert.service';
// import { CameraProvider } from '../providers/util/camera.provider';
// import { NativeGoogleMapsProvider } from '../providers/native-google-maps/native-google-maps';

// Ionic native providers
// import { CardIO } from '@ionic-native/card-io';
// import { BarcodeScanner } from '@ionic-native/barcode-scanner';
// import { Camera } from '@ionic-native/camera';
// import { Diagnostic } from '@ionic-native/diagnostic';
// import { Geolocation } from '@ionic-native/geolocation';
// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';
// import { GoogleMaps } from '@ionic-native/google-maps';

// Directives
// import { SlidingDrawer } from '../components/sliding-drawer/sliding-drawer';
// import { Autosize } from '../components/autosize/autosize';

// Components
import { AccordionListComponent } from '../components/accordion-list/accordion-list';
import { ToastService } from '../providers/util/toast.service';
import { Contacts } from '../providers/contacts';

// Pipes
import { ColorPipe } from '../pipes/color/color';


// Modules
// import { SwingModule } from 'angular2-swing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

export const MODULES = [
  // SwingModule,
  BrowserModule,
  HttpModule,
];

export const PIPES = [
  ColorPipe
];

export const PROVIDERS = [
  ToastService,
  Contacts
  // AlertService,
  // ToastService,
  // AppState,
  // CameraProvider,
  // NativeGoogleMapsProvider,

    // Ionic native specific providers
  // BarcodeScanner,
  // Camera,
  // Diagnostic,
  // Geolocation,
  // CardIO,
  // StatusBar,
  // SplashScreen,
  // GoogleMaps,
];

export const COMPONENTS = [
  // FlashCardComponent,
  // TimerProgress,
  // Timer,
  // ExpandableHeader,
  // Autosize,
  AccordionListComponent,
];

export const DIRECTIVES = [
  // SlidingDrawer,
  // Timer,
  // Autosize,
];
