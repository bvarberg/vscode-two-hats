import * as vscode from 'vscode';

let hat: vscode.StatusBarItem;

const hatOptions = [
	{
		label: 'Adding functionality',
	},
	{
		label: 'Refactoring',
	}
];

export function activate(context: vscode.ExtensionContext) {
	hat = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, -100);
	context.subscriptions.push(hat);

	const putOnAHat = vscode.commands.registerCommand('twoHats.putOnAHat', () => {
		pickHat(hatOptions);
		hat.show();
	});
	context.subscriptions.push(putOnAHat);
}

async function pickHat(hats: vscode.QuickPickItem[]) {
	const chosenHat = await vscode.window.showQuickPick(hats, {
		placeHolder: 'Pick a hat...',
	});

	if (!chosenHat) {
		return;
	}

	hat.text = chosenHat.label;
}

export function deactivate() {}
