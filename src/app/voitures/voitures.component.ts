import { Component, OnInit } from '@angular/core';
import { voitures } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
  styleUrls: ['./voitures.component.css']
})
export class VoituresComponent implements OnInit {
  voitures? : voitures[]; //un tableau de chînes de caractères
  constructor(private voitureService : VoitureService) {
   // this.voitures=[];
  }

  ngOnInit(): void {
   // this.voitures =this.voitureService.listeVoitures();
   
   this.voitureService.listeVoitures().subscribe(V => {
    console.log(V);
    this.voitures = V;
    });
    

  }
  supprimerVoiture(V: voitures)
  {

    let conf = confirm("Etes-vous sûr ?");
    if (conf)
   this.voitureService.supprimerVoiture(V);
  }
  addVoiture(){

  }

}
