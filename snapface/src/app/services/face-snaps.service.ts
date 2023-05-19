import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
	// L'objet de configuration qui spécifie  providedIn: 'root'  dit à Angular d'enregistrer ce service à la racine de l'application. Ce sera très souvent le cas pour vos services, car ça permet de s'assurer de n'avoir qu'une seule instance du service, partagée par tous les partis intéressés.
	providedIn: 'root'
})

// Attention un service n'a pas de méthode onOnit
export class FaceSnapsService {

	constructor(
		private http: HttpClient
	) { }

	faceSnaps: FaceSnap[] = []

	//Ce genre d'architecture modulaire est l'un des gros points forts d'Angular.
	getAllFaceSnaps(): Observable<FaceSnap[]> {

		return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');

	}

	getFaceSnapById(faceSnapId: number) : Observable<FaceSnap> {

    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);

	}

	//Afin de limiter les possibilités à des options sémantiques, on peut remplacer le type  string  par un literal type : 'snap' | 'unsnap'
	//Ainsi, vous ne pourrez passer que 'snap' ou 'unsnap' comme deuxième argument
	snapFaceSnapById(faceSanpId: number, snapType: 'snap' | 'unsnap'): void {
		// const faceSnap = this.getFaceSnapById(faceSanpId);

		// snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;

	}

}
