import { ActionsUnion, createAction } from '@martin_hotell/rex-tils'
import { ActionTypes, User } from './types'

export const Actions = {
  update: (user: User) => createAction(ActionTypes.UPDATE, { user }),
}

export type ActionsObjectTypes = ActionsUnion<typeof Actions>
