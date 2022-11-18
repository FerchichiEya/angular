import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';
import { voitures } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';

 
@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.css']
})
export class AddVoitureComponent implements OnInit {

  newIdCat!:number;
  newVoiture = new voitures();
  categories! : Categorie[];
  newCategorie! : Categorie;
  


  constructor(private voitureService : VoitureService,private router :Router) { }

  ngOnInit(): void {
    //this.categories=this.voitureService.listeCategories();
  }
  addVoiture(){
    //console.log(this.newVoiture);
    //this.voitureService.consulterCategorie(this.newIdCat);
    this.newVoiture.categorie = this.newCategorie;
    this.voitureService.ajouterVoiture(this.newVoiture);
    this.router.navigate(['voitures']);
     
    //this.voitureService.ajouterVoiture(this.newVoiture);



  }
    

}
