import React from 'react'

const CompProg = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Competitive Programming</h3>

        <div className="skills__box">
            
            <div className="skills__group">
                <div className="skills__data">
                    <div className="skills__logo dsa"></div>

                    <div>
                        <h3 className="skills__name">Data Structures and Algorithms</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
            <div className="skills__data">
                    <div className="skills__logo problemsolving"></div>

                    <div>
                        <h3 className="skills__name">Problem Solving</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <div className="skills__logo cpp"></div>

                    <div>
                        <h3 className="skills__name">C++</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default CompProg