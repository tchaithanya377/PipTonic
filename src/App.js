
import './App.css';
import ForexGuide from './components/ForexGuide';
import ForexSignals from './components/ForexSignals';
import GuideSection from './components/GuideSection';
import HighPerformanceSignals from './components/HighPerformanceSignals';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PerformanceSection from './components/PerformanceSection';
import StatsSection from './components/StatsSection';
import TradingStrategies from './components/TradingStrategies';
import WinningTrades from './components/WinningTrades';
import ForexServiceOverview from './components/ForexServiceOverview';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <ForexGuide />
      <StatsSection />
      <ForexSignals />
      <GuideSection />
      <PerformanceSection />
      <HighPerformanceSignals />
      <TradingStrategies />
      <WinningTrades />
      <ForexServiceOverview />
    </div>
  );
}

export default App;
