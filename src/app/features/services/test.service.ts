import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  public TodoData: any = [];
  public editableItem$ = new BehaviorSubject(null);
  constructor() {}

  public addRecoored(data: any) {
    const existingData = localStorage.getItem('TodoData');
    let todoDataArray = [];
    if (existingData) {
      todoDataArray = JSON.parse(existingData);
    }
    todoDataArray.push(data);
    localStorage.setItem('TodoData', JSON.stringify(todoDataArray));
  }

  public patchData(data: any) {
    this.editableItem$.next(data);
  }

  public editRecord(data: any) {
    const existingData = localStorage.getItem('TodoData');
    let todoDataArray = [];
    if (existingData) {
      todoDataArray = JSON.parse(existingData)
      todoDataArray = todoDataArray.map((ele: any) => {
        if (ele && ele.id === data.id) {
          return { ...ele, ...data };
      }
      return ele;
      });
      localStorage.setItem('TodoData', JSON.stringify(todoDataArray));
    }
  }

  public deleteRecored(id: number) {
    const existingData = localStorage.getItem('TodoData');
    let todoDataArray = [];
    if (existingData) {
      todoDataArray = JSON.parse(existingData);
      const newArray = todoDataArray.filter((data: any) => {
        return data.id !== id;
      });
      localStorage.setItem('TodoData', JSON.stringify(newArray));
    }
  }

  public login() {
    return localStorage.getItem('User-detals');
  }
}
