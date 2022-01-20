import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UploadVideoComponent implements OnInit {



  constructor(private router: Router) {
  }

 async ngOnInit() {
    var buildUrl = "assets/demo/Build";
    var config = {
      dataUrl: buildUrl + "/demo.data",
      frameworkUrl: buildUrl + "/demo.framework.js",
      codeUrl: buildUrl + "/demo.wasm",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "JoeMoceri",
      productName: "Unity Effects Pack",
      productVersion: "0.1",
      devicePixelRatio: 0
    };
  
    let container = document.querySelector("#unity-container") || new Element();
    var canvas : HTMLElement = document.querySelector("#unity-canvas") || new HTMLElement();
    var loadingBar : HTMLElement = document.querySelector("#unity-loading-bar") || new HTMLElement();
    var progressBarFull : HTMLElement = document.querySelector("#unity-progress-bar-full") || new HTMLElement();
    var fullscreenButton : HTMLElement = document.querySelector("#unity-fullscreen-button") || new HTMLElement();
    var warningBanner: HTMLElement = document.querySelector("#unity-warning") || new HTMLElement();

   if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    container.className = "unity-mobile";
    config.devicePixelRatio = 1;
    warningBanner.style.display = "block";
    setTimeout(() => {
      warningBanner.style.display = "none";
    }, 5000);
  } else {
    canvas.style.width = "960px";
    canvas.style.height = "600px";
  }
  loadingBar.style.display = "block";

  createUnityInstance(canvas, config, (progress: any) => {
    progressBarFull.style.width = 100 * progress + "%";
  }).then((unityInstance: any) => {
    loadingBar.style.display = "none";
    fullscreenButton.onclick = () => {
      unityInstance.SetFullscreen(1);
    };
  }).catch((message: any) => {
    alert(message);
  });
  }
}
