import * as td from "testdouble"
import putOnAHat from "../../extension/commands/putOnAHat"

describe("Putting on a hat", function() {
  it("asks the indicator to set its text", function() {
    const indicator: any = td.object()

    putOnAHat(indicator)

    td.verify(indicator.setText("put on a hat"))
  })
})
