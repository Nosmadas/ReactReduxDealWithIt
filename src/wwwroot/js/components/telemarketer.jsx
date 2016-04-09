import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Telemarketer = ({telemarketer, onTelemarketerSelected}) => (
    <div>
        <div className="checkbox">
            <label>
                <input onChange={() => onTelemarketerSelected() }
                    checked={telemarketer.selected}
                    type="checkbox"
                    value="" />
                {telemarketer.name}
            </label>
        </div>
    </div>
);

export default Telemarketer;