import {Trello} from '../types/trello';
import {CapabilityProps} from '../types/power-up';

export function getCardButton(_t: Trello.PowerUp.IFrame, props: CapabilityProps): Trello.PowerUp.CardButton[] {
    return [{
        icon: props.baseUrl + props.icon.dark,
        text: 'Alert data',
        callback: (tc: Trello.PowerUp.IFrame) => tc.popup({
            title: 'Alert data',
            url: './card-button.html',
            height: 300
        })
    }];
}
