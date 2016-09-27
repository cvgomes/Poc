import { Component } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { OnInit } from '@angular/core';

//todo do we need the provider here?... its already on the module
@Component({
    providers: [
        ArticleService
    ],
    templateUrl: 'app/components/home/home.template.html'
})
export class HomeComponent implements OnInit {

    constructor(private articleService: ArticleService) {}

    articles: Article[];
    selectedArticle: Article;

    onSelect(article: Article): void {
        this.selectedArticle = article;
    }

    getArticles(): void {
        this.articleService.getArticles()
            .then((articles) => {
                this.articles = articles;
                console.log(this.articles);
            });
    }


    addArticle(articleName:string):void {
        articleName = articleName.trim();
        if(!articleName) {return;}
        this.articleService.createArticle(articleName)
            .then(
                article => {
                    this.articles.push(article);
                    console.log(this.articles);
                }
            );
    }

    ngOnInit(): void {
        this.getArticles()
    }

}
