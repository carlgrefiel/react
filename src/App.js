
import './App.css';//to import the CSS
import {Routes, Route} from 'react-router-dom'//to import the library of ReactRouting (npm install react-router-dom@6)
import React from 'react';
import { UserProvider } from './provider/UserContext';


import HomePage from './components/HomePage';
import Mapping from './components/Mapping';
import ModeToggler from './components/ModeToggler';
import Promo from './components/Promo';
import Remainder from './components/Remainder';
import MealsList from './components/MealsList';
import Counter from './components/Counter';
import MealsProvider from './provider/MealsProvider';
import Reducer from './components/Reducer';
import pirate from './assets/images/pirateflag.jpg'
import Video from './components/Video';
import Calcu from './components/Calcu';
import TodoLists from './components/TodoLists';
import Form from './components/Form';
import FeedBack from './components/FeedBack';
import Goal from './components/Goal';
import Impure from './components/Impure';
import LoopName from './components/LoopName';
import FetchData from './components/FetchData';
import Usereducer from './components/Usereducer';
import Useref from './components/Useref';
import Main from './components/Main';
import CloneElement from './components/CloneElement';
import NavBar from './Navigation/NavBar';
import Login from './components/Login';
import MouseTracker from './components/MouseTracker';
import RenderProps from './components/RenderProps';




function App() {

  const handleSubmit = () => {
    console.log("Form Submitted");
  };

  const randomImage = "https://animecorner.me/wp-content/uploads/2022/01/roronoza-zoro-statue-in-japan.jpg";
  return(
    <UserProvider>
    <div className='App'>
      <NavBar />
      <div className='main'>
      <Routes>
          
            <Route path="/" element={<HomePage />} />
            <Route path="/reducer" element={<Reducer />} />
            <Route path="/modetoggler" element={<ModeToggler />} />
            <Route path="/promo" element={<Promo />} />
            <Route path="/meals" element={  
                <MealsProvider>
                  <MealsList />
                  <Counter />
                </MealsProvider>} />
            <Route path="/mapping" element={<Mapping />} />
            <Route path="/remainder" element={<Remainder />} />
            <Route path="/image" element={<div>
              <img 
                src={pirate} //1st way to render image
                alt="pirateflag" />
                <img 
                height={100}//2nd way to render image
                src={require("./assets/images/luffy.png")} 
                alt="Luffy" />
                <img 
                height={300}//3rd way to render immage
                src={randomImage} 
                alt="randomiamge" />
            </div>}/>
            <Route path="/video" element={<Video />}/>
            <Route path="/calcu" element={<Calcu />}/>
            <Route path="/todo" element={<TodoLists />}/>
            <Route path="/form" element={<Form />}/>
            <Route path="/feedback" element={<FeedBack onSubmit={handleSubmit} />}/>
            <Route path="/goal" element={<Goal />}/>
            <Route path="/impure" element={<Impure />}/>
            <Route path="/loopname" element={<LoopName />}/>
            <Route path="/fetchdata" element={<FetchData />}/>
            <Route path="/useredu" element={<Usereducer />}/>
            <Route path="/useref" element={<Useref />}/>
            <Route path="/main" element={<Main />}/>
            <Route path="/cloneelement" element={<CloneElement />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/mousetracker" element={<MouseTracker />}/>
            <Route path="/renderprops" element={<RenderProps />}/>
      </Routes>
       
      </div>
      

    {/* // const date = new Date() 


    // const [ greet, setGreet ] = React.useState("Eat");

    //   function handleClick() {
    //     setGreet('Drink')
    //   }

    // console.log(React.useState("Hello")); */}

     



    {/* <Header hello={greet + " at Little Lemon"}/>
    <button onClick={handleClick}>Click Here</button> */}

    {/* <Main greet="Hello"/>
    <Btn />
    <ModeToggler/> */}

    {/* To easily change the promo */}
    {/* <Promo /> */}

    {/*   To display time from the computer */}
    {/* <Child message={date.toLocaleTimeString()}/> */}
    
    {/* <h1>A State value: {greet}</h1> */}


  </div>
  </UserProvider>
  );
}

export default App;
