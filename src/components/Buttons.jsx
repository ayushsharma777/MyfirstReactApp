import React from "react";

function Buttons({ btnName, setText, text }) {
  const onButtonClick = () => {
    if (btnName == "=") {
      const result = eval(text);
      setText(result);
    } else if (btnName == "C") {
      setText("");
    } else {
      const newvalue = text + btnName;
      setText(newvalue);
    }
  };
  return (
    <div>
      <button className="btn-Operators m-2" onClick={onButtonClick}>
        {btnName}
      </button>
    </div>
  );
}

export default Buttons;
