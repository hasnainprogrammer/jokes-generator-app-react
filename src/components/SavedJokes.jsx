import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function SavedJokes({ onRemoveJokeFromSavedJokes }) {
  try {
    const savedJokes = JSON.parse(localStorage.getItem("jokes"));
    return (
      <div
        className="max-w-4xl mx-auto px-4 sm:px-6"
        style={{ minHeight: "70vh" }}
      >
        <h1 className="text-xl my-8">Your Saved Jokes</h1>

        <div className="flex flex-col gap-4 mb-16">
          {!savedJokes.length > 0 && (
            <p className="text-center bg-gray-300 py-2 mb-6">
              No saved jokes :)
            </p>
          )}

          {savedJokes.map((joke, index) => (
            <div
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-[#e3fafc] text-[#0b7285] rounded-md px-4 py-2 shadow"
              key={index}
            >
              <p className="mb-2 sm:mb-0">
                {joke.type === "single"
                  ? joke.joke
                  : `${joke.setup} ${joke.delivery}`}
              </p>
              <button
                className="text-2xl sm:text-3xl text-red-500 cursor-pointer"
                onClick={() => {
                  toast.success("Joke successfully removed from saved jokes");
                  onRemoveJokeFromSavedJokes(joke.id);
                }}
              >
                &#10084;
              </button>
            </div>
          ))}
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
