import react, { useState} from 'react';
import './App.css';
import Dropdown from './Components/Dropdown/Dropdown'
import Loader from './Components/Loading/Loader';
import Search from './Components/Search/Search';


function App() {
 
  const [term, setTerm] = useState('nombre')
  const [renderSearch, setRenderSearch] = useState(false)
  
  function handleRenderSearch(){
    setRenderSearch(true)
  }
  function changeTermDropdown(term) {
    setTerm(term)
    return term
  }

  return (
    <div className="App">
      { renderSearch ? <Search changeTermDropdown={changeTermDropdown} term={term}/> : <Loader/>}
      <Dropdown handleRenderSearch={handleRenderSearch}  changeTermDropdown={changeTermDropdown} />  
    </div>
  );
}

export default App;
