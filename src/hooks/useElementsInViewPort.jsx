import { useEffect, useRef, useState } from 'react'

export default (
  { elementIds, options }
) => {

  const [ elementsInViewPort, setElementsInViewPort ] = useState(
    [ '' ]
  )

  const onElementIntercepted = (
    observedEntries
  ) => {

    observedEntries.forEach(
      (
        observedEntry
      ) => {

        if (observedEntry.isIntersecting) {

          setElementsInViewPort(
            (
              currentElementsInViewPort
            ) => {

              return [ ...currentElementsInViewPort, observedEntry.target.id ]

            }
          )

        } else {

          setElementsInViewPort(
            (
              currentElementsInViewPort
            ) => {

              return currentElementsInViewPort.filter(
                (
                  elementInViewPort
                ) => {

                  return observedEntry.target.id !== elementInViewPort

                }
              )

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

  return elementsInViewPort

}
