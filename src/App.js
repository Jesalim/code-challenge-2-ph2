import "./App.css";
import NavBar from "../components/Navbar";
import DataFetching from "../components/Datafetch";
import BotCollection from "../components/BotCollection";
import BotArmy from "../components/YourBotArmy";


function App() {
  return (
    <div>
      <NavBar />
      <BotArmy/>
      <DataFetching/>
      <BotCollection/>
    </div>
  );
}

export default App;