import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

let apiUrl = 'http://localhost:3000/api/v1/'

@Injectable()
export class ImagesProvider {

  constructor(public http: Http) {
    console.log('Hello ImagesProvider Provider');
  }

  getImage(auth){
    let headers = new Headers(
      {
        'Authorization' : "Bearer " + auth
      });
    let options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) =>{
        this.http.get(apiUrl+"images", options).subscribe(res =>{
          resolve(res.json());
        }), (err) => {
          reject(err);
        }
    });
  }


}