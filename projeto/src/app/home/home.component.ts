import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#game-action li').click(function(){
      var id = $(this).attr('data-id');
      $('.game-item').removeClass('active');
      $('#game-' + id).addClass('active');
    });
  }

}
