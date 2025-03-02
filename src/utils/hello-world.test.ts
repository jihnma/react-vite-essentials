import { describe, it, expect } from "vitest";
import { helloWorld } from "./hello-world";

describe("helloWorld function", () => {
  it("should return an array of 10 greetings", () => {
    const result = helloWorld();
    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(10);
  });

  it("should return different greetings each time due to randomization", () => {
    // Not guaranteed to be different but highly likely
    const result1 = helloWorld();
    const result2 = helloWorld();
    expect(result1).not.toEqual(result2);
  });

  it("should only contain greetings from the predefined list", () => {
    const validGreetings = [
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

    const result = helloWorld();
    result.forEach((greeting) => {
      expect(validGreetings).toContain(greeting);
    });
  });

  it("should not have duplicate greetings", () => {
    const result = helloWorld();
    const uniqueResults = [...new Set(result)];
    expect(uniqueResults).toHaveLength(result.length);
  });
});
