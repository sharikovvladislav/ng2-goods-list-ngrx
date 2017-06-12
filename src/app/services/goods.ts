import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Good } from '../models/good';


@Injectable()
export class GoodsService {
  private API_PATH = '/api/goods';

  constructor(private http: Http) {}

  getAllGoods(): Observable<Good[]> {
    return this.http.get(this.API_PATH)
      .map(res => res.json().data || []);
  }

  getGood(goodId: number): Observable<Good> {
    return this.http.get(`${this.API_PATH}/${goodId}`)
      .map(res => res.json());
  }

  updateGood(goodId: number, good: Good): Observable<Good> {
    return this.http.put(`${this.API_PATH}/${goodId}`, good)
      .map(res => res.json());
  }
}
