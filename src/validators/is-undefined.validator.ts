import { ValidationOptions, ValidateIf } from "class-validator";

export const IsUndefined = (validationOptions?: ValidationOptions) => {
  return (obj: any, property: string): any => {
    return ValidateIf(
      (o: Record<string, unknown>) => o[property] !== undefined,
      validationOptions
    )(obj, property);
  };
};

export default IsUndefined;
