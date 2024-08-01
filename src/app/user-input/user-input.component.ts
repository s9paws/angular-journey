import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentData } from '../shared/models/investment-data.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() initiateCalculateInvestment = new EventEmitter<InvestmentData>()
  initialInvestment= "0";
  annualInvestment= "0";
  expectedReturn= "5";
  duration= "10";

  onCalculateClicked() {
    this.initiateCalculateInvestment.emit({
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      duration: +this.duration,
      expectedReturn: +this.expectedReturn
    });
  }
}
