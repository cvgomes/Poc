import { InMemoryDbService } from 'angular-in-memory-web-api';

export class ArticleData implements InMemoryDbService {
    createDb() {
        let articles = [
            { id: 11, name: 'Banana'},
            { id: 12, name: 'Apple'},
            { id: 13, name: 'Pear'},
            { id: 14, name: 'Orange'},
            { id: 15, name: 'Pineapple'}
        ];
        return {articles};
    }
}