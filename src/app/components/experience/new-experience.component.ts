import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceserviceService } from 'src/app/service/experienceservice.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {
  
  titleExperience: string = '';
  institutionExperience: string = '';
  descriptionExperience: string = '';

  constructor(private experienceserviceService: ExperienceserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experience(this.titleExperience, this.institutionExperience, 2020, this.descriptionExperience);
    this.experienceserviceService.save(expe).subscribe(
      data => {
        alert("Se añadió una experiencia laboral a la base de datos.");
        this.router.navigate(['']);
      }, err => {
        alert("No se pudo añadir la experiencia laboral a la base de datos.");
        this.router.navigate(['']);
      }
    )
  }
}
