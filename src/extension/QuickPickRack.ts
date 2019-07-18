import * as vscode from "vscode"
import { Hat } from "./types/Hat"
import { Rack } from "./types/Rack"

class HatItem implements vscode.QuickPickItem {
  private _hat: Hat

  public constructor(hat: Hat) {
    this._hat = hat
  }

  public get label(): string {
    return this._hat.name
  }

  public toHat(): Hat {
    return this._hat
  }
}

export class QuickPickRack implements Rack {
  private _items: HatItem[]

  public static fromHats(hats: Hat[]) {
    const items = hats.map(h => new HatItem(h))
    return new QuickPickRack(items)
  }

  private constructor(items: HatItem[] = []) {
    this._items = items
  }

  public async chooseHat() {
    const pick = await vscode.window.showQuickPick(this._items)

    return pick ? pick.toHat() : null
  }
}
