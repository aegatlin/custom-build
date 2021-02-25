export type JSONPayload<D> = {
  error?: {}
  data?: D
}

export type FullDef = {
  word: string
  defs: string[]
}
