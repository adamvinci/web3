import { Context as cmptContext } from "../../contexts/countersContext.jsx";
import { useContext } from "react";
import GoodButton from "../Button/GoodButton";
import OkButton from "../Button/OkButton";
import BadButton from "../Button/BadButton";
import ResetButton from "../Button/ResetButton";

function App() {
  const { goodCounter, badCounter, okCounter } = useContext(cmptContext);

  return (
    <>
      <li>{goodCounter} <GoodButton /></li>
      <li>{okCounter} <OkButton /></li>
      <li>{badCounter} <BadButton /></li>
      <ResetButton />
    </>
  )
}

export default App
