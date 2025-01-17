import {Trello} from '../types/trello';
import {CapabilityProps} from '../types/power-up';

export function getBoardButton(_t: Trello.PowerUp.IFrame, props: CapabilityProps): Trello.PowerUp.BoardButtonCallback[] {
    return [{
        icon: {
            dark: props.baseUrl + props.icon.dark,
            light: props.baseUrl + props.icon.light
        },
        text: 'Data',
        callback: (tc: Trello.PowerUp.IFrame) => {
            return tc.modal({
                title: 'Data',
                url: tc.signUrl('./board-button.html'),
                fullscreen: false
            });
        },
        condition: 'edit'
    }];
}
