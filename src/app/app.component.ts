import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioComponent } from "./components/portfolio/portfolio.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My-Portfolio';
}
