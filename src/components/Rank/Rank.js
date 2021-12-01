import React from 'react';

const Rank = ({userName, userEntries}) => {

    return (
        <div>
            <div className = 'rank-username white f3 tc'>
               {userName} your current rank is... 
            </div>
            <div className = 'rank-entries white f1 tc'>
               {userEntries}
            </div>
        </div>
    )
}

export default Rank