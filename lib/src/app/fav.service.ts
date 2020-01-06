import { book } from 'src/models/book.model';

export class FavService{
    favBooks = new Array<book>();
    searchList = ['Ведьмак', 'Автостопом по галактике (сборник)', 'Евгений Онегин', 'Мастер и Маргарита'];

    favBtns: boolean[] = [true, true, true, true];
}