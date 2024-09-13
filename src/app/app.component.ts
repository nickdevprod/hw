import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message: string;
  counter: number;
  intervalId: any;

  constructor(){
    this.message = "string interpolation is useful"
    this.counter = 0;
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.counter++;
    }, 1000);  

    setTimeout(() => {
      clearInterval(this.intervalId);
    }, 20000);
  }

}
