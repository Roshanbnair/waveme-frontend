import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-malayalam',
  templateUrl: './malayalam.component.html',
  styleUrls: ['./malayalam.component.scss']
})
export class MalayalamComponent implements OnInit{
  // VARIABLES
  malayalamSongs: any = [];
  isPlaying1: boolean = true;
  isLoading: boolean = false;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;

  constructor(private api: ApiService) { }
  
  // DISPLAY ALL SONGS WHEN OPENING THE PAGE
  getMalayalamSongs() {
    this.api.getAllMalayalamSongs().subscribe({
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
  }
  ngOnInit(): void {
    // Get all malayalam songs
    this.getMalayalamSongs();
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

  // delete song
  deleteSong(id: any) {
    this.api.deleteMalayalamSongs(id).subscribe({
      next: (res:any) => {
        console.log(res);
        this.getMalayalamSongs();
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

}
