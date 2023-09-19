import {Component, OnInit} from '@angular/core';
import {Post} from "../../../models/post";
import {PostService} from "../../../services/post.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  id:any;
  posts:any;
  postServices;


  constructor(private route : ActivatedRoute) {
    this.postServices = new PostService();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>
    {
      this.id = params.get('id')
    })
    this.postServices.getPostById(this.id);
  }

}
