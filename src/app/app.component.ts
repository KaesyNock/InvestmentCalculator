
import { Component } from "@angular/core";

// import { InvestmentInput } from '../investment-input.model';

// import { HeaderComponent } from './header/header.component';
// import { InputComponent } from './user-input/user-input.component';
// import { InvestmentResultsComponent } from './investment-results/investment-results.component';



@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [
  //   AppComponent,
  //   HeaderComponent,
  //   InputComponent,
  //   InvestmentResultsComponent,

  // ],

  //standalone method
  templateUrl: './app.component.html',
})
export class AppComponent {}
  // ALL OF THIS IS WITHOUT A SERVICE
  // resultsData = signal<{
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number
  //   }[]| undefined>(undefined);

  //WITHOUT SIGNALS
  // resultsData?:  {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number
  // }[];
  //signals can manage state that is changing

  //copied without function keyword

  //method without a Service
  // onCalculateInvestmentResults(data: InvestmentInput)
  // {
  //   const {initialInvestment, duration, expectedReturn, annualInvestment} = data;
  //   const annualData = [];
  //   let investmentValue = initialInvestment;

  //   for (let i = 0; i < duration; i++) {
  //     const year = i + 1;
  //     const interestEarnedInYear = investmentValue * (expectedReturn / 100);
  //     investmentValue += interestEarnedInYear + annualInvestment;
  //     const totalInterest =
  //       investmentValue - annualInvestment * year - initialInvestment;
  //     annualData.push({
  //       year: year,
  //       interest: interestEarnedInYear,
  //       valueEndOfYear: investmentValue,
  //       annualInvestment: annualInvestment,
  //       totalInterest: totalInterest,
  //       totalAmountInvested: initialInvestment + annualInvestment * year,
  //     });
  //   }

  //   // this.resultsData = annualData; with signal
  //   this.resultsData.set(annualData);
  //   //with signal
  // }

