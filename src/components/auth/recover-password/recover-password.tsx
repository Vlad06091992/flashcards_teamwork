import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './recover-password.module.scss'

import { Button, Card, Typography } from '@/components'
import { ControlledTextfield } from '@/components/ui/controlled/controlled-textfield.tsx'

const schema = z.object({
  email: z.string().email().default(''),
})

type FormType = z.infer<typeof schema>
type Props = {
  onSubmit: (data: FormType) => void
}
export const RecoverPassword = ({ onSubmit }: Props) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  })

  const onSubmitHandler = (data: FormType) => {
    debugger
    onSubmit(data)
  }

  return (
    <Card className={s.card}>
      <Typography color={'white'} variant={'large'}>
        Forgot your password?
      </Typography>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className={s.form}>
          <ControlledTextfield
            className={s.email}
            control={control}
            name={'email'}
            label={'Email'}
          />
          <Typography className={s.instructions} variant={'body2'}>
            Enter your email address and we will send you further instructions
          </Typography>
          <Button fullWidth={true} className={s.button} type={'submit'}>
            Send Instructions
          </Button>
        </div>
      </form>
      <Typography className={s.caption} variant={'body2'}>
        Did you remember your password?
      </Typography>
      <Typography className={s.signUpLink} as={'div'} variant={'link2'}>
        Try logging in
      </Typography>
    </Card>
  )
}
