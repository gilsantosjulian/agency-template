import { curryN, pathSatisfies, test } from 'ramda'

export default (
  nodes
) => {

  const filerPathByRegex = curryN(
    2, (
      ...args
    ) => {

      return pathSatisfies(
        test(
          args[1]
        ), args[0]
      )

    }
  )
  const filterByFileName = filerPathByRegex(
    [ 'fields', 'fileName' ]
  )
  const filterByDirectoryName = filerPathByRegex(
    [ 'fields', 'directoryName' ]
  )

  const toolbar = nodes.filter(
    filterByFileName(
      /toolbar/
    )
  )
  const pages = nodes.filter(
    filterByDirectoryName(
      /pages/
    )
  )

  return {
    pages,
    toolbar: toolbar[0],
  }

}
