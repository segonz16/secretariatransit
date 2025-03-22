import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  imports: [
    NavbarComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'transitfront';
}
