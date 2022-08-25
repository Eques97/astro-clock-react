import logo from './logo.svg';
import './App.css';
import Scene from './Scene';

function App() {
  const date = new Date("2022-06-21T06:00:00.000+00:00");
  const timestamps = date.getTime() / 1000;
  return (
    <Scene timestamps={timestamps} />
  );
}

export default App;
