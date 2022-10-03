import { Component, OnInit } from '@angular/core';
import { Aclientes } from 'src/app/models/Aclientes';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes-view',
  templateUrl: './clientes-view.component.html',
  styleUrls: ['./clientes-view.component.css']
})
export class ClientesViewComponent implements OnInit {

  public contacts:Aclientes[] = [];
  public errorMessage:string | null = null;


  constructor(private ClientesService : ClientesService) { 

  }

  ngOnInit(): void {
    this.ClientesService.getAllContacts().subscribe((data) =>{
      this.contacts = data;
    }, (error) =>{
      this.errorMessage = error;
    });
  }
  public clickDeleteContact(contactId : string | undefined){
    if (contactId){
      this.ClientesService.deleteContact(contactId).subscribe((data)=>{
        

        this.ClientesService.getAllContacts().subscribe((data) =>{
          this.contacts = data;
        }, (error) =>{
          this.errorMessage = error;
        });



      })
    }
  }
}
