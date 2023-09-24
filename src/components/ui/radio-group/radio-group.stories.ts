import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroupComponent, RadioGroupOptionsType } from '@/components'

const exampleOptions: RadioGroupOptionsType[] = [
  { label: 'some label 1', id: '1', value: 'some value 1' },
  { label: 'some label 2', id: '2', value: 'some value 2' },
  { label: 'some label 3', id: '3', value: 'some value 3' },
]

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroupComponent,
  tags: ['autodocs'],
  argTypes: {
    options: exampleOptions,
    disabled: [true, false],
    name: ['name1', 'name2'],

    // variant: {
    //   // options: ['primary', 'secondary', 'tertiary', 'link'],
    //   // control: { type: 'radio' },
    // },
  },
} satisfies Meta<typeof RadioGroupComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    disabled: false,
    options: exampleOptions,
  },
}

//
// export const Secondary: Story = {
//   args: {
//     variant: 'secondary',
//     children: 'Secondary Button',
//     disabled: false,
//   },
// }
// export const Tertiary: Story = {
//   args: {
//     variant: 'tertiary',
//     children: 'Tertiary Button',
//     disabled: false,
//   },
// }
// // export const Link: Story = {
// //     args: {
// //         variant: 'link',
// //         children: 'Tertiary Button',
// //         disabled: false,
// //     },
// // }
//
// export const FullWidth: Story = {
//   args: {
//     variant: 'primary',
//     children: 'Full Width Button',
//     disabled: false,
//     fullWidth: true,
//   },
// }
//
// export const Link: Story = {
//   args: {
//     as: 'a',
//     size: 'small',
//     label: 'Button',
//     children: 'this button is link',
//     variant: 'link',
//     href: 'https://www.google.com',
//   },
