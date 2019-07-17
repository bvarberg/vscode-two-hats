import * as td from "testdouble"
import { Indicator } from "../../extension/types/Indicator"
import putOnAHat from "../../extension/commands/putOnAHat"

describe("Putting on a hat", function() {
  it("asks the indicator to set its text", function() {
    const indicator = td.object<Indicator>()

    putOnAHat(indicator)

    td.verify(indicator.setText("put on a hat"))
  })
})
