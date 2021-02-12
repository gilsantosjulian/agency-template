import removeNumbersAndDashes from './removeNumbersAndDashes'
import toUpperCaseFirstChart from './toUpperCaseFirstChart'
import removeLanguageCode from './removeLanguageCode'

export default (
  fileName
) => {

  if (fileName == null || fileName === '' || typeof fileName !== 'string') return null

  let fileNameModified = removeNumbersAndDashes(
    fileName
  )
  fileNameModified = fileNameModified.trim()
  fileNameModified = toUpperCaseFirstChart(
    fileNameModified
  )
  fileNameModified = removeLanguageCode(
    fileNameModified
  )

  return fileNameModified

}
