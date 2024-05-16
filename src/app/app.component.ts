import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigationBarComponent } from './partials/navigation-bar/navigation-bar.component';
import { FooterComponent } from './partials/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    HomeComponent,
    NavigationBarComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  title = 'GCOLS';
}
