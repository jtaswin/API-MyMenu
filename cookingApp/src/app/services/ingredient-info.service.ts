import { Recipe } from './../models/recette';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const API_URL = environment.url + 'ingredient';
@Injectable({
  providedIn: 'root'
})
export class IngredientInfoService {

  constructor(private http: HttpClient) { }

  post(o: any) {
    return this.http.post(API_URL, o);
  }

  // update
  put(id, ingredient: any) {
    return this.http.put(`${API_URL}/${id}`, ingredient);
  }

  // list
  getAll() {
    return this.http.get(API_URL).pipe(map((e: any) => e.data as Recipe[]));
  }

  // list
  search(word, pageSize = 10) {
    return this.http.get(`${API_URL}?name[$search]=${word}&$limit=${pageSize}`).pipe(map((e: any) => e.data as Recipe[]));
  }

  // list
  getPage(startIndex, pageSize) {
    return this.http.get(`${API_URL}?&$skip=${startIndex}$limit=${pageSize}`).pipe(map((e: any) => e.data as Recipe[]));
  }

  // get
  getById(id) {
    return this.http.get<Recipe>(`${API_URL}/${id}`);
  }

  // delete
  delete(id: number) {
    return this.http.delete(`${API_URL}/${id}`);
  }
}
