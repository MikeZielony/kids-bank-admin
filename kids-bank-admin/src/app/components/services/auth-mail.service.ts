import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map, take} from "rxjs/operators";
import { AuthMailModel} from "../../models/authMail.model";
import { IAuthMailResultDto} from "../../models/AuthMailResult.dto";

@Injectable({
  providedIn: 'root'
})
export class AuthMailService {

  authMailResults: AuthMailModel[] = [];

  constructor(private http: HttpClient) {
  }




}
