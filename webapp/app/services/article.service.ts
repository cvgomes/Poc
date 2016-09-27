import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Article } from '../models/article';

@Injectable()
export class ArticleService {

    private articlesUrl = 'app/articles';

    constructor(private http: Http) {}

    private headers = new Headers({'Content-Type': 'application/json'});

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getArticles(): Promise<Article[]> {
        return this.http.get(this.articlesUrl)
            .toPromise()
            .then(response => response.json().data as Article[])
            .catch(this.handleError);
    }

    createArticle(articleName:string):Promise<Article> {
        console.log("ARTICLe_NAME "+articleName);
        return this.http
            .post(this.articlesUrl, JSON.stringify({name: articleName}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }
}