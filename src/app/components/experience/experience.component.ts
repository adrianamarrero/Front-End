
import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { ExperienceserviceService } from 'src/app/service/experienceservice.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  
  expe: Experience[] = [];

  constructor(private experienceserviceService: ExperienceserviceService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.loadExperience();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadExperience(): void {
    this.experienceserviceService.lista().subscribe(data => { this.expe = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.experienceserviceService.delete(id).subscribe(
        data => {
          this.loadExperience();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}
