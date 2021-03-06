import React, {useState} from "react";
import Board from "./Board";
import { calculateWinner } from "../helper"


const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStep] = useState(0);
    const [xNext, setX] = useState(true);
    debugger
    const winner = calculateWinner(history[stepNumber]);
    const xO = xNext ? "X" : "O";

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];
        // return if won or occupied
        if (winner || squares[i]) return;
        // select square
        squares[i] = xO;
        setHistory([...historyPoint, squares]);
        setStep(historyPoint.length);
        setX(!xNext);
    }

    const jumpTo = (step) => {
        setStep(step);
        setX(step % 2 === 0);
    }

    const renderMoves = () => 
        history.map((_step, move) => {
            const destination = move ? `Go to move #${move}` : "Go to start";
            return(
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            );
        });

    return (
        <>
            <h1>React hooks Tic Tac Toe</h1>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div className="infor-wrapper">
                <div>
                    <h3>Move History</h3>
                    {renderMoves()}
                </div>
                <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
            </div>
        </>
    )
}

export default Game;
