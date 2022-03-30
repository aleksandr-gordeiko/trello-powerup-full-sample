import React, {useState} from 'react';
import {useProvidedTrello} from '@optro/ui-react';
import './styles.css';

function CardButton() {
    const t = useProvidedTrello();
    const [data, setData] = useState('sample_data');

    return (
        <div id="container">
            <textarea
                className="data-field"
                value={data}
                id="data"
                name="data"
                onChange={(event) => setData(event.target.value)}
            />
            <button
                disabled={data.length === 0}
                title={data.length === 0 ? 'Enter data' : 'Alert data'}
                className="mod-primary"
                onClick={() => { return t.alert({message: data}) }}
            >
                Alert
            </button>
        </div>
    );
}

export default CardButton;
