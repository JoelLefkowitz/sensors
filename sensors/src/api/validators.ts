import { Validators } from "@angular/forms";
export const requiredNumeric = [
    Validators.required,
    Validators.pattern(/^-?([0-9]\d*)?$/),
];
