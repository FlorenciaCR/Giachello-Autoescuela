import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: 'https://firebasestorage.googleapis.com/v0/b/autoescuelagiachello-5f53e.appspot.com/o/first-driving-lesson.jpg?alt=media',
      title: 'Autoescuela Giachello. Tu escuela de manejo en Buenos Aires.',
      subtitle: 'Nunca fue tan fácil aprender a manejar.',
    };
    this.slides[1] = {
      src: 'https://firebasestorage.googleapis.com/v0/b/autoescuelagiachello-5f53e.appspot.com/o/girl-happy-passing-test.jpg?alt=media',
      title: 'Aprendé a Conducir con Nosotros.',
      subtitle: 'Comenzá desde cero con nuestros servicios. Nuestros instructores te guiarán paso a paso para que obtengas tu licencia de conducir con tranquilidad.',
    }
    this.slides[2] = {
      src: 'https://firebasestorage.googleapis.com/v0/b/autoescuelagiachello-5f53e.appspot.com/o/instructor-in-car.jpg?alt=media',
      title: 'Refuerza tus Habilidades de Conducción.',
      subtitle: 'Perfeccioná tu conducción con nuestras sesiones de práctica. Prepárate para el examen y mejora tus habilidades en la calle junto a nuestros expertos.',
    }
  }
  onSlideChange(event:any){
    console.log(event);
  }
}
