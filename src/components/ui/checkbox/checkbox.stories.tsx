import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxComponent } from './checkbox.tsx'

const meta = {
  title: 'Components/Checkbox',
  component: CheckboxComponent,

  tags: ['autodocs'],
  argTypes: {
    checked: [true, false],
    disabled: [true, false],
  },
} satisfies Meta<typeof CheckboxComponent>

export default meta
type Story = StoryObj<typeof meta>

export const BaseExample: Story = {
  render: args => {
    const [checked, setChecked] = useState(false)

    return (
      <CheckboxComponent
        {...args}
        label="Click here"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    )
  },
}

export const Disabled: Story = {
  render: args => {
    const [checked, setChecked] = useState(false)

    return (
      <CheckboxComponent
        {...args}
        disabled={true}
        label="Click here"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    )
  },
}

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Checked',
  },
}

export const NotChecked: Story = {
  args: {
    checked: false,
    label: 'Not Checked',
  },
}
