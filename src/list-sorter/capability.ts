import {CapabilityProps} from '../types/power-up';
import {Trello} from '../types/trello';

async function sortList(/* t: Trello.PowerUp.IFrame, */opts: any, order: 'asc' | 'desc'): Promise<{ sortedIds: string[] }> {
    const map: any = {};
    for (const card of opts.cards) {
        map[card.id] = card.id;
    }
    const sortedCards = opts.cards.sort(
        (a: any, b: any) => map[a.id] < map[b.id] ? 1 : (map[a.id] > map[b.id]) ? -1 : 0
    ).map(
        (c: any) => c.id
    );

    return {sortedIds: order === 'desc' ? sortedCards : sortedCards.reverse()};
}

export function getListSorter(_t: Trello.PowerUp.IFrame, _props: CapabilityProps): Trello.PowerUp.ListSorter[] {
    return [
        {
            text: 'Ascending',
            callback: async (/* tc: Trello.PowerUp.IFrame, */opts: any) => {
                return sortList(/* tc, */opts, 'asc');
            }
        },
        {
            text: 'Descending',
            callback: async (/* tc: Trello.PowerUp.IFrame, */opts: any) => {
                return sortList(/*tc, */opts, 'desc');
            }
        }
    ];
}
