import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  // VARIABLES
  malayalamSongs: any = [];
  hindiSongs: any = [];
  englishSongs: any = [];
  isPlaying1: boolean = true;
  isPlaying2: boolean = true;
  isPlaying3: boolean = true;
  isLoading: boolean = false;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;

  constructor(private api: ApiService) { }
  
  // DISPLAY ALL SONGS WHEN OPENIN THE PAGE
  ngOnInit(): void {
    // Get all malayalam songs
    this.api.getMalayalamSongs().subscribe({
      next: (result) => {
        setTimeout(() => {
          this.malayalamSongs = result;
          this.isLoading = true;
        }, 2000);
        console.log(this.malayalamSongs);
      },
      error: (error) => {
        console.log(error);
      },
    });
    // Get all Hindi songs
    this.api.getHindiSongs().subscribe({
      next: (result) => {
        setTimeout(() => {
          this.hindiSongs = result;
          this.isLoading = true;
        }, 2000);
        console.log(this.hindiSongs);
      },
      error: (error) => {
        console.log(error);
      },
    });
    // Get all English songs
    this.api.getEnglishSongs().subscribe({
      next: (result) => {
        setTimeout(() => {
          this.englishSongs = result;
          this.isLoading = true;
        }, 2000);
        console.log(this.englishSongs);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // CLICK EVENT FUNCTION ON CLICKING THE PLAY/PAUSE BUTTON

  // MALAYALAM SONGS
  playSong1(songUrl: string, index: number) {
    const audio: HTMLAudioElement = this.audioPlayer.nativeElement;
    console.log(audio);
    const isCurrentSong1 = songUrl === audio.src;

    if (isCurrentSong1) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    } else {
      audio.src = songUrl;
      audio.play();
    }
    this.malayalamSongs.forEach((song: any, i: number) => {
      song.isPlaying1 = i === index && !audio.paused;
    });
  }

  // HINDI SONGS
  playSong2(songUrl: string, index: number) {
    const audio: HTMLAudioElement = this.audioPlayer.nativeElement;
    console.log(audio);
    const isCurrentSong2 = songUrl === audio.src;

    if (isCurrentSong2) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    } else {
      audio.src = songUrl;
      audio.play();
    }
    this.hindiSongs.forEach((song: any, i: number) => {
      song.isPlaying2 = i === index && !audio.paused;
    });
  }

  // ENGLISH SONGS
  playSong3(songUrl: string, index: number) {
    const audio: HTMLAudioElement = this.audioPlayer.nativeElement;
    console.log(audio);
    const isCurrentSong3 = songUrl === audio.src;

    if (isCurrentSong3) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    } else {
      audio.src = songUrl;
      audio.play();
    }
    this.englishSongs.forEach((song: any, i: number) => {
      song.isPlaying3 = i === index && !audio.paused;
    });
  }
}
