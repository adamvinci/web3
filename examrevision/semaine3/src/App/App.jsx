import { useEffect, useState } from "react";
import Button from "../Button/Button"
import Compteur from "../Compteur/Compteur";
import Loading from "../Loading/Loading";
const App = () => {
  const [click, setClick] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })
  const [loading, setLoading] = useState(true);
  //JSON.parse(localStorage.getItem("click"))
  setTimeout(() => setLoading(false), 3000)
  const handleClick = (e) => {
    const type = e.target.dataset.type;
    if (type === "good") {
      setClick({ ...click, good: click.good + 1 });
    }
    if (type === "neutral") {
      setClick({ ...click, neutral: click.neutral + 1 });
    }
    if (type === "bad") {
      setClick({ ...click, bad: click.bad + 1 });
    }
  }
  useEffect(() => localStorage.setItem("click", JSON.stringify(click)))
  if (loading) {
    return <Loading />
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={handleClick} />
      <Button text="neutral" handleClick={handleClick} />
      <Button text="bad" handleClick={handleClick} />
      <h1>Statistic</h1>
      <Compteur {...{ click }} />
    </div>
  )
}

export default App;