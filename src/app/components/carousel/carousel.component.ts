import { Component } from '@angular/core';
import { ImgCarouselComponent } from '../img-carousel/img-carousel.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    ImgCarouselComponent,
    NgForOf,
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  fileList: string[] = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
    'img7.jpg',
    'img8.jpg',
    'img9.jpg',
    'img10.jpg',
    'img11.jpg',
    'img12.jpg',
    'img13.jpg',
    'img14.jpg',
    'img15.jpg',
    'img16.jpg',
    'img17.jpg',
    'img18.jpg',
    'img19.jpg',
    'img20.jpg',
  ];

  public isActive(file: string): boolean {
    return file === 'img1.jpg';
  }
}
