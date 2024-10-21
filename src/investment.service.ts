import { Injectable, signal } from "@angular/core";

import type { InvestmentInput } from "./investment-input.model";

@Injectable({providedIn: 'root'})
//decorator passing an object provided at root, lets Angular inject that service and components can request service to be injected

export class InvestmentService {

  resultsData?:{
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number
    }[];

  calculateInvestmentResults(data: InvestmentInput) {
    const {initialInvestment, duration, expectedReturn, annualInvestment} = data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    //without signal
    this.resultsData = annualData;
    // this.resultsData.set(annualData);
    //with signal
  }
}
