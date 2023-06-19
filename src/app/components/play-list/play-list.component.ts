import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SongSchema } from 'models/songSchema';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss'],
})
export class PlayListComponent {
  song: SongSchema = {};

  constructor(private api: ApiService,private router:Router) {
    this.song.category = 'Select a Category';
  }

  addSong(song: SongSchema) {
    // call api in service
    if (song.category == 'Malayalam') {
      alert(`${song.title} added to Malayalam songs successfully`);
      this.api.addMalayalamSong(song).subscribe({
        next: (res: any) => {
          console.log(res);
        },
        error: (err: any) => {
          console.log(err.message);
        },
      });
      // this.router.navigateByUrl('/malayalam');
    } else if (song.category === 'Hindi') {
      alert(`${song.title} added to Hindi songs successfully`);

      this.api.addHindiSong(song).subscribe({
        next: (res: any) => {
          console.log(res);
        },
        error: (err: any) => {
          console.log(err.message);
        },
      });
    } else {
      alert(`${song.title} added to English songs successfully`);
      this.api.addEnglishSong(song).subscribe({
        next: (res: any) => {
          console.log(res);
        },
        error: (err: any) => {
          console.log(err.message);
        },
      });
      this.router.navigateByUrl('/english');
    }
  }
  // clearForm(song:SongSchema) {
    
  //   song.title = '';
  // }
}
