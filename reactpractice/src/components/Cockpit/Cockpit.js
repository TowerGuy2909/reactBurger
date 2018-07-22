import React from 'react';

const CockPit = ( props ) => {
    return(
        <div>
            <h1> Hi, im a new react app </h1>
            <p className={assignedClasses.join(' ')} > this is realy working</p>
            <button
                className={btnClass}
                onClick={this.togglePersonsHandler}>Switch Name</button>
        </div>
    );
};

export default CockPit;