import Router from "../src/containers/Router/router.jsx";
import './App.css';
import Footer from "../src/components/Footer/index.jsx"
// import Header from '../src/components/Header/index.jsx'
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Router />
      <Footer />
    </div>
  )
}

export default App;
