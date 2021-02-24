const lookup = require('../src/wordpos')

module.exports = async function (req, res) {
  const { word = 'elephant' } = req.query
  const defs = await lookup(word)
  res.status(200).json(defs)
}