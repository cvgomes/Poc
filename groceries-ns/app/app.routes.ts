import {RouterConfig}       from "@angular/router";
import {nsProvideRouter}    from "nativescript-angular/router"
import {LoginPage}          from "./pages/login/login.component";
import {MainComponent}      from "./pages/main/main.component";
import {ListComponent}      from "./pages/list/list.component";

export const routes: RouterConfig = [
    { path: "", component: LoginPage },
    { path: "login", component: LoginPage },
    { path: "list", component: ListComponent },
    { path: "main", component: MainComponent }
];

export const APP_ROUTER_PROVIDERS = [
    nsProvideRouter(routes, {})
];