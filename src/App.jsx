import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals/:title" element={<h1>Deals</h1>} />
      </Routes>
    </>
  );
}

export default App;
