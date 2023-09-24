import { Ref } from 'react'

import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { Path, useForm } from 'react-hook-form'
import { string, z } from 'zod'

import s from './sign-up.module.scss'

import { Button, Card, Typography } from '@/components'
import { ControlledTextfield } from '@/components/ui/controlled/controlled-textfield.tsx'
import { useSignUpMutation } from '@/services/auth/auth.ts'

const Schema = z
  .object({
    email: z.string().email().default(''),
    // passError: z.string(),
    password: z.string().min(3, { message: 'Minimum password length 3 characters' }).default(''),
    confirmPassword: z.string(),
  })
  .superRefine((val, ctx) => {
    if (val.password != val.confirmPassword) {
      // console.log(val, ctx)
      ctx.addIssue({
        path: ['confirmPassword'],
        code: z.ZodIssueCode.custom,
        message: 'Password mismatch',
        fatal: false,
      })
    }
  })

// type PassError = {
//   passError?: {
//     message: string
//     ref?: Ref<string>
//     type: 'custom'
//   }
// }
// type Props = {
//   onSubmit: (data: FormType) => void
// }
export type FormType = z.infer<typeof Schema>
// export const SignUp = ({ onSubmit }: Props) => {
export const SignUp = () => {
  const { handleSubmit, control, setError } = useForm<FormType>({
    resolver: zodResolver(Schema),
  })

  const [signUp, { error }] = useSignUpMutation()

  if (
    error &&
    'status' in error &&
    'data' in error &&
    error.status === 400 &&
    typeof error.data == 'object' &&
    error.data &&
    'errorMessages' in error.data
  ) {
    debugger
    setError('email', { type: 'custom', message: error.data.errorMessages[0] })
  }

  const onSubmitHandler = (data: FormType) => {
    const { confirmPassword, ...restData } = data

    signUp(restData)
  }

  return (
    <Card className={s.card}>
      <DevTool control={control} />

      <Typography color={'white'} variant={'large'}>
        Sign up
      </Typography>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className={s.form}>
          <ControlledTextfield control={control} name={'email'} label={'Email'} />
          <ControlledTextfield
            variant={'visible'}
            control={control}
            name={'password'}
            type={'password'}
            label={'Password'}
          />

          <ControlledTextfield
            variant={'visible'}
            control={control}
            name={'confirmPassword'}
            type={'password'}
            label={'Confirm Password'}
          />
        </div>
        <Button fullWidth={true} className={s.button} type={'submit'}>
          Sign up
        </Button>
      </form>

      <Typography className={s.caption} as={'div'} variant={'body2'}>
        Already have an account ?
      </Typography>
      <Typography className={s.signUpLink} as={'div'} variant={'link2'}>
        Sign in
      </Typography>
    </Card>
  )
}
