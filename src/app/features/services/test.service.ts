import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  public TodoData: any = [];
  constructor() {}

  public addRecoored(data: any) {
    // Retrieve existing data from localStorage
    const existingData = localStorage.getItem('TodoData');
    let todoDataArray = [];
    // Check if there is existing data
    if (existingData) {
      // Parse existing data from JSON string to an array
      todoDataArray = JSON.parse(existingData);
    }
    // Add the new record to the array
    todoDataArray.push(data);
    // Store the updated array back in localStorage
    localStorage.setItem('TodoData', JSON.stringify(todoDataArray));
  }

  public deleteRecored(id: number) {
    const existingData = localStorage.getItem('TodoData');
    let todoDataArray = [];
    if (existingData) {
      // Parse existing data from JSON string to an array
      todoDataArray = JSON.parse(existingData);
      const newArray = todoDataArray.filter((data: any) => {
        return data.id !== id;
      });
      localStorage.setItem('TodoData', JSON.stringify(newArray));
    }
  }
}
