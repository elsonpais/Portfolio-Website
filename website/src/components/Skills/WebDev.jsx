import React from 'react'

const WebDev = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Web Development</h3>

        <div className="skills__box">
            
            <div className="skills__group">
                <div className="skills__data">
                    <div className="skills__logo react__logo"></div>

                    <div>
                        <h3 className="skills__name">ReactJS</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <div className="skills__logo node__logo"></div>

                    <div>
                        <h3 className="skills__name">NodeJS</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <div className="skills__logo express__logo"></div>

                    <div>
                        <h3 className="skills__name">ExpressJS</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <div className="skills__logo javascript__logo"></div>

                    <div>
                        <h3 className="skills__name">Javascript</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default WebDev