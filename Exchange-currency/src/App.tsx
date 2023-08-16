import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Rates } from './components/Rates';
import { Converter } from './components/Converter';
import { Headings } from './components/Headings';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={
              <>
                <Headings heading="Currency exchange calculator" />
                <Converter />
              </>
            }/>
            <Route path="/currencies" element={
              <>
                <Headings heading="Currency rates" />
                <Rates />
              </>
            } />
          </Routes>
        </Content>  
      </div>
    </BrowserRouter>
  );
}

export default App;
