import logo from './logo.svg';
import './App.css';
import Dashboard from "./componnents/Dashboard";
import AvRating from "./componnents/AvRating";
import Reviews from './componnents/Reviews';
import SentimentAnalysis from './componnents/SentimentAnalysis';
import Websitevisitors from './componnents/WebsiteVisitors';
import "./style.css";


function App() {
  return (
    <div className='container'>
      {/* <h1>React Static Components</h1> */}
      <Dashboard />
      <AvRating />
      <Reviews />
      <SentimentAnalysis />
      <Websitevisitors />

    </div>
  );
}

export default App;
