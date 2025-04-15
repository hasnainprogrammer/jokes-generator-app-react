import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function SavedJokes({ onRemoveJokeFromSavedJokes }) {
  try {
    const savedJokes = JSON.parse(localStorage.getItem("jokes"));
    return (
      <div className="mx-50" style={{ minHeight: "70vh" }}>
        <h1 className="text-xl my-8">Your Saved Jokes</h1>

        <div className="flex flex-col">
          {savedJokes.length > 0 ? (
            savedJokes.map((joke, index) => (
              <div
                className="flex justify-between items-center mb-4"
                key={index}
              >
                <p>
                  {joke.type === "single"
                    ? joke.joke
                    : `${joke.setup} ${joke.delivery}`}
                </p>
                <button
                  className="text-3xl text-red-500 cursor-pointer"
                  onClick={() => {
                    toast.success("Joke successfully removed from saved jokes");
                    onRemoveJokeFromSavedJokes(joke.id);
                  }}
                >
                  &#10084;
                </button>
              </div>
            ))
          ) : (
            <p className="text-center bg-gray-300 py-2 mb-6">
              No saved jokes :)
            </p>
          )}
        </div>
        <Link to="/">
          <span className="underline">Go Back</span>
        </Link>
      </div>
    );
  } catch (error) {
    return (
      <p className="text-center bg-gray-300 py-2 mb-6">No saved jokes :)</p>
    );
  }
}

export default SavedJokes;
