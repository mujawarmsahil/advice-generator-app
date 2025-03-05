import { useEffect, useState } from 'react';
import './App.css';
import Card from "./components/Card";
import useMessage from './hooks/UseMessage';

function App() {
  const [message, setMessage] = useState("");
  const [id, setId] = useState();
  const fetchMessage = async () => {
    const data = await useMessage();
    // console.log(data);
    // console.log(typeof data);
    
    setMessage(data.advice);
    setId(data.id)
  };
  useEffect(() => {
    fetchMessage();
  }, []);

  const shuffleMessage = () => {
    fetchMessage();
  }

  return (
    
    <div className="App">
      <Card message={message} id={id} onClick={shuffleMessage}/>
    </div>
  );
}

export default App;
