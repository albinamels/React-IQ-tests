import { useState } from "react";
import { Input, Button } from "reactstrap";

export const Textsplitter2 = () => {
  const [inputWords, setInputWords] = useState(""); // input string
  const splittedWords = inputWords.split(" "); // array of splitted input

  const handleClear = () => setInputWords("");

  return (
    <>
      <div className="textspliter">
        <Input
          type="text"
          onChange={(e) => setInputWords(e.target.value)}
          value={inputWords}
        />

        <ul>
          {/* {splittedWords.map((word) => ( */}
          {inputWords.split(" ").map((word) => (
            <li> {word} </li>
          ))}
        </ul>

        <Button onClick={handleClear}>Clear</Button>
      </div>
    </>
  );
};
