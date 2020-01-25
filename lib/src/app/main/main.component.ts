import { Component, OnInit } from '@angular/core';
import { book, favBtns } from '../../models/book.model';
import { FavService } from '../fav.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  constructor(private favService: FavService,
    private dataService: DataService) {

  }
  books = new Array<book>();
  favBtns = new Array<favBtns>();
  check: boolean = true;

  ngOnInit() {

    this.books = this.favService.SortedBooks;

    this.books.forEach(element => {
      for (let i = 0; i < this.favService.searchList.length; i++){
        if(element.name == this.favService.searchList[i]){
          this.check = false;
        }
      }
      if(this.check){
        this.favService.searchList.push(element.name);
      }
      this.check = true;
    });

    //Книги для отображения при поиске
    this.favService.books = this.books;

  }

  //Добавляет и убирает из избранного, а также меняет кнопку
  fav(id: number) {

    if(this.books[id].favBtn){
      if(this.favService.favBooks.find(el=>el.id == id) == null){
        this.favService.favBooks.push(this.books.find(el=>el.id == id));
      }
      this.favService.favBtns[id] = false;
    }
    else{
      const delBook = this.favService.favBooks.find(el => el.id === id);
      if (delBook != null) {
        this.favService.favBooks.splice(this.favService.favBooks.indexOf(delBook), 1);
      }
      this.favService.favBtns[id] = true;
    }

    this.books[id].favBtn = this.favService.favBtns[id];

  }


  //Открывает книгу
  read(bookSrc: string){
    window.open(bookSrc, '_blank');
    
  }

  reload(){
    this.ngOnInit();
  }
}
