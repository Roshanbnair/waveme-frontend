import { Component , ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  isPlaying: boolean=false;

  toggleAudio() {

    // Access the audio player element
    const audio = this.audioPlayer.nativeElement;

    // Play the audio
    if (audio.paused) {
      audio.play();
      this.isPlaying = true;
      // Pause the audio
    } else {
      audio.pause();
      this.isPlaying = false;
    }
  }
  currentTime: string = '0:00';
  getCurrentTime() {
    const audio = this.audioPlayer.nativeElement;
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
    this.currentTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
}
