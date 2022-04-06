export interface User {
  name: string
  birthday: string
  description: string
}

export interface HomeState {
  informations: User
}

export enum ActionTypes {
  UPDATE = 'UPDATE',
}
