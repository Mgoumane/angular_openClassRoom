import { Component } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-face-snap-list',
	templateUrl: './face-snap-list.component.html',
	styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent {

  constructor( private faceSnapsService : FaceSnapsService ) { }
  // Pour rappel, ajouter un modificateur d'accès comme  public  ou  private  à un argument du  constructor  crée une propriété avec ce nom-là dans la classe. Vous aurez donc accès au service via la propriété  faceSnapsService.

	facesnaps!: FaceSnap[];
	facesnaps$!: Observable<FaceSnap[]>;

	ngOnInit(): void {

    this.facesnaps$ = this.faceSnapsService.getAllFaceSnaps();

	}

}
