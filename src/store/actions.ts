import { Actions as SampleActions } from './sample'

export type RootActions =
  | SampleActions[keyof SampleActions]
