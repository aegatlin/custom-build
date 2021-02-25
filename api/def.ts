import { NowRequest, NowResponse } from '@vercel/node'
import { getFullDef } from '../src/api'
import { FullDef, JSONPayload } from '../src/types'

export default async function (req: NowRequest, res: NowResponse) {
  const { word } = req.query
  const fullDef: FullDef = await getFullDef(word as string)
  const payload: JSONPayload<FullDef> = { data: fullDef }
  res.status(200).json(payload)
}
