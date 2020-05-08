const nodeJieBa = require('nodejieba')
const fs = require('fs')

class FileOperation {
  /**
   *读取文件名称为filename中的内容，并将其中包含的所有词语放进words中
   *
   * @param {*} filePath
   * @param {*} words
   * @memberof FileOperation
   */
  readFile(filePath, words = { total: 0, list: [] }) {
    if (!filePath) {
      console.log('filePath is null')
      return false
    }
    const isExists = fs.existsSync(filePath)
    if (isExists) {
      const data = fs.readFileSync(filePath, {
        encoding: 'utf-8'
      })
      const array = data.split(/[\s|\\n|,]+/)
      words.total = array.length
      words.list = array
      return true
    } else {
      return false
    }
  }
}

module.exports = FileOperation
