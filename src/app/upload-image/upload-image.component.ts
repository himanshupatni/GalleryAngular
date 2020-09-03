import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
})
export class UploadImageComponent implements OnInit {
  pictureUpload = ['', '', '', '', '', ''];
  imageData: File = null;
  url: any = null;
  @ViewChild('form')
  reset: ElementRef;
  constructor() {}

  ngOnInit(): void {}
  imageProgress(event, i) {
    this.imageData = <File>event.target.files[0];
    this.preview(i);
    event.srcElement.value = null;
  }

  preview(i) {
    var mimeType = this.imageData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(this.imageData);
    reader.onload = (_event) => {
      this.url = reader.result;
      for (let j = 0; j <= i; j++) {
        if (this.pictureUpload[j] === '') {
          this.pictureUpload[j] = this.url;

          break;
        }
      }
    };
  }
  removeImage(i) {
    if (this.pictureUpload[i] === '') {
      return;
    } else {
      this.pictureUpload.splice(i, 1);
      this.pictureUpload.push('');
    }
  }
}
