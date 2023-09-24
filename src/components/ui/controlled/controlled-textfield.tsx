import { Control, FieldValues, Path, useController } from 'react-hook-form'

import { Textfield, TextfieldProps } from '@/components'

type ControlledTextfieldProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>
  name: Path<TFieldValues>
} & Omit<TextfieldProps, 'onChange' | 'value' | 'id' | 'name'>

export const ControlledTextfield = <TFieldValues extends FieldValues>({
  control,
  className,
  error,
  ...restProps
}: ControlledTextfieldProps<TFieldValues>) => {
  const {
    field: { value, onChange },
    fieldState: { error: err },
  } = useController({
    name: restProps.name,
    control,
    rules: { required: true },
  })

  return (
    <Textfield
      className={className}
      error={err?.message}
      onChange={onChange}
      value={value}
      {...restProps}
    />
  )
}
