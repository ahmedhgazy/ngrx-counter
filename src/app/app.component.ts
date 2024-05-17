import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterControlsComponent, CounterOutputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngrx-playaround';
}
