import { Component, Input, output, signal } from "@angular/core";
// EventEmitter, Output only need to be imported if you're not using signals
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
  // @Output() calculate = new EventEmitter<InvestmentInput>(); //manual, no signal approach
  //manually created output
  //only use decorator if using the event emitter
  // enteredInitialInvestment = '0';
  // enteredAnnualInvestment = '0';
  // enteredExpectedReturn = '5';
  // enteredDuration = '10';

  calculate = output<InvestmentInput>();
  //typescript infers type from intial signal value, type is explicitaly defined in app.component
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');
  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment(), //turns into string
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment(),

      //() with signals
    });
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('0');
    this.enteredDuration.set('0');
  }
}

