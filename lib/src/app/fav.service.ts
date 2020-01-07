import { book } from 'src/models/book.model';

export class FavService{
    favBooks = new Array<book>();
    searchList: string[] = [];

    favBtns: boolean[] = [true, true, true, true];
}