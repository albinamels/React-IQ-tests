import { useState } from "react";
import { Input, Button } from "reactstrap";

export const Textsplitter1 = () => {
  const [words, setWords] = useState([]);

  // const handleChange = (e) => setWords(e.target.value.split(" "));

  const handleClear = () => setWords([]);

  return (
    <div className="textspliter">
      <Input
        type="text"
        // onChange={(e) => handleChange(e)}
        // split an input string by white-space into array of words, update the state
        onChange={(e) => setWords(e.target.value.split(" "))}
      />

      <ul>
        {words.map((word) => (
          <li> {word}</li>
        ))}
      </ul>

      <Button onClick={handleClear}>Clear</Button>
    </div>
  );
};
