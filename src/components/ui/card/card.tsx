import React, { ComponentPropsWithoutRef } from 'react'

import s from './card.module.scss'

type Props = ComponentPropsWithoutRef<'div'> & {}
// const Card: FC<Props> = ({ props, ref }) => ({
//   return <div {...props}></div>
// })

export const Card = React.forwardRef<HTMLDivElement, Props>(({ className, ...restProps }, ref) => {
  return <div className={`${className} ${s.root}`} ref={ref} {...restProps}></div>
})
