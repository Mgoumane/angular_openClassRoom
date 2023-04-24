import { Component, OnInit } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnap } from '../models/face-snap.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  //Propriété réutilisable qui dépend de ce que le parent lui a assigné avec l'attribute binding [faceSnap]="mySnap"
	facesnap!: FaceSnap;

	snapped: boolean = false;
	buttonContent!: string;

  constructor( private faceSnapsService : FaceSnapsService, private route : ActivatedRoute ) { }

	ngOnInit() {
		this.buttonContent = "Like !";
    const faceSnapId = +this.route.snapshot.params['id'];
    this.facesnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
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


}
