import { Component, Input } from '@angular/core';
import { InvestmentResult } from '../shared/models/investment-result.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [NgFor],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input() investmentResults: InvestmentResult[] = [];
}
