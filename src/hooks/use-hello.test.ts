import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useHello } from "./use-hello";

// Mock the module - this gets hoisted to the top of the file
vi.mock("@/utils/hello-world", () => {
  return {
    helloWorld: vi.fn().mockImplementation(() => ["Hello World!"]),
  };
});

// Import the mocked module AFTER the vi.mock call
import { helloWorld } from "@/utils/hello-world";

// Type assertion to help TypeScript understand it's a mock
const mockedHelloWorld = helloWorld as unknown as ReturnType<typeof vi.fn>;

describe("useHello hook", () => {
  beforeEach(() => {
    // Clear mock calls between tests
    mockedHelloWorld.mockClear();
    // Default mock implementation
    mockedHelloWorld.mockReturnValue(["Hello World!"]);
  });

  it('should initialize with "Hello" as the default value', () => {
    const { result } = renderHook(() => useHello());
    expect(result.current.hello).toBe("Hello World!");
  });

  it("should update hello state when sayHello is called", () => {
    // Set up the mock return value for this specific test
    const mockGreeting = "Bonjour le Monde!";
    mockedHelloWorld.mockReturnValue([mockGreeting]);

    const { result } = renderHook(() => useHello());

    // Initial state
    expect(result.current.hello).toBe("Hello World!");

    // Call the sayHello function
    act(() => {
      result.current.sayHello();
    });

    // Check if state was updated correctly
    expect(result.current.hello).toBe(mockGreeting);
    expect(mockedHelloWorld).toHaveBeenCalledTimes(1);
  });

  it("should only use the first greeting from the helloWorld array", () => {
    // Mock an array with multiple greetings
    const mockGreetings = ["こんにちは世界！", "Hola Mundo!", "Hello World!"];
    mockedHelloWorld.mockReturnValue(mockGreetings);

    const { result } = renderHook(() => useHello());

    act(() => {
      result.current.sayHello();
    });

    // Should only use the first greeting
    expect(result.current.hello).toBe(mockGreetings[0]);
  });
});
