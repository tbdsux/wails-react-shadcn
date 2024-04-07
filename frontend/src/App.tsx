import { useState } from "react";
import { Greet } from "../wailsjs/go/main/App";
import logo from "./assets/images/logo-universal.png";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  const [resultText, setResultText] = useState(
    "Please enter your name below 👇"
  );
  const [name, setName] = useState("");
  const updateName = (e: any) => setName(e.target.value);
  const updateResultText = (result: string) => setResultText(result);

  function greet() {
    Greet(name).then(updateResultText);
  }

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center">
          <img src={logo} id="logo" alt="logo" className="size-24" />
        </div>
        <div id="result" className="result">
          {resultText}
        </div>
        <div className="space-y-2">
          <Input
            id="name"
            className="input"
            onChange={updateName}
            autoComplete="off"
            name="input"
            type="text"
          />
          <Button className="btn" onClick={greet}>
            Greet
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
