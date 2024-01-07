import AddOpinion from "../AddOpinion/AddOpinion";
import ListOpinions from "../ListOpinions/ListOpinions";
import { Context as theme } from "../../contexts/ThemeContext";
import { useContext } from "react";
import Footer from "../Footer/Footer";
const App = () => {
  const { getCurrentThemeDetails } = useContext(theme);
  return (
    <div style={{ color: getCurrentThemeDetails().primaryTextColor, backgroundColor: getCurrentThemeDetails().backgroundColor }}>
      <ListOpinions />
      <AddOpinion />
      <Footer />
    </div>

  )
}

export default App;