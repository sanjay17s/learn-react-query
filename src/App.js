import { useState } from "react";


const App = () => {
  
  const [currentPage,setCurrentPage] = useState('home');
  
  const showAboutPage = () => (
    setCurrentPage('about')
  )

  const showHomePage = () => (
    setCurrentPage('home')
  )
  if(currentPage === 'home') {
   return (
    <div>
      <h1>Home </h1>
      <button onClick={showAboutPage}>ABOUT Page</button>
    </div>
   )
  }
  else {
    return (
      <div>
      <h1>About </h1>
      <button onClick={showHomePage}>Home Page</button>
    </div>

    )
  }
  

}

export default App;
