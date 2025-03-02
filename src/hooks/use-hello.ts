import { useState } from "react";
import { helloWorld } from "@/utils/hello-world";

export function useHello() {
  const [hello, setHello] = useState("Hello World!");

  function sayHello() {
    const [h] = helloWorld();
    setHello(h);
  }
  return { hello, sayHello };
}
