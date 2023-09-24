import type { Meta, StoryObj } from '@storybook/react'

import { RecoverPassword } from './'

const meta = {
  title: 'SignIn/RecoverPassword',
  component: RecoverPassword,
  tags: ['autodocs'],
} satisfies Meta<typeof RecoverPassword>

export default meta
type Story = StoryObj<typeof meta>

export const BaseExample: Story = {
  args: {
    onSubmit: data => {
      console.log(data)
    },
  },
}
