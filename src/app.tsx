import { Button } from "@/ui/button";
import { useHello } from "./hooks/use-hello";

function HelloWorld() {
  const { hello, sayHello } = useHello();
  return <Button onClick={sayHello}>{hello}</Button>;
}

export default function App() {
  return <HelloWorld />;
}
