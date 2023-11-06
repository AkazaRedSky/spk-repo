"use client";

import React, { useState } from "react";

export default function SWARACalculator() {
  const [numCriteria, setNumCriteria] = useState(0);
  const [numAlternatives, setNumAlternatives] = useState(0);
  const [criteriaWeights, setCriteriaWeights] = useState([]);
  const [alternativesScores, setAlternativesScores] = useState([[], []]);
  const [normalizedScores, setNormalizedScores] = useState([]);
  const [swaraScores, setSWARAScores] = useState([]);

  const handleNumCriteriaChange = (event) => {
    setNumCriteria(parseInt(event.target.value));
  };

  const handleNumAlternativesChange = (event) => {
    setNumAlternatives(parseInt(event.target.value));
  };

  const handleCriteriaWeightChange = (index, value) => {
    criteriaWeights[index] = parseFloat(value);
    setCriteriaWeights([...criteriaWeights]);
  };

  const handleAlternativesScoreChange = (rowIndex, colIndex, value) => {
    alternativesScores[rowIndex][colIndex] = parseFloat(value);
    setAlternativesScores([...alternativesScores]);
  };

  const calculateSWARAScores = () => {
    const normalized = [];

    for (let i = 0; i < numAlternatives; i++) {
      let sum = 0;
      for (let j = 0; j < numCriteria; j++) {
        sum += alternativesScores[i][j];
      }
      normalized.push(sum / numCriteria);
    }
    setNormalizedScores(normalized);

    const swara = [];
    for (let i = 0; i < numAlternatives; i++) {
      let score = 0;
      for (let j = 0; j < numCriteria; j++) {
        score += criteriaWeights[j] * normalized[i];
      }
      swara.push(score);
    }
    setSWARAScores(swara);
  };

  return (
    <>
      <div>
        <h1 className="text-center text-white text-lg">
          SWARA Calculator (Manual)
        </h1>
      </div>
      <div>
        <div className="py-3">
          <label className="flex flex-col-reverse relative focus group">
            <input
              className="text-black"
              type="text"
              value={numCriteria}
              onChange={handleNumCriteriaChange}
            />
            <span class="text-black absolute text-sm transform -translate-y-3 left-4 transition leading-10 group-focus-within:-translate-y-4 group-focus-within:text-white">
              Number of Criteria
            </span>
          </label>
        </div>
        <div className="py-3">
          <label className="flex flex-col-reverse relative focus group">
            <input
              className="text-black"
              type="text"
              value={numAlternatives}
              onChange={handleNumAlternativesChange}
            />
            <span class="text-black absolute text-sm transform -translate-y-3 left-4 transition leading-10 group-focus-within:-translate-y-4 group-focus-within:text-white">
              Number of Alternatives
            </span>
          </label>
        </div>

        <div className="py-1">
          <h2>Criteria Weights</h2>
          {Array.from({ length: numCriteria }, (_, index) => (
            <div key={index}>
              <input
                className="text-black"
                type="number"
                placeholder={`Criteria ${index + 1} weight`}
                onChange={(e) =>
                  handleCriteriaWeightChange(index, e.target.value)
                }
              />
            </div>
          ))}
        </div>
        <div>
          <h2>Alternatives' Scores</h2>
          {Array.from({ length: numAlternatives }, (_, rowIndex) => (
            <div key={rowIndex}>
              {Array.from({ length: numCriteria }, (_, colIndex) => (
                <input
                  className="text-black"
                  key={colIndex}
                  type="number"
                  placeholder={`Alternative ${rowIndex + 1} - Criteria ${
                    colIndex + 1
                  }`}
                  onChange={(e) =>
                    handleAlternativesScoreChange(
                      rowIndex,
                      colIndex,
                      e.target.value
                    )
                  }
                />
              ))}
            </div>
          ))}
        </div>
        <div>
          <button
            onClick={calculateSWARAScores}
            className="border-white bg-slate-200 text-gray-700"
          >
            Calculate SWARA Scores
          </button>
          <div>
            <h2>SWARA Scores</h2>
            {swaraScores.map((score, index) => (
              <div key={index}>
                Alternative {index + 1}: {score}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
