import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

// Un décorateur en TypeScript permet, entre autres, d'apporter des modifications à une classe. Ici, le décorateur  @Component  vient ajouter tous les comportements nécessaires à l'utilisation de ce component dans l'application. Il est importé depuis le package  @angular/core. Tout se passe sous le capot, on n'a pas à s'en occuper !
@Component({
	selector: 'app-face-snap', //c'est ce qui va nous permettre d'insérer ce component dans notre application.
	templateUrl: './face-snap.component.html',
	styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

	//Propriété réutilisable qui dépend de ce que le parent lui a assigné avec l'attribute binding [faceSnap]="mySnap"
	@Input() facesnap!: FaceSnap;

	snapped: boolean = false;
	buttonContent!: string;

  constructor( private faceSnapsService : FaceSnapsService,  private router : Router ) { }

	ngOnInit() {
		this.buttonContent = "Like !"
	}

	onSnap() {
		if (this.snapped == false) {

      this.faceSnapsService.snapFaceSnapById(this.facesnap.id, 'snap');

			this.snapped = true;
			this.buttonContent = "Dislike"

		} else {

      this.faceSnapsService.snapFaceSnapById(this.facesnap.id, 'unsnap');
			this.snapped = false
			this.buttonContent = "Like"

		}
	}

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.facesnap.id}`)
  }

}
