import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ViewDeal from './components/ViewDeal';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals/:title" element={<ViewDeal />} />
      </Routes>
    </>
  );
}

export default App;
