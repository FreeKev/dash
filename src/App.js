import Card from "./Components/Card";
import Clock from "./Components/Clock";
import Weather from "./Components/Weather";

function App() {
  return (
    <div className="bg-dark" style={{ height: '100vh', width: '100vw' }}>
      <Card>
        My Dashboard
      </Card>
      <Clock />
      <Weather />
    </div>
  );
}

export default App;
