import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  private title = 'HCIDemo';

  private update: boolean = false;
  private bntStyle: string;

  get BntStyle(){
    return this.bntStyle;
  }

  ngOnInit(){
   this.bntStyle = 'st1'; 
  }

  onClickMeMsg(){
    console.log("MAI INCEARCA!");
  }

  onClickMe() {
    this.bntStyle = 'st0';
    console.log("flksdbfljwebflhjesf");
  }

  constructor(updates: SwUpdate) {
    updates.available.subscribe(event => {
      //this.update = true;
      updates.activateUpdate().then(() => document.location.reload());

    })
  }
}