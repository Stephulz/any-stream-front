import logo from './logo.svg';
import './App.css';
import ReactHlsPlayer from 'react-hls-player';
import ReactPlayer from 'react-player';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <p>Any Stream</p> */}
      {/*<ReactHlsPlayer
        url='http://localhost:8080/stream/start/Stephulz'
        autoplay={true}
        controls={true}
        width={500}
        height={375}
      />*/}
      {/* <ReactPlayer
        url='http://localhost:8080/stream/start/Stephulz'
        muted={true}
        playing={true}
        config={{
          file: {
            forceHLS: true
          }
        }}
        controls={true}
        width={500}
        height={375}
      /> */}
    </div>
  );
}

export default App;
