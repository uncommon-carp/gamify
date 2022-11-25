export interface Task {
    title: String;
    complete: Boolean;
    quest: String;
}

export interface TaskItem extends Task {
    hk: String;
    sk: String;
}
