import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Textsplitter1 } from "./components/Textsplitter1";
import { Textsplitter2 } from "./components/Textsplitter2";
import { Boxes } from "./components/Boxes";
import { Stars } from "./components/Stars";
import { Users } from "./components/Users";
import { UsersUseRef } from "./components/UsersUseRef";

function App() {
  return (
    <div className="App">
      <Boxes />
      <Stars />
      <Textsplitter1 />
      <Textsplitter2 />
      <Users />
      <UsersUseRef />
    </div>
  );
}

export default App;
