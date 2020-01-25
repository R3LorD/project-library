import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FavService } from '../fav.service';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { book, genreList } from 'src/models/book.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  
  @Output() rebase = new EventEmitter();
  
  constructor(private favService: FavService,
    private dataService: DataService) { }
    
    genres = new Array<genreList>();
    bookInput = new FormControl();
    filteredBookSearch: Observable<string[]>;
    options: string[];

  ngOnInit() {

    this.options = [];
    this.options = this.favService.searchList;
    this.filteredBookSearch = this.bookInput.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.genres = [
      {
        genre: 'Драма',
        activate: true
      },
      {
        genre: 'Повесть',
        activate: true
      },
      {
        genre: "Классическая проза", 
        activate: true
      },
      {
        genre: 'Поэма',
        activate: true
      }
    ];
    
    this.favService.SortedBooks = [];
    this.dataService.books.forEach(el => {
      this.favService.SortedBooks.push(el);
    });
    this.rebase.emit();
  }

  ngAfterViewInit() {

    this.options = [];    
    this.options = this.favService.searchList;
    this.filteredBookSearch = this.bookInput.valueChanges.pipe(
      startWith(''),
      map(value => {
        if (value === '') {
          this.favService.searchedBook = null;
        }
        return this._filter(value);
      })
    );
  }

  activateGenres(){
    //И вновь ультразакидывание
    this.favService.SortedBooks = [];
    this.dataService.books.forEach(el => {
      this.genres.forEach(el2 => {
        if(el.genre == el2.genre){
          if(el2.activate){
            this.favService.SortedBooks.push(el);
          }
        }
      });
    });

    this.rebase.emit();
  }



  //Перебиндивает чекбоксы нажатием на чекбокс "все жанры"
  changeGenreList(){
    if(this.favService.allGenresCheckbox){
      this.genres.forEach(el => {
        if(el.activate){
          el.activate = false;
        }
      });
    }
    else{
      this.genres.forEach(el => {
        if(!el.activate){
          el.activate = true;
        }
      });
    }
    
  }

  allChange(activate: boolean){
    if(activate){
      this.favService.allGenresCheckbox = false;
    }
  }


  private _filter(value: string) : string[]{
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
      );
  }

  //Опции выбора при поиске
  


  //Находит выбранную книгу в поиске и помещает ее в переменную "searchedBook"
  GotSearch(ev){
    this.favService.searchedBook = this.favService.books.find(el => el.name === ev.option.value);
  }

}
