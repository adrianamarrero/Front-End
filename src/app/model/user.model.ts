export class user{
    id?: number;
    name: string;
    lastName: string;
    profilePic: string;

    constructor(name:string, lastName:string, profilePic: string){
        this.name = name;
        this.lastName = lastName;
        this.profilePic = profilePic;
    }
}