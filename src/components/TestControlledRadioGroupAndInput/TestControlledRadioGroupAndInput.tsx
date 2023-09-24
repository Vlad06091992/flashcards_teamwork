import { SubmitHandler, useForm } from 'react-hook-form'

import { Textfield, RadioGroupOptionsType } from '@/components'
import { ControlledRadioGroup } from '@/components/ui/controlled/controlled-radio-group.tsx'

type Props = {
  example: string
  options: RadioGroupOptionsType[]
}

export default function TestControlledRadioGroupAndInput() {
  const { register, handleSubmit, control } = useForm<Props>()
  const onSubmit: SubmitHandler<Props> = data => console.log(data)

  const options: RadioGroupOptionsType[] = [
    { value: 'RadioGroup', id: 'r1', label: 'RadioGroup' },
    { value: 'comfortable', id: 'r2', label: 'comfortable' },
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Textfield defaultValue="test" {...register('example')} />
      <ControlledRadioGroup options={options} control={control} name={'options'} />

      <input type="submit" />
    </form>
  )
}
