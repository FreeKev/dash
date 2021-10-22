import Card from "./Components/Card";
import Clock from "./Components/Clock";
import Weather from "./Components/Weather";
import Dailyverse from "./Components/Dailyverse";

function App() {
  return (
    <div className="bg-dark gap-4 grid grid-cols-4" style={{ height: '100vh', width: '100vw' }}>
      <div className="flex flex-col p-5">
        <Card>
          My Dashboard
        </Card>
        {/* <Dailyverse /> */}
      </div>
      <div className="flex flex-col col-span-2 relative">
        <Clock />
      </div>
      <div>
        {/* <Weather /> */}
      </div>
    </div>
  );
}

export default App;
