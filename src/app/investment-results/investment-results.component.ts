import { Component, Input, input, inject, computed } from '@angular/core';
// import { CurrencyPipe } from '@angular/common';

import { InvestmentService } from './../../investment.service';

@Component({
  selector: 'app-investment-results',
  // standalone: true,
  // imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})

export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultData());
  // results = this.investmentService.resultData.asReadonly();
  //method provided by angular read only means signal cannot be manipulated
}

  // get results() {
  //   return this.investmentService.resultData;
  // }

  // WITHOUT SERVICE
  // results = input<{
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number
  // }[]>();
  //}

  //manual
  // @Input() results?: {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number
  // }[];
  // }

