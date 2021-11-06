import { Component, OnInit } from "@angular/core";
import { ScriptService } from "./services/script.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private scriptService: ScriptService) {}

  ngOnInit() {
    this.scriptService
      .load("main")
      .then((data) => {
        console.log("script loaded ", data);
      })
      .catch((error) => console.log(error));
  }
}
