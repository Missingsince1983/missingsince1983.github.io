export type ErrorForm = {
  [k: string]: boolean
}

export type FieldForm = {
  value: string;
  validators: {
    [k: string]: (val: string) => boolean;
  };
  errors?: ErrorForm;
}

export type Form = {
  [k: string]: FieldForm
}
