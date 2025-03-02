export function helloWorld() {
  const greetings = [
    "Hello World!",
    "¡Hola Mundo!",
    "Bonjour le Monde!",
    "Hallo Welt!",
    "Ciao Mondo!",
    "Olá Mundo!",
    "こんにちは世界！",
    "你好，世界！",
    "Привет, мир!",
    "안녕하세요 세계!",
    "مرحبا بالعالم!",
    "नमस्ते दुनिया!",
    "Hej Världen!",
    "Merhaba Dünya!",
    "Hallo Wereld!",
  ];

  for (let i = greetings.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [greetings[i], greetings[j]] = [greetings[j], greetings[i]];
  }

  return greetings.slice(0, 10);
}
