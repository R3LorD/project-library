import { book, genreList } from 'src/models/book.model';

export class FavService{
    favBooks = new Array<book>();
    searchList: string[] = [];

    //Книги для отображения при поиске
    books = new Array<book>();
    searchedBook: book = null;

    //Кнопки
    favBtns: boolean[] = [true, true, true, true, true, true];

    //Чекбоксы
    allGenresCheckbox: boolean = true;
    
    SortedBooks = new Array<book>();

}