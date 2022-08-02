import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.page.html',
  styleUrls: ['./assignments.page.scss'],
})
export class AssignmentsPage implements OnInit {
  assignments = [
    {
      id: 1,
      title: 'Assignment 2',
      description: 'This is the first assignment',
      date: '2020-01-01',
      link: 'assignments/1',
    },
    {
      id: 2,
      title: 'Assignment 2',
      description: 'This is the first assignment',
      date: '2020-01-01',
      link: 'assignments/1',
    },
    {
      id: 3,
      title: 'Assignment 3',
      description: 'This is the first assignment',
      date: '2020-01-01',
      link: 'assignments/1',
    },
  ];

  constructor() {}

  ngOnInit() {
    console.log(this.assignments  );

  }

  openAssignment(assignment) {
    console.log(assignment);
    window.open(assignment.link, '_blank');
  }
}

