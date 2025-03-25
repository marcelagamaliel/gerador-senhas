import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
    let senhaArray: string[] = [];

    if (this.usarMaiusculas) {
      caracteres += maiusculas;
      senhaArray.push(maiusculas[Math.floor(Math.random() * maiusculas.length)]);
    }
    if (this.usarNumeros) {
      caracteres += numeros;
      senhaArray.push(numeros[Math.floor(Math.random() * numeros.length)]);
    }
    if (this.usarSimbolos) {
      caracteres += simbolos;
      senhaArray.push(simbolos[Math.floor(Math.random() * simbolos.length)]);
    }

    while (senhaArray.length < this.tamanhoSenha) {
      senhaArray.push(caracteres[Math.floor(Math.random() * caracteres.length)]);
    }

    this.senhaGerada = this.embaralharArray(senhaArray).join('');
  }

  embaralharArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  copiarSenha() {
    navigator.clipboard.writeText(this.senhaGerada).then(() => {
      alert('Senha copiada para a área de transferência!');
    });
  }
}
