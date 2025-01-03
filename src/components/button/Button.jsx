import Link from 'next/link'
import clsx from 'clsx'

import classes from './button.module.css'


const variantStyles={
    primary:classes.primary,
    secondary:classes.secondary
}




export function Button({ variant = 'primary', className, ...props }) {
    className = clsx(variantStyles[variant], className)
  
    return typeof props.href === 'undefined' ? (
      <button className={className} {...props} />
    ) : (
      <Link className={className} {...props} />
    )
  }
  