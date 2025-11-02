
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <main className="flex-grow-1">


        <Router>
           <Header />
          <Routes>
           
            <Route path="/" element={<Home />} />
            {/* <Route path="/news" element={<News />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reporters" element={<Reporters />} /> */}
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
