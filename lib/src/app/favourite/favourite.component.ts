import { Component, OnInit } from '@angular/core';
import { FavService } from '../fav.service';
import { book } from 'src/models/book.model';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor(private favService: FavService) { }

  books = new Array<book>();

  ngOnInit() {
    this.books = this.favService.favBooks;
  }


  //Удаление из избранного
  fav(id: number) {
  
    const delBook = this.favService.favBooks.find(el => el.id === id);
    if (delBook != null) {
      this.favService.favBooks.splice(this.favService.favBooks.indexOf(delBook), 1);
    }
    this.favService.favBtns[id] = true;

  }

  //Открывает книгу
  read(bookSrc: string){
    window.open(bookSrc, '_blank');
    
  }

}
