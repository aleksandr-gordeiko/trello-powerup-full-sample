import {CapabilityProps} from '../types/power-up';
import {Trello} from '../types/trello';

export function getAttachmentThumbnail(t: Trello.PowerUp.IFrame, options: Trello.PowerUp.AttachmentThumbnailOptions, _props: CapabilityProps) {
    console.log(t);
    console.log(options);
    return {
        title: 'Sample Attachment',
        image: {
            url: './static/favicon.png',
            logo: true // false if you are using a thumbnail of the content
        }
    };
}
