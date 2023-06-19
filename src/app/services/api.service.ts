import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SongSchema } from 'models/songSchema';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  BASE_URL = 'https://waveme-backend.onrender.com';
  // BASE_URL = 'https://localhost:3000';
  constructor(private http: HttpClient) {}

  // get malayalam songs api
  getMalayalamSongs() {
    return this.http.get(`${this.BASE_URL}/malayalamSongs`);
  }
  // get all malayalam songs api
  getAllMalayalamSongs() {
    return this.http.get(`${this.BASE_URL}/allMalayalamSongs`);
  }

  // get hindi songs api
  getHindiSongs() {
    return this.http.get(`${this.BASE_URL}/hindiSongs`);
  }
  // get all hindi songs api
  getAllHindiSongs() {
    return this.http.get(`${this.BASE_URL}/allHindiSongs`);
  }

  // get english songs api
  getEnglishSongs() {
    return this.http.get(`${this.BASE_URL}/englishSongs`);
  }
  // get all english songs api
  getAllEnglishSongs() {
    return this.http.get(`${this.BASE_URL}/allEnglishSongs`);
  }

    // Add  MALAYALAM Song
    addMalayalamSong(song:SongSchema) {
      // api Call
      return this.http.post(`${this.BASE_URL}/allMalayalamSongs`, song);
    }
      // Add HINDI Song
      addHindiSong(song:SongSchema) {
        // api Call
        return this.http.post(`${this.BASE_URL}/allHindiSongs`, song);
      }
      // Add ENGLISH Song
      addEnglishSong(song:SongSchema) {
        // api Call
        return this.http.post(`${this.BASE_URL}/allEnglishSongs`, song);
      }
  
  deleteMalayalamSongs(id: any) {
    return this.http.delete(`${this.BASE_URL}/allMalayalamSongs/${id}`);
  }
  deleteEnglishSongs(id: any) {
    return this.http.delete(`${this.BASE_URL}/allEnglishSongs/${id}`);
  }
  deleteHindiSongs(id: any) {
    return this.http.delete(`${this.BASE_URL}/allHindiSongs/${id}`);
  }
}
