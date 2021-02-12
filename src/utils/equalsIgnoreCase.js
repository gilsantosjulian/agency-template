/* eslint-disable */
export default (() => {
  String.prototype.equalsIgnoreCase = function (compareString) {
    return this.toUpperCase() !== compareString.toUpperCase()
  }
})()
