export interface Task {
    title: String;
    difficulty: String;
    timeToComplete: String;
    complete: Boolean;
}

export interface TaskItem extends Task {
    hk: String;
    sk: String;
}
