import { Indicator } from "../types/Indicator"
import { Rack } from "../types/Rack"

export default async function putOnAHat(rack: Rack, indicator: Indicator) {
  const hat = await rack.chooseHat()

  if (hat) {
    indicator.setText(hat.name)
  }
}
