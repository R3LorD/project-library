import { Component, OnInit } from '@angular/core';
import { book, favBtns } from '../../models/book.model';
import { FavService } from '../fav.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private favService: FavService) {

  }
  books = new Array<book>();
  favBtns = new Array<favBtns>();

  ngOnInit() {
    this.books = [
      {
        id: 0,
        imgSrc: "./assets/witcher.jpg",
        bookSrc: './assets/witcher.pdf',
        name: "Ведьмак", 
        author: "Анджей Сапковский", 
        genre: "Фэнтези", 
        description: `Ведьмак» Анджея Сапковского является 
        одним из самых популярных циклов книг. 
        Это история о приключениях ведьмака Геральта, охотника на чудовищ.`,
        favBtn: this.favService.favBtns[0]
      },
      {
        id: 1,
        imgSrc: "./assets/autostop.jpg",
        bookSrc: './assets/autostop.pdf',
        name: "Автостопом по галактике (сборник)", 
        author: "Адамс Дуглас", 
        genre: "Фантастика", 
        description: `За несколько секунд до катастрофы, 
        в результате которой Земля будет снесена, чтобы освободить место для 
        межгалактического шоссе Артур Дент, вместе со своим другом-инопланетянином 
        Фордом Префектом, покидает планету и начинает свою умопомрачительную одиссею, 
        покорившую миллионы читателей по всему миру.`,
        favBtn: this.favService.favBtns[1]
      },
      {
        id: 2,
        imgSrc: "./assets/evgenii.jpg",
        bookSrc: './assets/evgenii.pdf',
        name: "Евгений Онегин", 
        author: "Александр Сергеевич Пушкин", 
        genre: "Драма", 
        description: `Вечный роман о несбывшейся любви великого 
        классика мировой литературы А.С Пушкина,
         как и почти двести лет назад, так и сегодня не теряет 
         своей своей актуальности и любим читателями по всему миру.`,
         favBtn: this.favService.favBtns[2]
      },
      {
        id: 3,
        imgSrc: "./assets/master.jpeg",
        bookSrc: './assets/master.pdf',
        name: "Мастер и Маргарита", 
        author: "Булгаков Михаил Афанасьевич", 
        genre: "Драма", 
        description: `Мастер и Маргарита» – блистательный шедевр, 
        созданный Михаилом Булгаковым, завораживающая мистическая 
        дьяволиада, обнажающая вечные темы любви, борьбы добра со злом, смерти и бессмертия.`,
        favBtn: this.favService.favBtns[3]
      }  
    ];
  }
  fav(id: number) {
    console.log(id);

    if(this.books[id].favBtn){
      if(this.favService.favBooks.find(el=>el.id == id) == null){
        this.favService.favBooks.push(this.books.find(el=>el.id == id));
      }
      this.favService.favBtns[id] = false;
      console.log(this.favService.favBooks);
    }
    else{
      if(this.favService.favBooks.find(el=>el.id == id) != null){
        this.favService.favBooks.splice(id, 1);
      }
      this.favService.favBtns[id] = true;
      console.log(this.favService.favBooks);
    }

    this.books[id].favBtn = this.favService.favBtns[id];

  }

  read(bookSrc: string){
    window.open(bookSrc, '_blank');
    
  }
}
