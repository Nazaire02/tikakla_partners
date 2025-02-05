import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  isHumbergerMenu: boolean= false;

  ngOnInit(): void {}

  hamburger(){
    this.isHumbergerMenu = !this.isHumbergerMenu
  }
}
