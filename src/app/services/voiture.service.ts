import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { voitures } from '../model/voiture.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  apiURL: string = 'http://localhost:8090/voiture/api';

  voitures! : voitures[];
 //un tableau de chînes de caractères
  //categories! : Categorie[];
  constructor(private http : HttpClient) {
    /* this.categories = [ 
    {idCat : 1, nomCat : "Sportif"},
    {idCat : 2, nomCat : "Classique"}];  */
    /*this.voitures = [
    /*{idV : 1, nomV : "Mercedess", prixV : 3000000.600, dateCreation : new Date("01/14/2022"),categorie :{idCat : 1, nomCat : "Sportif"} },
    {idV : 2, nomV : "Peugeot ", prixV : 450000.0, dateCreation : new Date("12/17/2021"), categorie : {idCat : 2, nomCat : "Classique"}},
    {idV : 3, nomV :"Clio ", prixV : 90000.123, dateCreation : new Date("02/20/2020"),categorie : {idCat : 2, nomCat : "Classique"}}
    ];*/
    }
    listeVoitures(): Observable<voitures[]>{
      return this.http.get<voitures[]>(this.apiURL);
      }

ajouterVoiture( V: voitures){
  this.voitures.push(V);
  }



supprimerVoiture( V: voitures){

  const index = this.voitures.indexOf(V, 0);
  if (index > -1) {
  this.voitures.splice(index, 1);
  }

  }
consulterVoiture(id:number): voitures{
  return this.voitures.find(V=> V.idV == id)!;
       
    }



   

    trierVoiture(){
      this.voitures= this.voitures.sort((n1,n2) =>
      {
        if(n1.idV > n2.idV ){
          return 1;
        }
        if(n1.idV <  n2.idV){
          return -1;
        }
        return 0;
      });
      }

      /* listeCategories():Categorie[] {
        return this.categories;
        }
        consulterCategorie(id:number): Categorie{
        return this.categories.find(cat => cat.idCat == id)!;
        } */

        updateVoiture(V:voitures){
          this.supprimerVoiture(V);
          this.ajouterVoiture(V);
          this.trierVoiture();
        
         }
     
}
  


