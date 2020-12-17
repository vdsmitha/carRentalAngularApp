import { Component, OnInit,ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

 

@Component({
  selector: 'app-signin-modal',
  templateUrl: './signin-modal.component.html',
  styleUrls: ['./signin-modal.component.scss']
})
export class SigninModalComponent {

  @ViewChild('autoShownModal', { static: false }) autoShownModal: ModalDirective;
  isModalShown = false;
 
  showModal(): void {
    this.isModalShown = true;
  }
 
  hideModal(): void {
    this.autoShownModal.hide();
  }
 
  onHidden(): void {
    this.isModalShown = false;
  }
}


