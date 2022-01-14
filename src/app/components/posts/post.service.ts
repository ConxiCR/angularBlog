import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostI } from 'src/app/shared/models/post.interface';

 



@Injectable({
  providedIn: 'root'
})
export class PostService {

  //readonly ListPostsModule: Observable<PostI>;

  constructor(private firestore: Firestore) { }

  addPost(post: PostI){
    const postList = collection(this.firestore, 'post');
    return addDoc(postList, post)
  }

  public getAllPosts():Observable<PostI[]>{
    const postList = collection(this.firestore, 'post');
    //const data=
    //const id= a.payload.doc.id;
    return collectionData(postList, { idField: 'id' }) as Observable<PostI[]>;
    
  }

  /*valueChanges(){
      docData<PostI>(
        doc(this.afs, 'posts', id)
      );
  }*/
 /* public getAllPosts() { 
    return this.afs
      .collection('post')
        .snapshotChanges()
        .pipe(
          map( actions=>

            .map(a =>{
              const data= a.payload.doc.data() as PostI;
              const id= a.payload.doc.id;
              return {id, ...data};
            })
          )
        );
  }*/
}
