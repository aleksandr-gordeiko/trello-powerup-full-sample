import {Trello} from '../types/trello';
import {CapabilityProps} from '../types/power-up';

export async function getAuthorizationStatus(t: Trello.PowerUp.IFrame, _options: any, _props: CapabilityProps): Promise<Trello.PowerUp.AuthorizationStatusResponse> {
    console.log(t);
    return {
        authorized: true
    }
}
