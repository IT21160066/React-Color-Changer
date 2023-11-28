import Square from "./Square";
import Input from "./Input";
import { useState } from "react";

function App() {

  const [colorValue, setColorValue] = useState('');
  return (
    <div className="App">
      <Square/>
      <Input/>
    </div>
  );
}

export default App;
