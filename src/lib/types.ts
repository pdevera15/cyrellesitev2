export enum Form {
  INITIAL,
  LOADING,
  SUCCESS,
  ERROR,
}

export type FormState = {
  state: Form
  message?: string
}
