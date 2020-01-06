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
    console.log(this.books);
  }

  read(bookSrc: string){
    window.open(bookSrc, '_blank');
    
  }

}
