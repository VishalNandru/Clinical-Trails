
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import StudyCard from './StudyCard';
import StudyDetails from './StudyDetails';
import './MainRouter.css';

const MainRouter = ({ searchTerm }) => {
    const [studies, setStudies] = useState([]);
    const [filteredStudies, setFilteredStudies] = useState([]);

    useEffect(() => {
        const loadStudies = async () => {
            try {
                const context = require.context('../../public/data/Cancer_studies', false, /\.json$/);
                const studiesData = await Promise.all(context.keys().map(context));
                const allStudies = studiesData.map(data => data.default || data);
                setStudies(allStudies);
                setFilteredStudies(allStudies);
            } catch (error) {
                console.error('Failed to load study data:', error);
            }
        };

        loadStudies();
    }, []);

    useEffect(() => {
        if (searchTerm) {
            setFilteredStudies(studies.filter(study =>
                study.protocolSection.identificationModule.briefTitle.toLowerCase().includes(searchTerm.toLowerCase())
            ));
        } else {
            setFilteredStudies(studies);
        }
    }, [searchTerm, studies]);

    const homePageStudies = studies.slice(0, 10); 

    return (
        <Routes>
            {/* Home route displaying subset of studies */}
            <Route path="/" element={
                <div className="study-list">
                    {homePageStudies.map((study, index) => (
                        <StudyCard key={index} study={study} />
                    ))}
                </div>
            } />
            {/* All Studies route showing filtered results */}
            <Route path="/studies" element={
                <div className="study-list">
                    {filteredStudies.map((study, index) => (
                        <StudyCard key={index} study={study} />
                    ))}
                </div>
            } />
            {/* Study details route */}
            <Route path="/study/:id" element={<StudyDetails studies={studies} />} />
        </Routes>
    );
}

export default MainRouter;
