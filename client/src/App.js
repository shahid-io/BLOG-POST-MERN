import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./App.css"
function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <h1>Home</h1>
      <Button variant="outline-dark" onClick={() => navigate("/create")}>NEXT</Button>
    </div>
  );
}

export default App;
