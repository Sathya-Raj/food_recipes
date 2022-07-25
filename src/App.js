
import './App.css';
import './key';
import Axios from "axios";
function App() {
  
  const API_KEY="7fe8c8505c1246ea9b24a76aff3eded8"
  
  var url=`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=chicken&maxFat=25&number=2`
 async function getRecipes(){
    var result= await Axios.get(url);
    console.log(result.data);
  }

  return (
    <div className="App" onClick={getRecipes} >
      heloo
    </div>
  );
}

export default App;
