export class Experience {
    id?: number;
    titleExperience?: string;
    institutionExperience?: string;
    dateExperience?: number;
    descriptionExperience?: string;

    constructor(titleExperience: string, institutionExperience: string, dateExperience: number, descriptionExperience: string){
        this.titleExperience = titleExperience;
        this.institutionExperience = institutionExperience;
        this.dateExperience = dateExperience;
        this.descriptionExperience = descriptionExperience;
    }
}
