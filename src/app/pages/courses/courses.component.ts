import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  
  cardData:any[] = [
    {
      img: "/assets/course-img-frontend.jpg",
      courseName: "Front-End Development",
      skill: "HTML, CSS/SCSS, JS/TS, ANGULAR",
      name: "თაზო გელაშვილი",
    },
    {
      img: "/assets/6502421 (1).jpg",
      courseName: "Back-end development",
      skill: "Node.JS, Express(Mongodb)",
      name: "SSA Company",
    },
    {
      img: "/assets/7757338.jpg",
      courseName: "Digital design",
      skill: "UI/UX",
      name: "SSA Company",
    }
  ]
}
