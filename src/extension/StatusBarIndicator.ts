import * as vscode from "vscode"
import { Indicator } from "./types/Indicator"

export class StatusBarIndicator implements vscode.Disposable, Indicator {
  private _statusBarItem: vscode.StatusBarItem

  public constructor() {
    this._statusBarItem = vscode.window.createStatusBarItem(
      vscode.StatusBarAlignment.Left,
    )
    this._statusBarItem.show()
  }

  public setText(text: string): void {
    this._statusBarItem.text = text
  }

  public dispose(): void {
    this._statusBarItem.dispose()
  }
}
