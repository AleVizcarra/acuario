import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EspeciesService {
  private ESPECIES_API = 'http://127.0.0.1:8000/api/especies';

  // 'https://chic-contentment-production.up.railway.app/api/especies';

  constructor(private http: HttpClient) {}

  // Método para obtener todas las especies
  public getEspecies(): Observable<any> {
    return this.http.get(this.ESPECIES_API);
  }

  // Método para obtener una especie en base a un ID
  public getEspecie(id: string | null): Observable<any> {
    return this.http.get(`${this.ESPECIES_API}/${id}`);
  }

  // Método para agregar una película
  public addEspecie(especie: any): Observable<any> {
    return this.http.post(this.ESPECIES_API, especie);
  }

  // Método para actualizar los datos de una especie
  public updateEspecie(id: string, especieData: any): Observable<any> {
    return this.http.put(`${this.ESPECIES_API}/${id}`, especieData);
  }

  // Método para eliminar una especie
  public deleteEspecie(id: string): Observable<any> {
    return this.http.delete(`${this.ESPECIES_API}/${id}`);
  }
}
