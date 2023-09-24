import { forwardRef, memo, Ref, SVGProps } from 'react'

const SvgElement = (Props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg

    </svg>
  )
}

const ForwardRef = forwardRef(SvgElement)

export default memo(ForwardRef)
