import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FavService } from '../fav.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor(private favService: FavService) { }

  ngOnInit() {
  }

  bookInput = new FormControl();
  options = this.favService.searchList;

}
