import { Injectable } from '@angular/core';
import { book } from 'src/models/book.model';
import { FavService } from './fav.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private favService: FavService) { }

  books = [
    {
      id: 0,
      imgSrc: "./assets/taras.jpg",
      bookSrc: './assets/taras.pdf',
      name: "Тарас Бульба", 
      author: "Николай Васильевич Гоголь", 
      genre: "Повесть", 
      description: `Повесть Николая Васильевича Гоголя, входящая в цикл «Миргород». 
      События произведения происходят в среде запорожских казаков, 
      в первой половине XVII века.`,
      favBtn: this.favService.favBtns[0]
    },
    {
      id: 1,
      imgSrc: "./assets/oblom.jpg",
      bookSrc: './assets/oblom.pdf',
      name: "Обломов", 
      author: "Иван Гончаров", 
      genre: "Классическая проза", 
      description: `Оригинальная, неоднозначная книга, которую считают 
      и эталоном критического реализма, и романом откровенно сатирическим… 
      Но все критики единодушны в том, что «Обломов» – гениальнейшее и блистательнейшее явление отечественной 
      прозы, явление, не утратившее своего значения и в наши дни!`,
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
    },
    {
      id: 4,
      imgSrc: "./assets/hero.jpg",
      bookSrc: './assets/hero.pdf',
      name: "Герой нашего времени", 
      author: "Михаил Юрьевич Лермонтов", 
      genre: "Классическая проза", 
      description: `Роман «Герой нашего времени» – одна из вершин русской прозы первой
       половины XIX в. Воспринятый современниками М.Ю. Лермонтова как «странный»,
        роман побуждает все новые и новые поколения читателей искать решения его загадкам.`,
       favBtn: this.favService.favBtns[4]
    },  
    {
      id: 5,
      imgSrc: "./assets/dead.jpg",
      bookSrc: './assets/dead.pdf',
      name: "Мертвые души", 
      author: "Николай Васильевич Гоголь", 
      genre: "Поэма", 
      description: `Некий Чичиков, выдающий себя за помещика, приезжает в некий город "N"
       и объезжает окрестные поместья с целью скупить так называемые мертвые души. 
       Т.е умерших крестьян, которые еще числятся живыми.. И тут начинается самое интересное. `,
      favBtn: this.favService.favBtns[5]
    }
  ];
}
