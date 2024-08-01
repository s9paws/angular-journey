import { Injectable } from "@angular/core";
import { InvestmentData } from "../models/investment-data.model";
import { InvestmentResult } from "../models/investment-result.model";

@Injectable({providedIn: 'root'})
export class InvestmentCalculatorService {
  calculateInvestmentResults(investmentData: InvestmentData): InvestmentResult[] {
    const annualData = [];
    let investmentValue = investmentData.initialInvestment;
  
    for (let i = 0; i < investmentData.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (investmentData.expectedReturn / 100);
      investmentValue += interestEarnedInYear + investmentData.annualInvestment;
      const totalInterest =
        investmentValue - investmentData.annualInvestment * year - investmentData.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: investmentData.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: investmentData.initialInvestment + investmentData.annualInvestment * year,
      });
    }
  
    return annualData;
  }
}