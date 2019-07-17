import * as td from "testdouble"
import { Indicator } from "../../extension/types/Indicator"
import { Rack } from "../../extension/types/Rack"

import putOnAHat from "../../extension/commands/putOnAHat"

describe("Putting on a hat", function() {
  afterEach(function() {
    td.reset()
  })

  it("chooses a hat from the rack", async function() {
    const rack = td.object<Rack>()
    const indicator = td.object<Indicator>()

    await putOnAHat(rack, indicator)

    td.verify(rack.chooseHat())
  })

  context("when a hat is chosen", function() {
    it("updates the indicator", async function() {
      const rack = td.object<Rack>()
      const indicator = td.object<Indicator>()
      td.when(rack.chooseHat()).thenResolve("a hat from the rack")

      await putOnAHat(rack, indicator)

      td.verify(indicator.setText("a hat from the rack"))
    })
  })
})
