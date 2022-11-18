import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Categorie } from 'src/app/model/categorie.model';
import { voitures } from 'src/app/model/voiture.model';
import { VoitureService } from '../voiture.service';

@Component({
  selector: 'app-update-voiture',
  templateUrl: './update-voiture.component.html',
  styleUrls: ['./update-voiture.component.css']
})
export class UpdateVoitureComponent implements OnInit {
  currentVoiture = new voitures();
  categories! : Categorie[];
  updateCatId!:number;

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private voitureService: VoitureService) { }

  ngOnInit(): void {
   // this.categories = this.voitureService.listeCategories();
    //console.log(this.activatedRoute.snapshot.params['id']);
    this.currentVoiture = this.voitureService.consulterVoiture(this.activatedRoute.snapshot.params['id']);
    this.updateCatId=this.currentVoiture.categorie.idCat;

    //console.log(this.currentVoiture);
    
  }
  updateVoiture(){
    //this.currentVoiture.categorie=this.voitureService.consulterCategorie(this.updateCatId);
    this.voitureService.updateVoiture(this.currentVoiture);
    this.router.navigate(['voitures']);
    
  }

}
