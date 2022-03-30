import {Trello} from '../types/trello';
import {CapabilityProps} from '../types/power-up';

async function getBadge(/* t: Trello.PowerUp.IFrame, */icon: string): Promise<Trello.PowerUp.CardBadge> {
    return {
        text: 'Data',
        icon: icon,
        color: 'green',
        refresh: 10, // in seconds
    };
}

export function getCardBadge(t: Trello.PowerUp.IFrame, props: CapabilityProps): Trello.PowerUp.CardBadgeDynamic[] {
    console.log(t);
    return [{
        dynamic: () => {
            return getBadge(/* t, */props.baseUrl + props.icon.light);
        },
    }];
}
