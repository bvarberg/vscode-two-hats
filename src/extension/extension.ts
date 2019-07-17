import * as vscode from "vscode"

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "two-hats" is now active!')

  let disposable = vscode.commands.registerCommand("twoHats.putOnAHat", () => {
    vscode.window.showInformationMessage("Hello VS Code")
  })

  context.subscriptions.push(disposable)
}

export function deactivate() {}
