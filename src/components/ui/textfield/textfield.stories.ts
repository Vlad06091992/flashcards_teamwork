import type { Meta, StoryObj } from '@storybook/react'

import { Textfield } from '@/components'

const meta = {
  title: 'Components/Textfield',
  component: Textfield,
  tags: ['autodocs'],
  argTypes: {
    // variant: {
    //   options: ['primary', 'secondary', 'tertiary', 'link'],
    //   control: { type: 'radio' },
    // },
  },
} satisfies Meta<typeof Textfield>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    variant: 'visible',
    disabled: false,
  },
}

export const WithError: Story = {
  args: {
    variant: 'visible',
    disabled: false,
    error: 'Some error',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'visible',
    disabled: true,
  },
}

export const Search: Story = {
  args: {
    variant: 'search',
    disabled: false,
  },
}

//
// export const Secondary: Story = {
//   args: {
//     variant: 'search',
//     disabled: false,
//   },
// }
// export const Tertiary: Story = {
//   args: {
//     disabled: false,
//   },
// }
