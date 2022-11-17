export interface UserAuthInput {
    hashedPassword: String;
    email: String;
}

export interface User extends UserAuthInput {
    firstName: String;
    lastName: String;
    sheet: String;
}

export interface UserItem extends User {
    hk: String;
    sk: String;
}
