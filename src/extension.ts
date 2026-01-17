import * as vscode from "vscode";


const IDLE_THRESHOLD_MS = 8 * 60 * 1000;     // 8 minutes idle
const COOLDOWN_MS = 25 * 60 * 1000;          // 25 minutes between popups
const CHECK_INTERVAL_MS = 60 * 1000;         // check every 1 minute


let lastActivityTime = Date.now();
let lastPopupTime = 0;


const MESSAGES = [
  "Be honest — are you coding or just staring?",
  "This was supposed to take 10 minutes.",
  "Still thinking… or just procrastinating?",
  "Another tab didn’t fix the problem, did it?",
  "Did you forget what you were solving?",
  "Momentum died somewhere, didn’t it?",
  "Context switching again?",
  "Debugging or hoping?",
];

function markActivity() {
  lastActivityTime = Date.now();
}

function getIdleTimeMs(): number {
  return Date.now() - lastActivityTime;
}

function getRandomMessage(): string {
  return MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
}


function startSmartRealityChecks() {
  setInterval(() => {
    const now = Date.now();
    const idleTime = getIdleTimeMs();

    if (idleTime < IDLE_THRESHOLD_MS) return;

  
    if (now - lastPopupTime < COOLDOWN_MS) return;


    if (!vscode.window.activeTextEditor) return;

    // Fire popup
    lastPopupTime = now;

    vscode.window.showInformationMessage(
      getRandomMessage()
    );

  }, CHECK_INTERVAL_MS);
}


export function activate(context: vscode.ExtensionContext) {
  console.log("Reality Check extension activated");

  // Track user activity
  context.subscriptions.push(
    vscode.workspace.onDidChangeTextDocument(markActivity),
    vscode.window.onDidChangeActiveTextEditor(markActivity),
    vscode.window.onDidChangeWindowState(markActivity)
  );

  // Start smart background scheduler
  startSmartRealityChecks();
}

export function deactivate() {
  // nothing to clean up
}
