export type Layers = { [x: string]: string }

export interface DBMaterial {
  id: string
  layers: Layers
  materialPreview: string
  name: string
  points: string[]
}
