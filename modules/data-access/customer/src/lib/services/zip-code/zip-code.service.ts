import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ZipCode } from '../../models/zip-code.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ZipCodeService {
  readonly apiUrl = 'https://viacep.com.br/ws/';
  constructor(private httpClient: HttpClient) {}

  getZipCode(cep: string): Observable<ZipCode> {
    return this.httpClient.get<ZipCode>(`${this.apiUrl}${cep}/json`);
  }
}
