export default (
  fileName
) => {

  return fileName.replace(
    /\.[a-z]+$/i, ''
  )

}
