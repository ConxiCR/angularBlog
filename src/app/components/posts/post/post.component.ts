import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public post:{
    id: string;
    titlePost: string;
    contentPost: string;
    imagePost: string;
  }= {
    id:'1',
    titlePost: 'Post one',
    contentPost: 'Hola Mundo',
    imagePost: 'https://picsum.photos/id/870/200/300?grayscale&blur=2'
  };

  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.post.id = this.route.snapshot.params.id;//id viene de app-routing.module.ts
  }

}
