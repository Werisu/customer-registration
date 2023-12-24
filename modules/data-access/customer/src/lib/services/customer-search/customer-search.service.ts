import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customers } from '../../models/customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerSearchService {
  // aqui não criei um environment.ts pois para cada módulo terá um
  // arquivo diferente. Para entender melhor como funciona os módulos
  // podem entrar em contato com o desenvolvedor <wellysson35@gmail.com>.
  readonly apiUrl = 'https://6588acc2f50084a15a58a9b4.mockapi.io/api/v1';

  constructor(private http: HttpClient) {}

  searchByName(name: string): Observable<Customers> {
    return this.http.get<Customers>(`${this.apiUrl}/customer`, {
      params: { name },
    });
  }
}
