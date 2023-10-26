import React from 'react'

const WorkItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
      <a href={item.link} target="_blank" rel='noreferrer'>
        <img src={item.image} alt="" className="work__img" />
        <h3 className="work__title">{item.name}</h3>
        <a href={item.link} target="_blank" rel='noreferrer' className="work__button">
            {item.title} <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </a>
    </div>
  )
}

export default WorkItems