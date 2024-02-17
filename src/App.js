import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Buttons from "./components/Buttons";
import { useState } from "react";
function App() {
  const buttons = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "0",
    "/",
    "=",
    "C",
  ];

  const [text, setText] = useState("");

  return (
    <div className="d-flex align-items-center justify-content-center flex-column vh-100">
      <div className="text-center cal-container p-5">
        <div className="heading">Calculator</div>
        <input
          type="text"
          disabled
          className="w-100 mt-2 mb-3 cal-input"
          placeholder="Enter some value to calculate"
          value={text}
          // onChange={(e) => {
          //   setText(e.target.value);
          // }}
        />
        <div className="d-flex  align-items-center justify-content-center button-container p-2">
          {buttons.map((button, index) => {
            return (
              <Buttons
                btnName={button}
                key={index}
                text={text}
                setText={setText}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
