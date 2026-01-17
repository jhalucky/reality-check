const messages = [
  "Be honest — are you coding or just staring?",
  "Still thinking… or just procrastinating?",
  "This was supposed to take 10 minutes.",
  "Did you forget what you were trying to solve?",
  "Another tab won, didn’t it?"
];

export function getRandomMessage(): string {
  return messages[Math.floor(Math.random() * messages.length)];
}
