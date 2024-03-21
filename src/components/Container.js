import React from 'react'

export default function Container(props) {
    let{name, imageUrl, url, description} = props;
  return (
    <div className="hover1">
    <div className="card my-3 bg-black text-white">
      <img src={imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <a href={url} className="btn btn-outline-light" target='_blank' rel='noreferrer'>Click Here</a>
      </div>
      <style jsx="true">
        {`
        .hover1 div {
          transition : 0.5s ease;
        }
        .hover1 img:hover{
          -webkit-transform: scale(0.9);
          -ms-transform: scale(0.9);
          transform: scale(0.9);
          transition: 0.5s ease;
        }

        `}
      </style>
      </div>
    </div>
    

  )
}
