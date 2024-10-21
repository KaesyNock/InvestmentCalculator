//can also use type instead of interface but interface is used more often

export interface InvestmentInput {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
 }

 export interface AnnualData {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
 }
