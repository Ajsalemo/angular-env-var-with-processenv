import { Component } from '@angular/core';
import { environment as prod } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  googleEnvVar: string;
  spotifyEnvVar: string;

  ngOnInit() {
    console.log(this.googleEnvVar);
    console.log(this.spotifyEnvVar);
    this.googleEnvVar = prod['GOOGLE_MAPS_URI'] ?? 'No environment variable defined';
    this.spotifyEnvVar = prod['SPOTIFY_API_URI'] ?? 'No environment variable defined';
  }
}
