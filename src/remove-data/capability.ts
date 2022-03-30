import {Trello} from '../types/trello';
import {CapabilityProps} from '../types/power-up';

export async function getRemoveData(t: Trello.PowerUp.IFrame, _props: CapabilityProps) {
    console.log(t)
    console.log('Removed all data');
}
