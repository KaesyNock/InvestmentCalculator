import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import type { InvestmentInput } from '../../investment-input.model';


@Component({
selector: 'app-input',
standalone: true,
imports: [FormsModule],
templateUrl: './user-input.component.html',
styleUrl: './user-input.component.css',
})

export class InputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();
  //manually created output

  //only use decorator if using the event emitter

  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';
  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment, //turns into string
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment,
    })
  }
}

