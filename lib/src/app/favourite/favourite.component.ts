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
    this.favService.favBooks = JSON.parse(localStorage.getItem('favBooks'));
    this.favService.favBooks.forEach(element => {
      this.favService.favBtns[element.id] = false;
    });

    this.books = this.favService.favBooks;
  }


  //Удаление из избранного
  fav(id: number) {
  
    const delBook = this.favService.favBooks.find(el => el.id === id);
    if (delBook != null) {
      this.favService.favBooks.splice(this.favService.favBooks.indexOf(delBook), 1);
    }
    this.favService.favBtns[id] = true;
    localStorage.setItem('favBooks', JSON.stringify(this.favService.favBooks));
    
    console.log(this.favService.favBooks, id);

  }

  //Открывает книгу
  read(bookSrc: string){
    window.open(bookSrc, '_blank');
    
  }

}
