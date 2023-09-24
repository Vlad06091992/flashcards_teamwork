import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './typography.tsx'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      // description to be shown in the tabl
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'body1',
        'body2',
        'subtitle1',
        'subtitle2',
        'caption',
        'overline',
        'link1',
        'link2',
        'error',
      ],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    variant: 'large',
    children: 'large',
  },
}

export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'Typography',
    color: 'white',
  },
}

export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'Typography',
    color: 'white',
  },
}
