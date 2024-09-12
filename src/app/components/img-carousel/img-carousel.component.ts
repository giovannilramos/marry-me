import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-carousel',
  standalone: true,
  imports: [],
  templateUrl: './img-carousel.component.html',
  styleUrl: './img-carousel.component.css',
})
export class ImgCarouselComponent {

  @Input()
  imgSrc!: string;

  @Input()
  active: boolean = false;
}
