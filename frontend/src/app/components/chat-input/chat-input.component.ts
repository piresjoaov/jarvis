import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-input',
  standalone: true,
  templateUrl: './chat-input.component.html',
  imports: [FormsModule],
})
export class ChatInputComponent {
  message: string = '';

  sendMessage() {
    const trimmed = this.message.trim();
    if (!trimmed) return;

    console.log('Mensagem enviada:', trimmed);
    this.message = '';
  }
}
