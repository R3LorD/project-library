import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FavService } from '../fav.service';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { book } from 'src/models/book.model';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor(private favService: FavService) { }

  ngOnInit() {
    this.filteredBookSearch = this.bookInput.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    console.log(this.options);
  }

  ngAfterViewInit() {
    
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

  bookInput = new FormControl();
  filteredBookSearch: Observable<string[]>;

  //Чекбоксы
  // checked = true;
  changeGenreList(){
    for(var i = 0; i < this.favService.genreList.length; i++){
      if(this.favService.allGenresCheckbox){
        if(this.favService.genreList[i]){
          this.favService.genreList[i] = false;
        }
      }
      else{
        if(!this.favService.genreList[i]){
          this.favService.genreList[i] = true;
        }
      }
    }
    console.log(this.favService.genreList);
  }


  private _filter(value: string) : string[]{
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
      );
  }

  //Опции выбора при поиске
  options = this.favService.searchList;


  //Находит выбранную книгу в поиске и помещает ее в переменную "searchedBook"
  GotSearch(ev){
    this.favService.searchedBook = this.favService.books.find(el => el.name === ev.option.value);
  }

}
