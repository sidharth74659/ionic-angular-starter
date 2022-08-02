import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-i-sample-form',
  templateUrl: './i-sample-form.page.html',
  styleUrls: ['./i-sample-form.page.scss'],
})
export class ISampleFormPage implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    });
  }

  submitForm() {
    this.form.markAllAsTouched();

    if (!this.form.valid) {
      return;
    }

    console.log(this.form.value);

    this.presentAlert().then(() => {
      this.form.reset();
    });
  }

  private async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      // subHeader: 'Important message',
      message: 'Form Submitted Successfully',
      buttons: ['OK'],
    });

    return await alert.present();
  }
}
