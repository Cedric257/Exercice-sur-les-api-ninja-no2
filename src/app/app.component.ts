import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,BodyComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api2';
}
