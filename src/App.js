import { useState } from "react";
import GenerateJoke from "./components/GenerateJoke";
import SavedJokes from "./components/SavedJokes";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [savedJokes, setSavedJokes] = useState([]);

  // function to add joke to saved jokes
  const addToSavedJokes = (joke) => {
    setSavedJokes((prevState) => {
      localStorage.setItem(
        "jokes",
        !prevState.includes(joke) && JSON.stringify([...prevState, joke])
      );
      return prevState.includes(joke) ? prevState : [...prevState, joke];
    });
  };

  // function remove a joke from saved jokes
  const removeJokeFromSavedJokes = (jokeId) => {
    setSavedJokes((prevState) => {
      const updatedJokes = prevState.filter((joke) => joke.id !== jokeId);
      localStorage.setItem("jokes", JSON.stringify(updatedJokes));
      return updatedJokes;
    });
  };

  return (
    <Router>
      <div className="mx-50 flex justify-between items-center py-6">
        <Link to="/">
          <h1 className="text-2xl">Jokes Generator</h1>
        </Link>
        <Link to="/saved-jokes">
          <button className="text-4xl text-red-500 cursor-pointer">
            &#10084;
          </button>
        </Link>
      </div>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={<GenerateJoke onAddToSavedJokes={addToSavedJokes} />}
        />
        <Route
          path="/saved-jokes"
          element={
            <SavedJokes onRemoveJokeFromSavedJokes={removeJokeFromSavedJokes} />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
