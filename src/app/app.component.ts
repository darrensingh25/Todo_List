import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo_list';

  list:any[] = [];  // Empty Array of any-type

  addTask(item:string) {   // add the value
    // console.log(this.list)
    // console.log(item)
    this.list.push({id:this.list.length, name:item})
  }

  removeTask(i:any) {     // Deleting
    this.list.splice(i,1)
 }

  // removeTask(id:number) {  // Deleting
  //   // console.log(id)
  // this.list = this.list.filter(item => item.id !== id)
  // }

  // editTask(id:number) {
  //   //console.log(id)
  //   this.list = this.list.filter(item => item.id= id)

  // }

//   editTask(id:any) {
//     const userIndex = this.list.findIndex(item => item.id == id);
//     if (userIndex != null && userIndex != undefined) {
//         this.list[userIndex] = this.list;
//     }
// }
  
editTask(id :any) {
//  this.list.findIndex((item => item.id ==1))
this.list.indexOf(id);
console.log(id)
}
  
}
  