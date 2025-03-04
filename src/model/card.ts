import { MantineColor } from "@mantine/core"

export interface Card {
  readonly id: string
  title: string
  body: string
  isDone: boolean
  color?: MantineColor
  badges: string[]
}
