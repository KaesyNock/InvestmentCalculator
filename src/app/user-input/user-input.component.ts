import { Component, Input, signal } from "@angular/core";
import { NgModel } from "@angular/forms";
// EventEmitter, Output only need to be imported if you're not using signals
// output only needed if you don't have a service in this case
import { FormsModule } from "@angular/forms";
// import type { InvestmentInput } from '../../investment-input.model'; //not necessary when using a service
import { InvestmentService } from "../../investment.service"


@Component({
selector: 'app-input',
// standalone: true,
// imports: [FormsModule],
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

  // calculate = output<InvestmentInput>(); //no service.ts approach
  //typescript infers type from intial signal value, type is explicitaly defined in app.component
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

//tells Angular that is should inject an instance of the investment service as a value of the parameter into the constructor function
constructor(private investmentService: InvestmentService) {} //set type to service classname

onSubmit() {
  this.investmentService.calculateInvestmentResults({
    initialInvestment: +this.enteredInitialInvestment(), //turns into string
    duration: +this.enteredDuration(),
    expectedReturn: +this.enteredExpectedReturn(),
    annualInvestment: +this.enteredAnnualInvestment(),
  });

    //WITHOUT SERVICE
    // this.calculate.emit({
    //   initialInvestment: +this.enteredInitialInvestment(), //turns into string
    //   duration: +this.enteredDuration(),
    //   expectedReturn: +this.enteredExpectedReturn(),
    //   annualInvestment: +this.enteredAnnualInvestment(),

      //() with signals
    //});

    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('0');
    this.enteredDuration.set('0');
  }
}

