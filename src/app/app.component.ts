import { Component } from '@angular/core';
import { argv } from 'process';
import { environment as nonProd } from 'src/environments/environment';
import { environment as prod } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isProduction = argv['encironment'] === 'prod';
  nonProdEnvVar: string;
  prodEnvVar: string;
  envVar: string;

  ngOnInit() {
    if (this.isProduction) {
      this.prodEnvVar = prod['GOOGLE_MAPS_URI'] ?? "No environment variable defined";
    } else {
      this.nonProdEnvVar = nonProd['GOOGLE_MAPS_URI'] ?? "No environment variable defined";
    }
  }
}
