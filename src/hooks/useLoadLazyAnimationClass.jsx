import { useEffect, useRef, useState } from 'react'

export default (
  { elementIds, options }
) => {

  const [ elementsWithAnimation, setElementsWithAnimation ] = useState(
    [ '' ]
  )

  const onElementIntercepted = (
    observedEntries
  ) => {

    observedEntries.forEach(
      (
        observedEntry
      ) => {

        if (
          observedEntry.isIntersecting
        && elementsWithAnimation.indexOf(
          observedEntry.target.id
        ) === -1
        ) {

          setElementsWithAnimation(
            (
              currentElementsWithAnimation
            ) => {

              return [ ...currentElementsWithAnimation, observedEntry.target.id ]

            }
          )

        }

      }
    )

  }

  const selector = elementIds
  .map(
    (
      elementId
    ) => {

      return `#${elementId}`

    }
  )
  .join(
    ','
  )
  const observer = useRef()

  useEffect(
    () => {

      observer.current = new IntersectionObserver(
        onElementIntercepted, options
      )
      const { current: currentObserver } = observer
      const elements = document.querySelectorAll(
        selector
      )

      if (elements.length) {

        elements.forEach(
          (
            element
          ) => {

            return currentObserver.observe(
              element
            )

          }
        )

      }

      return () => {

        if (currentObserver) currentObserver.disconnect()

      }

    }, []
  )

  useEffect(
    () => {

      observer.current = new IntersectionObserver(
        onElementIntercepted, options
      )
      const { current: currentObserver } = observer
      elementsWithAnimation
      .filter(
        (
          elementInViewPort
        ) => {

          return elementInViewPort

        }
      )
      .forEach(
        (
          elementInViewPort
        ) => {

          const element = document.querySelector(
            `#${elementInViewPort}`
          )
          element.classList.add(
            'animation'
          )
          currentObserver.unobserve(
            element
          )

        }
      )

    }, [ elementsWithAnimation ]
  )

  return elementsWithAnimation

}
