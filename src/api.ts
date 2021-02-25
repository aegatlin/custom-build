import * as WordPOS from 'wordpos'
import { FullDef } from './types'

const wordpos = new WordPOS()

export async function getFullDef(word): Promise<FullDef> {
  const defs = await wordpos.lookup(word).map(r => r.def)
  return { word, defs }
}
