import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  //@ViewChild('mobile') mobile!: ElementRef;
  isHumbergerMenu: boolean= false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  toggleMenuClass(element: HTMLElement) {
    if (element.classList.contains('active-mobile-nav')) {
      this.renderer.removeClass(element, 'active-mobile-nav');
    } else {
      this.renderer.addClass(element, 'active-mobile-nav');
    }
  }
}
