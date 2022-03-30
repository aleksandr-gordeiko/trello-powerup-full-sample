import {Trello} from '../types/trello';
import {CapabilityProps} from '../types/power-up';

export function getListAction(_t: Trello.PowerUp.IFrame, _props: CapabilityProps): Trello.PowerUp.ListAction[] {
    return [{
        text: 'List action',
        callback: async (tc: Trello.PowerUp.IFrame) => {
            await tc.alert({
                display: 'success',
                duration: 5,
                message: 'Action succeeded'
            });
            return tc.closePopup();
        }
    }];
}
