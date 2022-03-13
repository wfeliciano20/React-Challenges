import {useState} from 'react';

function App() {

  const createRandomRGBValue = () => {
  return Math.floor(Math.random() * 256);
  };

  const [red, setRed] = useState(createRandomRGBValue());
  const [green, setGreen] = useState(createRandomRGBValue());
  const [blue, setBlue] = useState(createRandomRGBValue());

  const handleClick = () => {
    setRed(createRandomRGBValue());
    setGreen(createRandomRGBValue());
    setBlue(createRandomRGBValue());
  };

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Click me for color change</h1>
      <div 
        style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '100px auto',
                height: '300px',
                width: '300px',
                backgroundColor: `rgb(${red}, ${green}, ${blue})`
                }}
        onClick={handleClick}
      >
    <h2>{`rgba(${red}, ${green}, ${blue})`}</h2>
      </div>
    </div>
  );
}



export default App;
