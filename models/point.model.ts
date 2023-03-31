export type PointTypes = 'Pavimento' | 'Frente' | 'Encimera' | 'Entrepaños'

export interface DBPoint {
  id: string
  coordX: number
  coordY: number
  name: PointTypes
}
