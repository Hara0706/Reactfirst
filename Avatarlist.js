import React from 'react';

const Avatarlist = (props) => {
    return (
            <div className= "avatarstyle ma4 bg-light-purple dib pd4 tc grow shadow-4"> 
            {/* <img src={'//joeschmoe.io//api/v1/random'} alt="Avatar"></img> */}
            <img src={props.img} alt="Avatar"></img>
            <h1 className="">{props.name}</h1>
            <p>{props.work}</p>
            </div>
    )
}

export default Avatarlist;