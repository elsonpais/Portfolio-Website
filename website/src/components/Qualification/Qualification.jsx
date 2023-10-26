import React from 'react'
import "./qualification.css"

const Qualification = () => {
    // const [toggleState, setToggleState] = useState(1);
    // const toggleTab = (index) => {
    //     setToggleState(index);
    // }
  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button button--flex">
                    <i className="uil uil-graduation-cap qualification__active qualification__icon"></i> Education
                </div>
            </div>

            <div className="qualification__sections">
                <div className="qualification__content qualification__content-active">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">BSc. IT</h3>
                            <span className="qualification__subtitle">St. Xavier's College, Mumbai (Autonomous)</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">HSC - Science</h3>
                            <span className="qualification__subtitle">St. Francis D' Assisi, Jr. Clg, Borivali(W), Mumbai</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2020
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">SSC</h3>
                            <span className="qualification__subtitle">Holy Cross Convent School, Mira Road(E), Thane</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2005 - 2018
                            </div>
                        </div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div></div>
                        
                    </div>

                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification