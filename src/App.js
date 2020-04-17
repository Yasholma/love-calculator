import React, { useState } from "react";
import Form from "./component/form/Form";
import "./App.css";
import DisplayResult from "./component/result/DisplayResult";

import logo from "./assets/logo.png";
import loadingImage from "./assets/loading.svg";

function App() {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchResult = async ({ firstName, lastName }) => {
        setLoading(true);
        let result = await fetch(
            `https://love-calculator.p.rapidapi.com/getPercentage?fname=${firstName}&sname=${lastName}`,
            {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "love-calculator.p.rapidapi.com",
                    "x-rapidapi-key":
                        "f8527e0bffmshf41db89ad83a163p193eb9jsnc86622439a18",
                },
            },
        )
            .then(response => {
                return response.json();
            })
            .then(data => {
                setLoading(false);
                return data;
            })
            .catch(err => {
                setLoading(false);
                setError(true);
                console.log(err);
            });

        setResult(result);
    };

    const getResult = data => {
        fetchResult(data);
    };

    return (
        <div className="App">
            <div className="App__brand">
                <img src={logo} alt="ReactCTech" className="brand__logo" />
                <h2 className="brand__name">ReactCyberTech</h2>
                <button className="reset" onClick={() => setResult(null)}>
                    Reset
                </button>
            </div>
            {!result ? (
                <div className="App__heading">
                    <p className="App__text">
                        You have been crushing on that girl/boy? LOVE CALCULATOR
                        is here for you.
                    </p>
                </div>
            ) : (
                <p className="note">Na Joke ooo, no take am serious.</p>
            )}

            {!result ? <Form getResult={getResult} /> : null}

            {loading ? (
                <div className="loading">
                    <img src={loadingImage} alt="loading" />
                </div>
            ) : !error ? (
                result ? (
                    <DisplayResult result={result} />
                ) : null
            ) : (
                <div className="error">an error occured: network issues</div>
            )}
        </div>
    );
}

export default App;
