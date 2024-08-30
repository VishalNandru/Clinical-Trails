
import React from 'react';
import { useParams } from 'react-router-dom';
import './StudyDetails.css';

const StudyDetails = ({ studies }) => {
    const { id } = useParams();
    const study = studies.find(study => study.protocolSection && study.protocolSection.identificationModule.nctId === id);

    if (!study) {
        return <div>Study not found.</div>;
    }

    const { briefTitle, officialTitle } = study.protocolSection.identificationModule;
    const { overallStatus } = study.protocolSection.statusModule;
    const { briefSummary, detailedDescription } = study.protocolSection.descriptionModule;
    const conditions = study.protocolSection.conditionsModule.conditions.join(', ');

    return (
        <div className="study-details">
            <h1>{briefTitle}</h1>
            <h2>{officialTitle}</h2>
            <p><strong>Status:</strong> {overallStatus}</p>
            <p><strong>Conditions:</strong> {conditions}</p>
            <p><strong>Summary:</strong> {briefSummary}</p>
            <p><strong>Detailed Description:</strong> {detailedDescription}</p>
        </div>
    );
};

export default StudyDetails;
