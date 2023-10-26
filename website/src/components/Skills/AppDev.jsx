import React from 'react'

const AppDev = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">App Development</h3>

        <div className="skills__box">
            
            <div className="skills__group">
                <div className="skills__data">
                    <div className="skills__logo flutter"></div>

                    <div>
                        <h3 className="skills__name">Flutter</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <div className="skills__logo dart"></div>

                    <div>
                        <h3 className="skills__name">Dart</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <div className="skills__logo androidstudio"></div>

                    <div>
                        <h3 className="skills__name">Android Studio</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <div className="skills__logo java"></div>

                    <div>
                        <h3 className="skills__name">Java</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AppDev