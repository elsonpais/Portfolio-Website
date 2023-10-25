import React from 'react'

const DBMS = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Database Management Systems</h3>

        <div className="skills__box">
            
            <div className="skills__group">
                <div className="skills__data">
                    <div className="skills__logo sql"></div>

                    <div>
                        <h3 className="skills__name">SQL</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <div className="skills__logo mongodb"></div>

                    <div>
                        <h3 className="skills__name">MongoDB</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <div className="skills__logo firebase"></div>

                    <div>
                        <h3 className="skills__name">Firebase</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default DBMS