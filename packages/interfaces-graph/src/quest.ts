import { Task } from './task';
import { Reward } from './reward';

export interface Quest {
    title: String;
    freq: String;
    diff: String;
    timeToComplete?: String;
    complete: Boolean;
    reward: Reward;
    tasks?: Task[];
}

export interface QuestItem extends Quest {
    hk: String;
    sk: String;
}
