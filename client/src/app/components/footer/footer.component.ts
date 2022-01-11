import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css']
})
export class FooterComponent implements OnInit {
  
  title: string | undefined;

  ngOnInit(): void {
  this.title = "github.com/jesseantonio ";
  }

}
