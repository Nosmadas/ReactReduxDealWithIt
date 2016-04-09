import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Telemarketer = ({telemarketer, onTelemarketerSelected}) => (
    <div>
        <div className="checkbox">
            <label>
                <input onChange={() => onTelemarketerSelected() } type="checkbox" value="" />
               {telemarketer} </label>
        </div>
    </div>
);

export default Telemarketer;