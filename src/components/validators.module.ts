import {EmptyStringValidatorDirective} from './universal/universal.directive';
import { NgModule } from '@angular/core';

import { CreditCardValidatorDirective } from './creditcard/creditcard.directive';
import { EmailValidatorDirective } from './email/email.directive';
import {
    IsInRangeValidatorDirective, IsNumberValidatorDirective,
    MaxValidatorDirective, MinValidatorDirective, WhiteSpaceValidatorDirective
} from './universal/universal.directive';
import { PasswordValidatorDirective } from './password/password.directive';

@NgModule({
    declarations: [CreditCardValidatorDirective,
        EmailValidatorDirective,
        PasswordValidatorDirective,
        IsInRangeValidatorDirective,
        IsNumberValidatorDirective,
        MaxValidatorDirective,
        MinValidatorDirective,
        WhiteSpaceValidatorDirective,
        EmptyStringValidatorDirective],
    exports: [CreditCardValidatorDirective,
        EmailValidatorDirective,
        PasswordValidatorDirective,
        IsInRangeValidatorDirective,
        IsNumberValidatorDirective,
        MaxValidatorDirective,
        MinValidatorDirective,
        WhiteSpaceValidatorDirective,
        EmptyStringValidatorDirective]
})
export class ValidatorsModule { }
