import React from 'react'

const VersionControl = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Version Control</h3>

    <div className="skills__box">
        
        <div className="skills__group">
            <div className="skills__data">
                <div className="skills__logo git"></div>

                <div>
                    <h3 className="skills__name">Git</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>
        </div>

        <div className="skills__group">
            <div className="skills__data">
                <div className="skills__logo github"></div>

                <div>
                    <h3 className="skills__name">Github</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>
        </div>

    </div>
</div>
  )
}

export default VersionControl