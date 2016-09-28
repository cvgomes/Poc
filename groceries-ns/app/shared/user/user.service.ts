import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {User} from "./user";
import {Config} from "../config";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {
    constructor(private _http: Http) {}

    login(user: User) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this._http.post(
            Config.apiUrl + "oauth/token",
            JSON.stringify({
                username: user.email,
                password: user.password,
                grant_type: "password"
            }),
            { headers: headers }
        )
            .map(response => response.json())
            .do(data => {
                Config.token = data.Result.access_token;
            })
            .catch(this.handleErrors);
    }

    register(user: User) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        console.log("*");
        console.log(JSON.stringify(user));
        console.log(Config.apiUrl + "Users");

        return this._http.post(
            Config.apiUrl + "Users",
            JSON.stringify({
                Username: user.email,
                Email: user.email,
                Password: user.password
            }),
            { headers: headers }
        )
            .catch(this.handleErrors);
    }

    handleErrors(error: Response) {
        console.log("**");
        console.log("** service exception catched");
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}