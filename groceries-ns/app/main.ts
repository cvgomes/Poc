import { setStatusBarColors } from "./utils/status-bar-util";
import "reflect-metadata";

// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {NS_HTTP_PROVIDERS} from "nativescript-angular/http";
import {APP_ROUTER_PROVIDERS} from "./app.routes";
import {AppComponent} from "./app.component";

setStatusBarColors();
nativeScriptBootstrap(AppComponent, [NS_HTTP_PROVIDERS, APP_ROUTER_PROVIDERS]);