import { useState } from 'react'

import { Button, Card, Typography } from '../../ui'

import s from './personal-information.module.scss'

import { Camera, Edit } from '@/assets'
import { Textfield } from '@/components'

type Props = {
  email: string
  avatar: string
  name: string
  onLogout: () => void
  onAvatarChange: (newAvatar: string) => void
  onNameChange: (newName: string) => void
}
export const PersonalInformation = ({
  avatar,
  email,
  name,
  onAvatarChange,
  onNameChange,
  onLogout,
}: Props) => {
  const [editMode, setEditMode] = useState(false)
  // const [name, setName] = useState('')

  const handleAvatarChanged = () => {
    onAvatarChange('new Avatar')
  }
  const handleNameChanged = () => {
    setEditMode(true)
    onNameChange('New name')
  }
  const handleLogout = () => {
    onLogout()
  }

  const handleSaveName = () => {
    setEditMode(false)
  }

  return (
    <Card className={s.card}>
      <Typography variant="large" className={s.title}>
        Personal Information
      </Typography>
      <div className={s.container}>
        <div className={s.photoContainer}>
          <div>
            <img src={avatar} alt={'avatar'} />
            <button className={s.editAvatarButton} onClick={handleAvatarChanged}>
              <Camera />
            </button>
          </div>
        </div>
        {!editMode && (
          <>
            <div className={s.nameWithEditButton}>
              <Typography variant="h1" className={s.name}>
                {name}
              </Typography>
              <button onClick={handleNameChanged}>
                <Edit />
              </button>
            </div>
            <Typography variant="body2" className={s.email}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              {email}
            </Typography>
            <div className={s.buttonContainer}>
              <Button variant={'secondary'} onClick={handleLogout}>
                <span style={{ fontFamily: 'Material Icons' }} className="material-icons">
                  logout
                </span>
                Logout
              </Button>
            </div>

            <div className={s.editModeOn}></div>
          </>
        )}
      </div>
      {editMode && (
        <>
          <Textfield className={s.changeNameTextField} label={'Nickname'} />
          <Button className={s.saveNameButton} onClick={() => handleSaveName} fullWidth={true}>
            Save changes
          </Button>
        </>
      )}
    </Card>
  )
}
