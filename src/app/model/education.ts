export class Education {
    id?: number;
    titleEducation?: string;
    institutionEducation: string;
    dateEducation?: number;
    descriptionEducation?: string;


    constructor(titleEducation: string, institutionEducation: string, dateEducation: number, descriptionEducation: string){
        this.titleEducation = titleEducation;
        this.institutionEducation = institutionEducation;
        this.dateEducation = dateEducation;
        this.descriptionEducation = descriptionEducation;
    }
}
