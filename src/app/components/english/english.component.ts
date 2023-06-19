import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.scss']
})
export class EnglishComponent {
// VARIABLES

englishSongs: any = [];
isPlaying1: boolean = true;
isPlaying2: boolean = true;
isPlaying3: boolean = true;
isLoading: boolean = false;
@ViewChild('audioPlayer') audioPlayer!: ElementRef;

constructor(private api: ApiService) { }

// DISPLAY ALL SONGS WHEN OPENIN THE PAGE
  getEnglishSongs() {
    this.api.getAllEnglishSongs().subscribe({
      next: (result) => {
        setTimeout(() => {
          this.englishSongs = result;
          this.isLoading = true;
        }, 2000);
        console.log(result);
        // console.log(this.englishSongs[2])
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
ngOnInit(): void {
  // Get all malayalam songs
  this.getEnglishSongs();
}

// CLICK EVENT FUNCTION ON CLICKING THE PLAY/PAUSE BUTTON

// english SONGS
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
  this.englishSongs.forEach((song: any, i: number) => {
    song.isPlaying1 = i === index && !audio.paused;
  });
}
  
    // delete song
    deleteSong(id: any) {
      this.api.deleteEnglishSongs(id).subscribe({
        next: (res:any) => {
          console.log(res);
          this.getEnglishSongs();
        },
        error: (err: any) => {
          console.log(err);
        }
      })
    }
}
