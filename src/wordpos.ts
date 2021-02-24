const WordPOS = require('wordpos')

const wordpos = new WordPOS();

wordpos.lookup('elephant', (res) => {
  console.log(res)
})

module.exports = async function lookup(word) {
  const res = await wordpos.lookup(word)
  return res
}