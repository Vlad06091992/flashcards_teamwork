import * as RadioGroup from '@radix-ui/react-radio-group'
import { RadioGroupIndicator, RadioGroupProps } from '@radix-ui/react-radio-group'

import style from './radio-group.module.scss'

import { Typography } from '@/components'

export type RadioGroupOptionsType = {
  value: string
  id: string
  label: string
}

export type RadioGroupPropsTypes = {
  options: RadioGroupOptionsType[]
} & RadioGroupProps

export const RadioGroupComponent = ({
  options,
  disabled,
  onChange,
  ...restProps
}: RadioGroupPropsTypes) => (
  <div>
    <RadioGroup.Root
      disabled={disabled}
      onValueChange={() => onChange}
      className="RadioGroupRoot"
      aria-label="View density"
      {...restProps}
    >
      {options.map(el => {
        return (
          <div
            className={disabled ? style.disabled : ''}
            key={el.id}
            style={{ position: 'relative', display: 'flex', alignItems: 'center', margin: '10px' }}
          >
            <RadioGroup.Item
              className={style.RadioGroupItem}
              value={el.value}
              id={el.id}
              key={el.id}
            >
              <RadioGroupIndicator className={style.RadioGroupIndicator} />
            </RadioGroup.Item>

            <Typography
              style={{ marginLeft: '6px', color: 'white' }}
              variant={'body2'}
              as={'label'}
              htmlFor={el.value}
            >
              <label htmlFor={el.id}> {el.label}</label>
            </Typography>
          </div>
        )
      })}
    </RadioGroup.Root>
  </div>
)
