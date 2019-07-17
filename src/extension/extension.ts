import * as vscode from "vscode"
import putOnAHat from "./commands/putOnAHat"
import { StatusBarIndicator } from "./StatusBarIndicator"
import { QuickPickRack } from "./QuickPickRack"

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

  const boundPutOnAHat = () => putOnAHat(rack, indicator)

  context.subscriptions.push(
    vscode.commands.registerCommand(CommandID.PutOnAHat, boundPutOnAHat),
  )
}

export function deactivate() {}
