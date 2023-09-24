import type { Meta, StoryObj } from '@storybook/react'

import { PersonalInformation } from '@/components'

const meta = {
  title: 'Profile/PersonalInformation',
  component: PersonalInformation,
  tags: ['autodocs'],
} satisfies Meta<typeof PersonalInformation>

export default meta
type Story = StoryObj<typeof meta>

export const BaseExample: Story = {
  args: {
    name: 'Vlad',
    email: 'some@email.ru',
    avatar: 'https://cs14.pikabu.ru/post_img/big/2023/03/24/10/1679679686187592531.png',
    onLogout: () => {
      console.log('logout')
    },
    onAvatarChange: () => {
      console.log('newAvatar')
    },
    onNameChange: () => {
      debugger
      console.log('newNAme')
    },
  },
}
