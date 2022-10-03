import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aclientes } from 'src/app/models/Aclientes';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes-create',
  templateUrl: './clientes-create.component.html',
  styleUrls: ['./clientes-create.component.css']
})
export class ClientesCreateComponent implements OnInit {

  public contact : Aclientes = {} as Aclientes;
  public errorMessage : string | null = null;


  constructor(private contactService : ClientesService,
    private router :Router) { }

  ngOnInit(): void {
  }

  public createSubmit(){
    this.contactService.createContact(this.contact).subscribe((data)=>{
      this.router.navigate(['/']).then();
    }, (error) =>{
      this.errorMessage = error;
      this.router.navigate(['/clientes/add']).then();
    });
  }

}
