import { Component, ElementRef, ViewChild } from '@angular/core';
import { ImgCarouselComponent } from '../img-carousel/img-carousel.component';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ImgCarouselComponent,
    NgForOf,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @ViewChild('audioElement')
  audioElement!: ElementRef<HTMLAudioElement>;
  pause: boolean = true;
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

  public playSong(): void {
    this.pause = !this.pause;
    if (this.pause) {
      this.audioElement.nativeElement.pause();
      return;
    }
    this.audioElement.nativeElement.volume = 0.02;
    this.audioElement.nativeElement.play().catch(error => {
      console.error('Error playing audio:', error);
    });
  }
}
