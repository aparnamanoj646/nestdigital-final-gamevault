import { ChangeDetectorRef, Component } from '@angular/core';
import { Card1 } from "../../components/card1/card1";
import { Fakeapi } from '../../services/fakeapi';

@Component({
  selector: 'app-games',
  imports: [Card1],
  templateUrl: './games.html',
  styleUrl: './games.css',
})
export class Games {

  data:any[]=[];

  constructor(
    private api:Fakeapi,
    private cdr:ChangeDetectorRef
  ){}

  ngOnInit(){
    this.api.getGames().subscribe((res:any)=>{
      this.data = res;
      this.cdr.detectChanges();
    })
  }

}