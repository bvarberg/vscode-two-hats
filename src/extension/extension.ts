import * as vscode from "vscode"
import putOnAHat from "./commands/putOnAHat"
import { QuickPickRack } from "./QuickPickRack"
import { StatusBarIndicator } from "./StatusBarIndicator"

enum CommandID {
  PutOnAHat = "twoHats.putOnAHat",
}

export function activate(context: vscode.ExtensionContext) {
  const hats = [
    {
      name: "Adding functionality",
    },
    {
      name: "Refactoring",
    },
  ]
  const rack = QuickPickRack.fromHats(hats)
  const indicator = new StatusBarIndicator()
  context.subscriptions.push(indicator)

  const boundPutOnAHat = () => putOnAHat(rack, indicator)

  context.subscriptions.push(
    vscode.commands.registerCommand(CommandID.PutOnAHat, boundPutOnAHat),
  )
}

export function deactivate() {}
