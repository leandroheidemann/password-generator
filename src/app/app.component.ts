import {Component, ElementRef, ViewChild} from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  passwordLength = 12;
  password = "";

  @ViewChild('iptPassword') private iptPassword!: ElementRef<HTMLInputElement>

  constructor(private toast: MessageService) {
  }

  generatePassword(): void {
    this.password = "";

    for (var i = 0; i <= this.passwordLength; i++) {
      const randomNumber = Math.floor(Math.random() * this.chars.length);
      this.password += this.chars.substring(randomNumber, randomNumber + 1);
    }
  }

  async copyPassword(): Promise<void> {
    await navigator.clipboard.writeText(this.password);

    this.toast.add({
      key: 'toast',
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Senha copiada'
    });
  }
}
