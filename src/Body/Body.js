import React from 'react';
import "./Body.css"

const Body = (props) => {
    return(
        <div>
            <h2>College:{props.college}</h2>
                <h2>Age:{props.age}</h2>
                <p className={'pich'}>♣Smoke Trees :D♣</p>
        </div>

    );

}
export default Body;