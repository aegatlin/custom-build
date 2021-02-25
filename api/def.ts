import { NowRequest, NowResponse } from '@vercel/node'
import { getFullDef } from '../src/api'
import { FullDef, JSONPayload } from '../src/types'

const isBadOrigin = (req: NowRequest): boolean => {
  const originWhitelist = ['http://localhost:3000', 'https://www.gatlin.io']
  return !originWhitelist.includes(req.headers.origin)
}

export default async function (req: NowRequest, res: NowResponse) {
  if (isBadOrigin(req)) {
    res.status(400)
    return
  }

  res.setHeader('Access-Control-Allow-Origin', req.headers.origin)
  const { word } = req.query
  const fullDef: FullDef = await getFullDef(word as string)
  const payload: JSONPayload<FullDef> = { data: fullDef }
  res.status(200).json(payload)
}
