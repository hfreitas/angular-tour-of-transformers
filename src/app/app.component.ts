import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'transformer';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBj93ETESrxlHFkM8MgHmi3uxI1onP8J_w",
      authDomain: "angular-tour-of-transformers.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
