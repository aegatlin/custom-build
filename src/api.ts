import WordPOS from 'wordpos'
import { FullDef } from './types'

const wordpos = new WordPOS()

export async function getFullDef(word: string): Promise<FullDef> {
  const wordposResponseArray = await wordpos.lookup(word)
  const defs = wordposResponseArray.map(response => response.def)
  return { word, defs }
}
