let lastActivityTime = Date.now();

export function markActivity() {
  lastActivityTime = Date.now();
}

export function getIdleTimeMs(): number {
  return Date.now() - lastActivityTime;
}
