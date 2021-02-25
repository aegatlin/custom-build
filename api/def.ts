// import { FullDef } from '../src/types'
import { NowRequest, NowResponse } from '@vercel/node'

export default async function (req: NowRequest, res: NowResponse) {
  const { word = 'elephant' } = req.query
  // const defs: FullDef[] = await getDefs(word)
  res.status(200).json({ oh: 'wow' })
}
