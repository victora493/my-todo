import Todos from './components/todos/Todos'
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <div className="row">
            <Todos />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
