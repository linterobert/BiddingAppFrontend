import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BiddingApp';

  constructor(private el: ElementRef, private renderer:Renderer2){}
  ngAfterViewInit(){
    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'background-image', 'url(https://wallpaperaccess.com/full/1950954.jpg)');
    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'background-size', 'cover');
  }
}

