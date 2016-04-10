import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Telemarketer = ({telemarketer, onTelemarketerSelected}) => (

        <div className="checkbox inline">
            <label>
                <input onChange={() => onTelemarketerSelected() }
                    checked={telemarketer.selected}
                    type="checkbox"
                    value="" />
                {telemarketer.name}
            </label>
        </div>
);

export default Telemarketer;