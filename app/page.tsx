"use client"

import React, { useState } from "react";

type Player = "X" | "O" | null;

function calculateWinner(board: Player[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export default function Home() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((s) => s !== null);

  function handleClick(i: number) {
    if (winner || board[i]) return;
    const newBoard = board.slice();
    newBoard[i] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  function reset() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 p-6">
      <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Aula de Serviços</h1>

        <div className="text-center mb-4">
          {winner ? (
            <div className="text-green-600 font-semibold">Vencedor: {winner}</div>
          ) : isDraw ? (
            <div className="text-orange-600 font-semibold">Empate</div>
          ) : (
            <div className="text-blue-600">Próximo jogador: {xIsNext ? "X" : "O"}</div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-2">
          {board.map((value, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(idx)}
              className={`h-20 flex items-center justify-center text-2xl font-bold rounded-md border bg-white hover:bg-zinc-50 transition-colors ${
                value === "X" ? "text-red-600" : value === "O" ? "text-blue-600" : "text-zinc-700"
              }`}
            >
              {value}
            </button>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={reset}
            className="px-4 py-2 bg-zinc-900 text-white rounded-md hover:bg-zinc-700"
          >
            Reiniciar
          </button>

          <button
            onClick={() => {
              // jogada aleatória do computador (opcional)
              if (winner) return;
              const empty = board
                .map((v, i) => (v === null ? i : -1))
                .filter((i) => i !== -1);
              if (empty.length === 0) return;
              const rnd = empty[Math.floor(Math.random() * empty.length)];
              handleClick(rnd);
            }}
            className="px-4 py-2 bg-zinc-200 rounded-md hover:bg-zinc-300"
          >
            Jogada aleatória
          </button>
        </div>
      </div>
    </div>
  );
}
