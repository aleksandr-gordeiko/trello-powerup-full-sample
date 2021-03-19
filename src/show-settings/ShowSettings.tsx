import * as React from 'react';
import {removeAllNotes} from '../api/power-up';
import {Trello} from '../types/trello';
import './styles.css';

const t: Trello.PowerUp.IFrame = window.TrelloPowerUp.iframe();

function ShowSettings() {
    return (
        <div className="inner-settings-panel">
            <p>Configure the Notes Power-Up.</p>
            <button onClick={() => removeAllNotes(t, 'shared')} className="mod-danger">
                Delete All Public Notes
            </button>
            <hr/>
            <p>Any additional settings should go here.</p>
        </div>
    );
}

export default ShowSettings;