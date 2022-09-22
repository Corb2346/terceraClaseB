import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[color]'
})
export class ColorDirective implements OnInit{
  @Input('color') color: string = '';
  @Input('size') size: string = '';
  @Input('fontStyle') fontStyle: string = '';
  
  constructor(private element: ElementRef) {}
  
  ngOnInit(): void {
    /*console.log(this.color);
    console.log(this.size);
    console.log(this.fontStyle);*/
    this.element.nativeElement.style.color = this.color;
    this.element.nativeElement.style.fontSize = this.size;
    this.element.nativeElement.style.fontSize = this.fontStyle;
  }
  
}
