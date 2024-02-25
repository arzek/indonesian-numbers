import { Component, OnInit } from '@angular/core';
import random from 'random'
import { data } from "./data";
import { terbilang } from "./number2text";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  number: number = 0;
  data: string[] = data;
  current: string[] = [];

  isCorrect = false;

  max = 100;

  constructor() {

  }

  ngOnInit() {
    const urlParams = new URLSearchParams(window.location.search);
    this.max = urlParams.get('max') ? Number(urlParams.get('max')) : this.max;
    this.number = this.getRandomNumber();
  }


  getRandomNumber(): number {
    return random.int(1, this.max)
  }

  removeFromCurrent(item: string) {
    this.current = this.current.filter(el => el !== item)
  }

  addToCurrent(item: string) {
    this.current.push(item)
    this.checkResult();
  }

  checkResult() {
    const data = this.current.join(' ');
    this.isCorrect = data === terbilang(this.number)
  }

}
