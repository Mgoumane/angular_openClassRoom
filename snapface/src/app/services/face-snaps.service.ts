import { Inject, Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';


@Injectable({
  // L'objet de configuration qui spécifie  providedIn: 'root'  dit à Angular d'enregistrer ce service à la racine de l'application. Ce sera très souvent le cas pour vos services, car ça permet de s'assurer de n'avoir qu'une seule instance du service, partagée par tous les partis intéressés.
  providedIn: 'root'
})

// Attention un service n'a pas de méthode onOnit
export class FaceSnapsService {

  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: "Paris"
    },
    {
      id: 2,
      title: 'Archibald2',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: "Paris"
    }
  ]

  //Ce genre d'architecture modulaire est l'un des gros points forts d'Angular.
  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById( faceSanpId: number ) {
    const faceSnap = this.faceSnaps.find( faceSnap => faceSnap.id === faceSanpId );
    if (!faceSnap) {
      throw new Error('FaceSnap not found')
    } else {
      return faceSnap;
    }
  }

  //Afin de limiter les possibilités à des options sémantiques, on peut remplacer le type  string  par un literal type : 'snap' | 'unsnap'
  //Ainsi, vous ne pourrez passer que 'snap' ou 'unsnap' comme deuxième argument
  snapFaceSnapById(faceSanpId: number,snapType : 'snap' | 'unsnap') : void {
    const faceSnap = this.getFaceSnapById(faceSanpId);

    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;

  }

}
