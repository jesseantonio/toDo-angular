import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-body",
  templateUrl: "body.component.html",
  styleUrls: ["body.component.scss"],
})
export class BodyComponent implements OnInit {
  constructor() {}

  tarefas = [
    {
      id: 1,
      desc: "adasdasd",
    },
    {
      id: 2,
      desc: "qqqqqqq",
    },
    {
      id: 3,
      desc: "aaaaaaa",
    },
  ];

  ngOnInit(): void {}
}
