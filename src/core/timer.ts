import * as vscode from "vscode";
import { getRandomMessage } from "./messages";

let timer: NodeJS.Timeout | null = null;

export function startRealityTimer(intervalMinutes: number) {
  stopRealityTimer();

  timer = setInterval(() => {
    vscode.window.showInformationMessage(getRandomMessage());
  }, intervalMinutes * 60 * 1000);
}

export function stopRealityTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}
