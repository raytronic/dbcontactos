import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aclientes } from 'src/app/models/Aclientes';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes-edit',
  templateUrl: './clientes-edit.component.html',
  styleUrls: ['./clientes-edit.component.css']
})
export class ClientesEditComponent implements OnInit {

  public contactId : string | null = null;
  public contact : Aclientes = {} as Aclientes;
  public errorMessage : string | null = null;

  constructor(private activatedRoute : ActivatedRoute,
    private contactService: ClientesService,
    private router : Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.contactId = param.get('clientId');
    });
    if(this.contactId){
      this.contactService.getContact(this.contactId).subscribe((data)=>{
        this.contact = data;
      });
    }
  }
  public submitUpdate(){
    if(this.contactId){
      this.contactService.updateContact(this.contact, this.contactId).subscribe((data)=>{
        this.router.navigate(['/']).then();
      }, (error) =>{
        this.errorMessage = error;
        this.router.navigate(['/clientes/edit/${this.contactId}']).then();
      });
    }
  }
}
