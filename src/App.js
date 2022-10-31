import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import { createContext, useState } from 'react';

// create context api here....
export const GlobalInfo = createContext();

function App() {
  const [color ,setColor] = useState("red");
  const [day ,setDay] = useState("") 
  const [wishList ,setWishList] = useState([]);

  // create a function to get data from child component
  const getDay = (item) =>{
    setDay(item);
  }
  const getList = (list) =>{
    setWishList(list)
  }

  console.log(11111,wishList)
  return (
    // wrap GlobalInfo variable as Provider for all child
    // send both funtion as props from Parent component
    <GlobalInfo.Provider value={{appColor:color,getDay:getDay,getList:getList}}>
    <div className="App">
      <h1>App Component</h1>
      <p>{day}</p>
      <div className='divlist'>
        <ul>
          {
            wishList.length > 0 ? "yes" : "no"
          }
          {
            wishList?.map((item,id)=>{
              return(
                <li key={id}>{item.title} === {item.discription}</li>
              )
            })
          }
        </ul>
      </div>
      <Home />
    </div>
    </GlobalInfo.Provider>
  );
}

export default App;
