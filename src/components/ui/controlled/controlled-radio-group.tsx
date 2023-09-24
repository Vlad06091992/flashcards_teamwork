import { Control, FieldValues, useController, Path } from 'react-hook-form'

import { RadioGroupComponent } from '@/components'
import { RadioGroupPropsTypes } from '@/components/ui/radio-group/radio-group.tsx'

type Props<TFieldValues extends FieldValues> = RadioGroupPropsTypes & {
  control: Control<TFieldValues>
  name: Path<TFieldValues>
}

export const ControlledRadioGroup = <TFieldValues extends FieldValues>({
  control,
  name,
  ...restProps
}: Props<TFieldValues>) => {
  const {
    field: { onChange },
  } = useController({
    name,
    control,
    rules: { required: true },
  })

  return <RadioGroupComponent onValueChange={onChange} {...restProps} />
}
