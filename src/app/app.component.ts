import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentCalculatorService } from './shared/services/investment-calculator.service';
import { InvestmentData } from './shared/models/investment-data.model';
import { InvestmentResult } from './shared/models/investment-result.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [NgIf, HeaderComponent, InvestmentResultsComponent, UserInputComponent]

})
export class AppComponent {
  investmentResults: InvestmentResult[] = [];

  constructor(private investmentCalculatorService: InvestmentCalculatorService) {
  }

  initiateCalculateInvestment(investmentData: InvestmentData) {
    this.investmentResults = this.investmentCalculatorService.calculateInvestmentResults(investmentData);
  }
}
