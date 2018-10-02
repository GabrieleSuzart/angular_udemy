
import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <h2 [textContent]="title"></h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <img src="{{ imageUrl }}" />
        <img [src]="imageUrl" />
        ` 
})

export class CoursesComponent {
    title = "Lista de cursos";
    imageUrl = "http://lorempixel.com/400/200";
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}