export enum Direction {
    UP = 'up',
    DOWN = 'down',
    LEFT = 'left',
    RIGHT = 'right'
}

export enum OutlineColor {
    RED = 'red',
    GREEN = 'green',
    BLUE = 'blue',
    YELLOW = 'yellow'
}

export enum StratagemDisplayMode {
    FULL,
    MINI
}

export enum StratagemType {
    PATRIOTIC_ADMINISTRATION_CENTER = 'Patriotic Administration Center',
    ORBITAL_CANNONS = 'Orbital Cannons',
    ROBOTICS_WORKSHOP = 'Robotics Workshop',
    HANGER = 'Hanger',
    GENERAL_STRATAGEMS = 'General Stratagems',
    ENGINEERING_BAY = 'Engineering Bay',
    BRIDGE = 'Bridge'
}

export interface StratagemInfo {
    order: number;
    name: string;
    type: StratagemType;
    code: Direction[];
    icon: string;
    outline: OutlineColor;
}

export interface StratagemSection {
    [key: string]: StratagemInfo;
}