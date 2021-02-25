const WordPOS = require('wordpos')

const wordpos = new WordPOS();

async function lookup(word) {
  const res = await wordpos.lookup(word)
  return res
}

module.exports = { lookup }