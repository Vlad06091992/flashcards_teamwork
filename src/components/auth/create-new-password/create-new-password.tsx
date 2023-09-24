import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './create-new-password.module.scss'

import { Button, Card, Typography } from '@/components'
import { ControlledTextfield } from '@/components/ui/controlled/controlled-textfield.tsx'

const Schema = z.object({
  password: z.string().min(3, { message: 'минимальная длина пароля 3 символа' }).default(''),
})

type FormType = z.infer<typeof Schema>
type Props = {
  onSubmit: (data: FormType) => void
}

export const CreateNewPassword = ({ onSubmit }: Props) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(Schema),
  })

  const onSubmitHandler = (data: FormType) => {
    onSubmit(data)
  }

  return (
    <Card className={s.card}>
      <Typography color={'white'} variant={'large'}>
        Create new password
      </Typography>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className={s.form}>
          <ControlledTextfield
            className={s.email}
            variant={'visible'}
            control={control}
            name={'password'}
            type={'password'}
            label={'Password'}
          />
        </div>
        <Typography className={s.instructions} variant={'body2'}>
          Create new password and we will send you further instructions to email
        </Typography>

        <Button fullWidth={true} className={s.button} type={'submit'}>
          Create New Password
        </Button>
      </form>
    </Card>
  )
}
