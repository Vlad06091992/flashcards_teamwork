import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import s from './textfield.module.scss'

import { Typography } from '@/components'

export type TextfieldProps = {
  error?: string
  variant?: 'search' | 'visible'
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const Textfield = forwardRef<HTMLInputElement, TextfieldProps>(
  (
    {
      className,
      checked,
      defaultChecked,
      disabled,
      error,
      type,
      placeholder,
      variant,
      label,
      value,
      ...restProps
    },
    ref
  ) => {
    const [visible, setVisible] = useState(type == 'password')

    return (
      <div className={` ${disabled ? s.inputDisabled : ''} ${className} ${s.root}`}>
        <Typography variant="body2" as="h3" className={s.label}>
          {label}
        </Typography>
        {!variant && (
          <div>
            <input
              // label={'fs;ld'}
              ref={ref}
              disabled={disabled}
              placeholder={placeholder}
              type={type}
              className={` ${s.inputPrimary} ${s.inputStandart} ${error ? s.inputError : ''}  `}
              {...restProps}
            />
          </div>
        )}

        {variant == 'visible' && (
          <div style={{ position: 'relative' }}>
            {visible && (
              <div
                onClick={() => setVisible(!visible)}
                className={`material-icons ${s.iconVisible}`}
              >
                visibility
              </div>
            )}
            {!visible && (
              <div
                onClick={() => setVisible(!visible)}
                className={`material-icons ${s.iconVisible}`}
              >
                visibility_off
              </div>
            )}

            <input
              ref={ref}
              disabled={disabled}
              placeholder={placeholder}
              type={visible ? 'password' : ''}
              className={` ${s.inputPrimary} ${variant == 'visible' ? s.inputVisible : ''} ${
                error ? s.inputError : ''
              }  `}
              {...restProps}
            />
          </div>
        )}

        {variant == 'search' && (
          <div>
            <span className={`material-icons ${variant == 'search' ? s.iconSearch : ''}`}>
              search
            </span>
            <input
              ref={ref}
              disabled={disabled}
              placeholder={placeholder}
              type={type}
              className={` ${s.inputPrimary} ${variant == 'search' ? s.inputSearch : ''} ${
                error ? s.inputError : ''
              }  `}
              {...restProps}
            />
          </div>
        )}

        {error && (
          <Typography variant={'error'} className={s.error}>
            {error.toString()}
          </Typography>
        )}
      </div>
    )
  }
)

export default Textfield
