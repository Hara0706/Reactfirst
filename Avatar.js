import React from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';

const Avatar = (props) =>
{
    /*
    const avatarlistarray = [
       {   
           id: 1,
           name: "Harapriya",
           work: "Web Developer"
       }
       // access as name={avatarlistarray[index].name}
                    work={avatarlistarray[index].work}
    ]

    map(calllback(currentvalue, index, array) arg)
    const avatarcard = avatarlistarray.map( (avatarcard, index)=> {
        return the accessible props
    }
    )
     */
    return (
            <div>
            <h1>Welcome To Avatar World</h1>
            <Avatarlist id="1" name="Harapriya" work="Web Developer" img="//joeschmoe.io/api/v1/jess"/>
            <Avatarlist id="2" name="Akash" work="Competitive Programmer" img="//joeschmoe.io/api/v1/jude"/>
            <Avatarlist id="3" name="Rupeswar" work="Android Developer" img="//joeschmoe.io/api/v1/jake"/>
            <Avatarlist id="4" name="Rajesh" work="Honest Engineer" img="//joeschmoe.io/api/v1/jack"/>
            <button>Subscribe</button>
            </div>)
}

export default Avatar;