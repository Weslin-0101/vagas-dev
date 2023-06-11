import { Validation } from "@/presentation/protocols/validation"
import { RequiredFieldValidation, ValidationComposite } from "@/validation/validators";

export const makeUserValidation = (): ValidationComposite => {
    const validations: Validation[] = [];
    for (const field of ["name", "job"]) {
        validations.push(new RequiredFieldValidation(field))
    }
    return new ValidationComposite(validations)
}