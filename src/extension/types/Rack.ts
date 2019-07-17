import { Hat } from "./Hat"

export interface Rack {
  chooseHat(): Promise<Hat | null>
}
