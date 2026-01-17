export const REALITY_MESSAGES = [
  "You’ve been staring at this for too long.",
  "This bug is not worth your mental health.",
  "Stand up. Drink water.",
  "You are overthinking this.",
  "Close the laptop. Two minutes.",
  "Touch grass (respectfully)."
];

export function getRandomMessage(): string {
  return REALITY_MESSAGES[
    Math.floor(Math.random() * REALITY_MESSAGES.length)
  ];
}
