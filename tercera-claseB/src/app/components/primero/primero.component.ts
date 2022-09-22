import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

enum PAISES{
    'MEXICO',
    'JAPON',
    'RUSIA'
}

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.scss']
})
export class PrimeroComponent implements OnInit,AfterViewInit {

@ViewChild('texto',{static:true})texto!: ElementRef
@ViewChild('textoDos',{static:true})textoDos!: ElementRef


  public PAISES = PAISES;
  public flag : boolean = true;
  public paises : any [] = [
    {
    id: 4,
    nombre: "Mexico",
    },
    {
    id: 12,
    nombre: "Japon",
    },
    {
    id: 23,
    nombre: "Alemania",
    }];

    

    public platillos : any[] = [{
      platillo:'tacos',
      pais: PAISES.MEXICO
    },
    {
      platillo:'pambazo',
      pais: PAISES.MEXICO
    },
    {
      platillo:'sushi',
      pais: PAISES.JAPON
    },
    {
      platillo:'vodka',
      pais: PAISES.RUSIA
    }
    ];

  constructor(private render2 : Renderer2) { }


  ngOnInit(): void {
   
    
  }

  ngAfterViewInit(): void {
    /*this.getButton();*/
    console.log(this.texto);
    this.render2.setAttribute(this.texto.nativeElement,"id",'otrotexto');
    this.render2.setStyle(this.texto.nativeElement,"color",'red');
  }

  getButton(){
    let btn1 = document.getElementById("btn1");
    btn1?.addEventListener("click", () => {
      this.flag = !this.flag;

    });
  }


}
