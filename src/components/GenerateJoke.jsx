import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { toast } from "react-toastify";

const API_URL = `https://v2.jokeapi.dev/joke/Any`;

function GenerateJoke({ onAddToSavedJokes }) {
  const [joke, setJoke] = useState(null);
  const [turnHeartIconRed, setTurnHeartIconRed] = useState(false);

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setJoke(data);
    };

    fetchJoke();
  }, []);

  const generateJoke = async () => {
    setJoke(null);
    const response = await fetch(API_URL);
    const data = await response.json();
    setTurnHeartIconRed(false);
    setJoke(data);
  };

  return (
    <div className="bg-[#0b7285] text-[#e3fafc] max-w-4xl mx-auto flex flex-col justify-center items-center space-y-4 p-6 sm:p-10 mt-10 shadow-lg text-center">
      <p className="text-lg">
        {joke ? (
          joke.type === "single" ? (
            joke.joke
          ) : (
            `${joke.setup} ${joke.delivery}`
          )
        ) : (
          <Loader />
        )}
      </p>
      <div>
        <button
          className={
            turnHeartIconRed
              ? "text-3xl text-red-500 cursor-pointer transition hover:text-4xl"
              : "text-3xl text-[#fff9db] cursor-pointer transition hover:text-4xl"
          }
          onClick={() => {
            setTurnHeartIconRed(true);
            toast.success(
              "Joke saved successfully! click on the  top right heart icon to see all of your saved jokes."
            );
            onAddToSavedJokes(joke);
          }}
        >
          &#10084;
        </button>
      </div>
      <button
        className="mt-4 bg-[#fff9db] text-[#0b7285] font-medium py-2 px-4 cursor-pointer rounded-sm"
        onClick={generateJoke}
      >
        Generate Joke
      </button>
    </div>
  );
}

export default GenerateJoke;
