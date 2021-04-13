import { Component, OnInit } from '@angular/core';
import {OperationService} from "../services/operation.service";

@Component({
  selector: 'app-operation-account',
  templateUrl: './operation-account.component.html',
  styleUrls: ['./operation-account.component.css']
})
export class OperationAccountComponent{

  constructor(operation: OperationService){ }



}
