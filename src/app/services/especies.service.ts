import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EspeciesService {
  private ESPECIES_API =
    'https://chic-contentment-production.up.railway.app/api/especies';

  constructor(private http: HttpClient) {}

  // Método para obtener todas las especies
  public getEspecies(): Observable<any> {
    return this.http.get(this.ESPECIES_API);
  }

  // Método para obtener una especie en base a un ID
  public getEspecie(id: string | null): Observable<any> {
    return this.http.get(`${this.ESPECIES_API}/${id}`);
  }
}
