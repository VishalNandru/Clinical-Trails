
import React from 'react';
import { Link } from 'react-router-dom';
import './StudyCard.css';

const StudyCard = ({ study }) => {
    if (!study || !study.protocolSection || !study.protocolSection.identificationModule) {
        return <div className="study-card">Data not available</div>;
    }

    const { briefTitle, nctId } = study.protocolSection.identificationModule;
    const { overallStatus } = study.protocolSection.statusModule;

    return (
        <div className="study-card">
            <h2>{briefTitle}</h2>
            <p>Status: {overallStatus}</p>
            <Link to={`/study/${nctId}`} className="details-link">View Details</Link>
        </div>
    );
};

export default StudyCard;
