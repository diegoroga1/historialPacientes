import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class foundService {

    private baseUrl = 'https://historial-pacientes.firebaseio.com/';
    currentpaciente: any ={};

    constructor(private http: Http) { }

    getPacientes(){
      return new Promise( resolve => {
        this.http.get(`${this.baseUrl}/citas.json`)
          .subscribe(res => resolve(res.json()));
      });
    }

    getPacientesData(paciente) : Observable<any>{
      return this.http.get(`${this.baseUrl}/usuarios/${paciente}.json`)
        .map((response: Response) => {
            this.currentpaciente = response.json();
            console.log("esto: "+ this.currentpaciente);
            return this.currentpaciente;
          });
    }
}
