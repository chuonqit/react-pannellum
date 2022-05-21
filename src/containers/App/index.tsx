import React from "react";
import Pannellum from "rc-pannellum";

type Props = {};

const App = (props: Props) => {
  const [input, setInput] = React.useState<string>(
    "https://i.imgur.com/G7t9QD9.jpg"
  );

  return (
    <div className="wrapper">
      <Pannellum
        className="viewer"
        style={{
          width: "600px",
          height: "300px",
        }}
        autoLoad
        panorama={input}
      />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default App;
