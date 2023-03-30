export type CollectionNames = 'materials' | 'points'

export type FirestoreDocument = {
  id: string
  title: string
}

export type PointTypes = 'Pavimento' | 'Frente' | 'Encimera' | 'Entrepaños'

export interface DBPoint {
  id: string
  coordX: number
  coordY: number
  name: PointTypes
}

export interface DBMaterial {
  id: string
  layers: { [x: string]: string }
  materialPreview: string
  name: string
  points: string[]
}
