import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model/ticket.model';
import { SharedService } from 'src/app/services/shared.service';
import { TicketService } from 'src/app/services/ticket.service';
import { ActivatedRoute } from '@angular/router';
import { ResponseApi } from 'src/app/model/response-api';

@Component({
  selector: 'app-tiket-detail',
  templateUrl: './tiket-detail.component.html',
  styleUrls: ['./tiket-detail.component.css']
})

export class TiketDetailComponent implements OnInit {
  ticket = new Ticket('',0,'','','','',null,null,null,null);
  shared: SharedService;
  message: {};
  classCss:{};
  
  constructor(
    private ticketService: TicketService,
    private route: ActivatedRoute,
  ) { 
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    let id:string = this.route.snapshot.params['id'];
    if (id!= undefined){
       this.findById(id);
    }
  }

  findById(id:string)  {
      this.ticketService.findbyId(id).subscribe((responseApi: ResponseApi) =>{      
      this.ticket = responseApi.data;      
      this.ticket.date = new Date(this.ticket.date).toISOString();
      this.showMessage({
        type:'success',
        text:'Successfuly changed status'
      });
    }, err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });      
    });  
   }

   changeStatus(status: string):void{
    this.ticketService.changeStatus(status, this.ticket).subscribe((responseApi: ResponseApi)=>{  
        this.ticket = responseApi.data;
        this.ticket.date = new Date(this.ticket.date).toISOString();
    })
   }

   private showMessage(message: {type: string, text: string}) : void {
    this.message = message;
    this.buildClasses(message.type);
    setTimeout(() => { undefined;
    }, 3000);
  }

  private buildClasses(type: string):void
  {
    this.classCss = {
      'alert' : true
    }
    this.classCss['alert-'+type] = true;
  } 
}
