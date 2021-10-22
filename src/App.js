import Clock from "./Components/Clock";
import Weather from "./Components/Weather";
import Dailyverse from "./Components/Dailyverse";
import Editable from "./Components/Editable";

function App() {
  return (
    <div className="bg-dark gap-4 grid grid-cols-4" style={{ height: '100vh', width: '100vw' }}>
      <div className="flex flex-col p-5">
        <Editable name="currentReads" />
        <Editable name="currentWrites" />
        <Dailyverse />
      </div>
      <div className="flex flex-col col-span-2 relative">
        <Clock />
      </div>
      <div>
        <Weather />
        <Editable name="memorization" />
      </div>
    </div>
  );
}

export default App;
