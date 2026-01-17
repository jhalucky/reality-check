import * as vscode from "vscode";
import { startRealityTimer, stopRealityTimer } from "./core/timer";
import { getRandomMessage } from "./core/messages";

export function activate(context: vscode.ExtensionContext) {
  console.log("Reality Check extension activated");

  // Manual command
  const hitCommand = vscode.commands.registerCommand(
    "reality-check.hit",
    () => {
      vscode.window.showInformationMessage(getRandomMessage());
    }
  );

  // Start timer automatically (every 30 minutes)
  startRealityTimer(1);

  context.subscriptions.push(hitCommand);
}

export function deactivate() {
  stopRealityTimer();
}
