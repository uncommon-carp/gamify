export interface Sheet {
    level: Number;
    currentXp: Number;
    gems: Number;
    stats: {
        str: Number;
        con: Number;
        int: Number;
        wis: Number;
        xma: Number;
        dex: Number;
    };
    skills: String[];
    quests: String[];
    inventory: String[];
}

export interface SheetItem extends Sheet {
    hk: string;
    sk: string;
}
