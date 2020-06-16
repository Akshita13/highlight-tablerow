import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    id;
  names=[{num:1,name:'dfdas'},{num:1,name:'dfdas'},{num:1,name:'dfdas'},{num:1,name:'dfdas'}]

  onClick(index){
    this.id=(index!==this.id) ? index : null
    // this.id=index
    console.log(this.id)
  }
}
