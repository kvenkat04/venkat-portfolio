import { Component } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper'


@Component({
  selector: 'app-portfolio',
  imports: [MatChipsModule,MatIconModule,MatProgressBarModule,MatCardModule,MatStepperModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {


}
