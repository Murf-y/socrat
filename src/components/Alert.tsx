'use client'
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { animated, useSpring } from '@react-spring/web'
import { useMeasure } from 'react-use'
import React, { FC } from 'react'
import clsx from 'clsx'

type AlertProps = React.ComponentPropsWithRef<'div'> & {
  variant: 'success' | 'info' | 'warning' | 'error'
  message: string
  className?: string
  open: boolean
  close?: () => void
  includeBorder?: boolean
}

export const Alert: FC<AlertProps> = ({
  variant = 'info',
  message = '',
  className,
  open,
  close,
  includeBorder,
  ...others
}) => {
  const [ref, { height }] = useMeasure<HTMLDivElement>()

  /**
   * @param {number} keys set to contentHeight so transition can be recalculated
   */

  const styles = useSpring({
    from: { scale: 0, opacity: 0, height: 0 },
    to: async (next) => {
      if (open) {
        await next({ height: height, config: { duration: 100 } })
        await next({ scale: 1, opacity: 1, config: { duration: 300 } })
      } else {
        await next({ scale: 0, opacity: 0, config: { duration: 200 } })
        await next({ height: 0, config: { duration: 50 } })
      }
    },
  })

  return (
    <animated.div
      {...others}
      className={clsx(
        'rounded-md h-0 scale-0 opacity-0',
        variant === 'info' && 'bg-background' + (includeBorder ? ' border-2 border-text' : ''),
        variant === 'success' && 'bg-teal-100' + (includeBorder ? ' border-2 border-teal-600' : ''),
        variant === 'warning' &&
          'bg-yellow-100' + (includeBorder ? ' border-2 border-yellow-600' : ''),
        variant === 'error' && 'bg-red-100' + (includeBorder ? ' border-2 border-red-600' : ''),
        className
      )}
      style={styles}
    >
      <div ref={ref}>
        <div className="p-4">
          <div className="flex items-center text-start align-middle justify-center">
            <div className="flex-shrink-0">
              {variant === 'info' && (
                <InformationCircleIcon className="w-5 h-5 text-text" aria-hidden="true" />
              )}
              {variant === 'success' && (
                <CheckCircleIcon className="w-5 h-5 text-teal-600" aria-hidden="true" />
              )}
              {variant === 'warning' && (
                <ExclamationCircleIcon className="w-5 h-5 text-yellow-600" aria-hidden="true" />
              )}
              {variant === 'error' && (
                <ExclamationTriangleIcon className="w-5 h-5 text-red-600" aria-hidden="true" />
              )}
            </div>
            <div className="ml-3">
              <p
                className={clsx(
                  'text-xs md:text-sm font-medium text-justify align-middle',
                  variant === 'info' && 'text-text',
                  variant === 'success' && 'text-teal-600',
                  variant === 'warning' && 'text-yellow-600',
                  variant === 'error' && 'text-red-600'
                )}
              >
                {message}
              </p>
            </div>
            {close && (
              <div className="pl-3 ml-auto">
                <div className="-mx-1.5 -my-1.5">
                  <button
                    onClick={() => close()}
                    type="button"
                    className={clsx(
                      'inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2',
                      variant === 'info' &&
                        'bg-background text-text hover:bg-black focus:ring-offset-text focus:ring-black',
                      variant === 'success' &&
                        'bg-teal-100 text-teal-600 hover:bg-teal-200 focus:ring-offset-teal-100 focus:ring-teal-600',
                      variant === 'warning' &&
                        'bg-yellow-100 text-yellow-600 hover:bg-yellow-200 focus:ring-offset-yellow-100 focus:ring-yellow-600',
                      variant === 'error' &&
                        'bg-red-100 text-red-600 hover:bg-red-200 focus:ring-offset-red-100 focus:ring-red-600'
                    )}
                  >
                    <span className="sr-only">Dismiss</span>
                    <XMarkIcon className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </animated.div>
  )
}

export default Alert
