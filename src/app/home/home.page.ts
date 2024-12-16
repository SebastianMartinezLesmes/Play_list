import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  linkVideo: string = "";

  downloadMP3(){
    alert("Try downloading in mp3 format")
  }

  downloadMP4(){
    alert("Try downloading in mp4 format")
  }

}
