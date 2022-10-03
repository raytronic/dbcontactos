import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aclientes } from 'src/app/models/Aclientes';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes-add',
  templateUrl: './clientes-add.component.html',
  styleUrls: ['./clientes-add.component.css']
})
export class ClientesAddComponent implements OnInit {

  public contactId:string | null = null;
  public contact: Aclientes = {} as Aclientes;
  public errorMessage : string | null = null;

  constructor(private activatedRoute : ActivatedRoute,
    private contactService: ClientesService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( (param) =>{
      this.contactId = param.get('clientId');
    });
    let a = 1;
    if(this.contactId){
      this.contactService.getContact(this.contactId).subscribe( (data) =>{
        this.contact = data;
        
      }, (error)=>{
        this.errorMessage = error;
      });

    }
  }

  public isNotEmpty(){
    return Object.keys(this.contact).length > 0;
  }
}