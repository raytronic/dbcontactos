import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Aclientes } from '../models/Aclientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private serverUrl:string = `http://localhost:9000`;

  constructor(private httpClient: HttpClient) { }
//get
  public getAllContacts(): Observable<Aclientes[]> {
    let dataURL: string = `${this.serverUrl}/clientes`;
    return this.httpClient.get<Aclientes[]>(dataURL).pipe(catchError(this.handleError));
  }

//get apenas 1
public getContact(contactId:string):Observable<Aclientes>{
  let dataURL : string = `${this.serverUrl}/clientes/${contactId}`;
  return this.httpClient.get<Aclientes>(dataURL).pipe(catchError(this.handleError));
}

//Create

public createContact(contact: Aclientes):Observable<Aclientes>{
  let dataURL: string = `${this.serverUrl}/clientes`;
  return this.httpClient.post<Aclientes>(dataURL, contact).pipe(catchError(this.handleError));
}

//editar

public updateContact(contact: Aclientes, contactId : string):Observable<Aclientes>{
  let dataURL: string = `${this.serverUrl}/clientes/${contactId}`;
  return this.httpClient.put<Aclientes>(dataURL, contact).pipe(catchError(this.handleError));
}
//delete

public deleteContact(contactId : string):Observable<{}>{
  let dataURL: string = `${this.serverUrl}/clientes/${contactId}`;
  return this.httpClient.delete<{}>(dataURL).pipe(catchError(this.handleError));
}




  // error handling
  public handleError(error: HttpErrorResponse){
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent){
      errorMessage = `Error: ${error.error.message}`
    }else{
      errorMessage = `Status: ${error.status} \n Message: ${error.message}`
    }
    return throwError(errorMessage);
  };
  

}
