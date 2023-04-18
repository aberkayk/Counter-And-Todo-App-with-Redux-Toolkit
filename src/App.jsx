import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { decrease, increase, setCounter } from "./redux/counterSlice";
import MainPage from "./pages/main-page";
import CounterPage from "./pages/counter-page";
import TodoPage from "./pages/todo-page";
import Header from "./components/header";


function App() {
  const { counterState } = useSelector(state => state)

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container py-5 text-center">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="counter" element={<CounterPage />} />
            <Route path="todo" element={<TodoPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>


  )
}

export default App
