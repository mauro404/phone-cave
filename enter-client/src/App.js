import './App.css';
import axios from "axios";
import { Route, Routes } from "react-router-dom";

import Phones from './components/Phones';
import PhonesDetails from './components/PhonesDetails';

const [phones, setPhones] = useState([])

  useEffect(() => {
    fetchPhonesFromAPI();
  }, [])

  const fetchPhonesFromAPI = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/phones`)
    .then((response) => {
      setPhones(response.data);
    })
    .catch(e => console.log("error getting phoned from API", e));
  }

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/phones' element={<Phones phones={phones}/>} />
        <Route path='/phones/:id' element={<PhonesDetails phones={phones}/>} />
      </Routes>
    </div>
  );
}

export default App;
