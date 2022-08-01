export class Projects {
    id?: number;
    titleProject?: string;
    institutionProject: string;
    dateProject?: number;
    descriptionProject?: string;


    constructor(titleProject: string, institutionProject: string, dateProject: number, descriptionProject: string){
        this.titleProject = titleProject;
        this.institutionProject = institutionProject;
        this.dateProject = dateProject;
        this.descriptionProject = descriptionProject;
    }
}
