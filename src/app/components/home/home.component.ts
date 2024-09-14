import { Component, ElementRef, ViewChild } from '@angular/core';
import { ImgCarouselComponent } from '../img-carousel/img-carousel.component';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from '../carousel/carousel.component';
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ImgCarouselComponent,
    NgForOf,
    FormsModule,
    CarouselComponent,
    MatButton,
    NgIf,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  married: boolean = false;

  sheSaidYes() {
    this.married = true;
    this.playSong2();
  }

  @ViewChild('audioElement')
  audioElement!: ElementRef<HTMLAudioElement>;
  @ViewChild('audioElement2')
  audioElement2!: ElementRef<HTMLAudioElement>;
  pause: boolean = true;

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

  public playSong2() {
    this.audioElement.nativeElement.pause();
    this.audioElement2.nativeElement.volume = 1.0;
    this.audioElement2.nativeElement.currentTime = 210;
    this.audioElement2.nativeElement.play().catch(error => {
      console.error('Error playing audio:', error);
    });
  }
}
