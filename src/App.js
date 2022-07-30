import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import MasonryManual from './Masonry/MasonryManual';
import MasonryFunctional from './Masonry/MasonryFunctional';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
          <Link to="/">Manual</Link>
          <Link to="/functional">Functional</Link>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/functional" element={<MasonryFunctional />} />
            <Route path="/" element={<MasonryManual />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
