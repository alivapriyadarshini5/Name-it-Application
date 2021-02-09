import React from 'react';
import NameCard from '../NameCard/namecard';
import './resultcontainer.css';

const ResultsContainer = ({ suggestedNames }) => {
    const suggestedNamejsx = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />
    });

    return <div className="results-container">{suggestedNamejsx}</div>;
};

export default ResultsContainer;