import React from 'react'
import "./skills.css";
import WebDev from "./WebDev";
import AppDev from "./AppDev";
import CloudComputing from './CloudComputing';
import VersionControl from './VersionControl';
import CompProg from './CompProg';
import DBMS from './DBMS';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
            <WebDev />
            <AppDev />
            <CloudComputing />
            <VersionControl />
            <CompProg />
            <DBMS />
        </div>
    </section>
  )
}

export default Skills