import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "lightning-snippets" is now active!'
  );

  let disposable = vscode.commands.registerCommand(
    'lightning-snippets.helloWorld',
    () => {
      vscode.window.showInformationMessage(
        'Hello World from Lightning Snippets!'
      );
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
