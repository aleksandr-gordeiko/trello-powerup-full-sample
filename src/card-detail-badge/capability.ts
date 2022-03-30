import {Trello} from '../types/trello';
import {CapabilityProps} from '../types/power-up';

async function getDetailBadge(/* t: Trello.PowerUp.IFrame*/): Promise<Trello.PowerUp.CardBadge> {
    return {
        text: 'Data',
        color: 'green',
        refresh: 10, // in seconds
    };
}

export function getCardDetailBadge(t: Trello.PowerUp.IFrame, _props: CapabilityProps): Trello.PowerUp.CardDetailBadgeDynamic[] {
    console.log(t);
    return [{
        dynamic: () => {
            return getDetailBadge(/* t */);
        },
    }];
}
