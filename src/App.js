
import './App.css';
import ImageSlidr from './componets/ImageSlider';
import { SliderData } from './componets/SliderData';

function App() {
  return (
    <>
    <div className="App">
      <ImageSlidr slides={SliderData}/>
    </div>
    </>
    
  );
}

export default App;
