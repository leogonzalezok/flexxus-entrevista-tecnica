import Home from "./pages/Home/Home";
import StoreProvider from "./store/StoreProvider";


function App() {
  return (
    <StoreProvider>
      <Home/>
    </StoreProvider>
  );
}

export default App;
