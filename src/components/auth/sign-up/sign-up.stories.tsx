import type { Meta, StoryObj } from '@storybook/react'

import { SignUp } from './sign-up.tsx'

const meta = {
  title: 'SignIn/SignUp',
  component: SignUp,
  tags: ['autodocs'],
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const BaseExample: Story = {
  args: {
    onSubmit: data => {
      // console.log(data)
    },
  },
}
