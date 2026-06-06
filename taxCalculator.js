import { taxBrackets } from './taxBrackets.js';

export function calculateTax(taxable_income) {

    for (var i = 0; i < taxBrackets.length; i++) {
        var tax_bracket = taxBrackets[i];
        if (tax_bracket.lower == null && taxable_income <= tax_bracket.higher) {
            return Number((taxable_income * tax_bracket.percentage).toFixed(2));
        }

        if ((taxable_income >= tax_bracket.lower && taxable_income <= tax_bracket.higher) || tax_bracket.higher == null) {
            return Number((tax_bracket.accumulatedTax + ((taxable_income - tax_bracket.lower) * tax_bracket.percentage)).toFixed(2));
        }
    }
}
