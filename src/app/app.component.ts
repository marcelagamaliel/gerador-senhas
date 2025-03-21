import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import necessário para *ngIf e ngModel
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tamanhoSenha: number = 8;
  usarMaiusculas: boolean = false;
  usarNumeros: boolean = false;
  usarSimbolos: boolean = false;
  senhaGerada: string = '';

  gerarSenha() {
    const minusculas = 'abcdefghijklmnopqrstuvwxyz';
    const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+[]{}|;:,.<>?';

    let caracteres = minusculas;
    if (this.usarMaiusculas) caracteres += maiusculas;
    if (this.usarNumeros) caracteres += numeros;
    if (this.usarSimbolos) caracteres += simbolos;

    this.senhaGerada = this.gerarStringAleatoria(caracteres, this.tamanhoSenha);
  }

  gerarStringAleatoria(base: string, comprimento: number): string {
    let resultado = '';
    for (let i = 0; i < comprimento; i++) {
      const randomIndex = Math.floor(Math.random() * base.length);
      resultado += base[randomIndex];
      
    }
   return resultado
  }

  copiarSenha() {
    navigator.clipboard.writeText(this.senhaGerada).then(() => {
      alert('Senha copiada para a área de transferência!');
    });
  }
}
