export class Skills {
    id?: number;
    nameSkill?: string;
    percentageSkill?: number;


    constructor(nameSkill: string, percentageSkill: number){
        this.nameSkill = nameSkill;
        this.percentageSkill = percentageSkill;
    }
}
