// Placeholder

// Styling
import "./App.css";

// React
import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

// JSON Files
import IATA from "./Json/airportCodes.json";

// Components
import NavBar from "./Components/NavBar";
import WordList from "./Components/WordList";
import WordGame from "./Components/WordGame";
import Definition from "./Components/Definition";

// Variables

// API
let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function App() {
    const [wordData, setWordData] = useState("");
    const [word, setWord] = useState("hello");
    const [myWords, setMyWords] = useState([]);
    const [definitions, setDefinitions] = useState([]);
    const [words, setWords] = useState([]);

    useEffect(() => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then((res) => res.json())
            .then((result) => {
                setWordData(result);
            });
    }, []);

    function handleFetch() {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then((res) => res.json())
            .then((result) => {
                setWordData(result);
            });
    }

    function handleReformation() {
        let tempWordArray = [];
        let tempDefinitionArray = [];
        myWords.forEach((element) => {
            tempWordArray.push(element[0].word);
            tempDefinitionArray.push(
                element[0].meanings[0].definitions[0].definition
            );
            setWords(tempWordArray);
            setDefinitions(tempDefinitionArray);
        });
    }

    function handleClick() {
        setWordData({
            title: "Finding Another Word...",
        });
        fetch(`https://random-word-api.herokuapp.com/word?number=10`)
            .then((res) => res.json())
            .then((result) => {
                let myWord = result[Math.floor(Math.random() * result.length)];
                setWord(myWord);
                fetch(
                    `https://api.dictionaryapi.dev/api/v2/entries/en/${myWord}`
                )
                    .then((res) => res.json())
                    .then((result) => {
                        setWordData(result);
                        if (result.title) {
                            setWordData({
                                title: "Finding Another Word",
                            });
                            handleClick();
                        }
                    });
            });
    }

    function handleSearch(event) {
        if (event.code === "Enter") {
            let searchedWord = event.target.value;

            setWordData({
                title: "Finding Your Word...",
            });
            fetch(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`
            )
                .then((res) => res.json())
                .then((result) => {
                    setWordData(result);
                    if (result.title) {
                        setWordData({
                            title: "Could not find your word.",
                        });
                        handleClick();
                    }
                });
        }
    }

    function handleRemoveFromList(data) {
        setMyWords(
            myWords.filter((word) => {
                return word[0].word !== data.word;
            })
        );
        handleReformation();
    }

    function handleAddToList() {
        myWords.push(wordData);
        setMyWords(myWords);
        handleReformation();
    }

    function handleSound() {
        let current = wordData[0];
        let phonetics = current.phonetics[0].audio;
        let sound = "https:" + phonetics;
        let audio = new Audio(sound);

        audio.play();
    }

    return (
        <div className="dictionary">
            <NavBar />

            <Route path={["/React-App"]} exact>
                <div className="center">
                    <input
                        onKeyPress={handleSearch}
                        className="Search"
                        type="text"
                        placeholder="Search a Word"
                    />

                    <Definition data={wordData} />
                    <div className="buttons">
                        <button onClick={handleSound} className="button">
                            Sound
                        </button>
                        <button onClick={handleClick} className="button">
                            Next Word
                        </button>
                        <button onClick={handleAddToList} className="button">
                            Add to List
                        </button>
                    </div>
                </div>
            </Route>

            <Route path="/my-words" exact>
                <WordList data={myWords} remove={handleRemoveFromList} />
            </Route>

            <Route path="/word-game" exact>
                <WordGame words={words} definitions={definitions} />
            </Route>
        </div>
    );
}

export default App;
