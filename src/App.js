import Clock from "./Components/Clock";
import Weather from "./Components/Weather";
import Dailyverse from "./Components/Dailyverse";
import Editable from "./Components/Editable";

function App() {
  return (
    <div className="bg-dark gap-4 grid grid-cols-3" style={{ height: '100vh', width: '100vw' }}>
      <div className="flex flex-col col-span-1 p-5 relative">
        <Clock />
        <Editable name="currentReads" />
      </div>
      <div className="flex flex-col col-span-1">
        <Dailyverse />
        <Editable name="customBoxOne" />
        <Editable name="customBoxTwo" />
      </div>
      <div className="col-span-1">
        <Weather />
        <Editable name="currentWrites" />
        <Editable name="memorization" />
      </div>
    </div>
  );
}

export default App;
