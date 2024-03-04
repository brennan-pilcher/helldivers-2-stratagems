import {
    OutlineColor,
    Direction,
    StratagemType,
    StratagemList
} from "./types";

export const patrioticAdministrationCenterStratagems: StratagemList = {
    mg43: {
        order: 0,
        name: 'MG-43 Machine Gun',
        type: StratagemType.PATRIOTIC_ADMINISTRATION_CENTER,
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.DOWN,
            Direction.UP,
            Direction.RIGHT
        ],
        icon: 'Machine Gun.svg',
        outline: OutlineColor.BLUE,
    },
    apw1: {
        order: 1,
        name: 'APW-1 Anti-Materiel Rifle',
        type: StratagemType.PATRIOTIC_ADMINISTRATION_CENTER,
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.UP,
            Direction.DOWN
        ],
        icon: 'Anti-Materiel Rifle.svg',
        outline: OutlineColor.BLUE
    },
    m105: {
        order: 2,
        name: 'M-105 Stalwart',
        type: StratagemType.PATRIOTIC_ADMINISTRATION_CENTER,
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.DOWN,
            Direction.UP,
            Direction.UP,
            Direction.LEFT
        ],
        icon: 'Stalwart.svg',
        outline: OutlineColor.BLUE
    },
    eat17: {
        order: 3,
        name: 'EAT-17 Expendable Anti-Tank',
        type: StratagemType.PATRIOTIC_ADMINISTRATION_CENTER,
        code: [
            Direction.DOWN,
            Direction.DOWN,
            Direction.LEFT,
            Direction.UP,
            Direction.RIGHT
        ],
        icon: 'Expendable Anti-Tank.svg',
        outline: OutlineColor.BLUE
    },
    gr8: {
        order: 4,
        name: 'GR-8 Recoilless Rifle',
        type: StratagemType.PATRIOTIC_ADMINISTRATION_CENTER,
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.RIGHT,
            Direction.LEFT
        ],
        icon: 'Recoilless Rifle.svg',
        outline: OutlineColor.BLUE
    },
    flam40: {
        order: 5,
        name: 'FLAM-40 Flamethrower',
        type: StratagemType.PATRIOTIC_ADMINISTRATION_CENTER,
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.UP,
            Direction.DOWN,
            Direction.UP
        ],
        icon: 'Flamethrower.svg',
        outline: OutlineColor.BLUE
    },
    ac8: {
        order: 6,
        name: 'AC-8 Autocannon',
        type: StratagemType.PATRIOTIC_ADMINISTRATION_CENTER,
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.DOWN,
            Direction.UP,
            Direction.UP,
            Direction.RIGHT
        ],
        icon: 'Autocannon.svg',
        outline: OutlineColor.BLUE
    },
    rs422: {
        order: 7,
        name: 'RS-422 Railgun',
        type: StratagemType.PATRIOTIC_ADMINISTRATION_CENTER,
        code: [
            Direction.DOWN,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
            Direction.RIGHT
        ],
        icon: 'Railgun.svg',
        outline: OutlineColor.BLUE
    },
    faf14: {
        order: 8,
        name: 'FAF-14 Spear',
        type: StratagemType.PATRIOTIC_ADMINISTRATION_CENTER,
        code: [
            Direction.DOWN,
            Direction.DOWN,
            Direction.UP,
            Direction.DOWN,
            Direction.DOWN
        ],
        icon: 'Spear.svg',
        outline: OutlineColor.BLUE
    }
};