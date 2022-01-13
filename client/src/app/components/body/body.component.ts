import { identifierName } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-body",
  templateUrl: "body.component.html",
  styleUrls: ["body.component.scss"],
})
export class BodyComponent implements OnInit {
  constructor() {}

  tarefas: any[] = [];

  addTarefa(item: string) {
    {
      if (this.tarefas.filter((item) => "")) {
        console.log("ERRO");
      }

      this.tarefas.push({
        id: this.tarefas.length,
        name: item,
      });
      console.log(this.tarefas.find((item) => 1))
      console.log(this.tarefas);
    }
  }

  deleteTarefa(id: number) {
    {
      this.tarefas = this.tarefas.filter((item) => item.id !== id);
    }
  }

  // tarefas = [
  //   {
  //     id: 1,
  //     desc: "adasdasd",
  //   },
  //   {
  //     id: 2,
  //     desc: "qqqqqqq",
  //   },
  //   {
  //     id: 3,
  //     desc: "aaaaaaa",
  //   },
  // ];

  ngOnInit(): void {}
}
