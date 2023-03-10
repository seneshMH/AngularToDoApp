import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit{
  tasks: Task[] = [
    new Task("Visit Ann"),
    new Task("Call Dad"),
    new Task("Goto the gym"),
    new Task("Wash the dishes"),
    new Task("Shop for the party")
  ];

  date : Date = new Date();

  constructor(private route : ActivatedRoute){}

  ngOnInit() : void{
    this.date  = new Date(this.route.snapshot.params['date']);
  }

  add(newTask: string) {
    this.tasks.push(new Task(newTask));
  }

  remove(existingTask: Task) {
    var userConfirm = confirm(`Are you sure you want to remove task ? \n "${existingTask.title}"`);

    if (userConfirm) {
      this.tasks = this.tasks.filter(task => task != existingTask);
    }
  }
}

class Task {
  constructor(public title: string) {
  }

  toggleIsDone() {
    this.isDone = !this.isDone;
  }

  public isDone = false;
}


