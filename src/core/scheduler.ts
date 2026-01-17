import * as vscode from "vscode";
import { getIdleTimeMs } from "./activity";
import { getRandomMessage } from "./messages";

const IDLE_THRESHOLD_MS = 8 * 60 * 1000;     // 8 minutes
const COOLDOWN_MS = 25 * 60 * 1000;          // 25 minutes
const CHECK_INTERVAL_MS = 60 * 1000;         // 1 minute

let lastPopupTime = 0;

export function startSmartRealityChecks() {
  setInterval(() => {
    const now = Date.now();
    const idleTime = getIdleTimeMs();

    // Respect Zen Mode
    if (vscode.window.activeTextEditor?.options?.cursorStyle === undefined) {
      return;
    }

    if (idleTime < IDLE_THRESHOLD_MS) return;
    if (now - lastPopupTime < COOLDOWN_MS) return;

    lastPopupTime = now;

    vscode.window.showInformationMessage(
      getRandomMessage()
    );
  }, CHECK_INTERVAL_MS);
}
