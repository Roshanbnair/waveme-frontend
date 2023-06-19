import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-hindi',
  templateUrl: './hindi.component.html',
  styleUrls: ['./hindi.component.scss']
})
export class HindiComponent {
  // VARIABLES

  hindiSongs: any = [];
  isPlaying1: boolean = true;
  isPlaying2: boolean = true;
  isPlaying3: boolean = true;
  isLoading: boolean = false;
  searchKey: string = '';
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;

  constructor(private api: ApiService) { }
  
  // DISPLAY ALL SONGS WHEN OPENIN THE PAGE
  getHindiSongs() {
    this.api.getAllHindiSongs().subscribe({
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
  }
  ngOnInit(): void {
    // Get all malayalam songs
    this.getHindiSongs();
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
    this.hindiSongs.forEach((song: any, i: number) => {
      song.isPlaying1 = i === index && !audio.paused;
    });
  }

    // delete song
    deleteSong(id: any) {
      this.api.deleteHindiSongs(id).subscribe({
        next: (res:any) => {
          console.log(res);
          this.getHindiSongs();
        },
        error: (err: any) => {
          console.log(err);
        }
      })
    }
}
