import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatInputComponent } from '../chat-input/chat-input.component';

@Component({
  selector: 'app-chat-window',
  imports: [CommonModule, ChatInputComponent],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.css'
})
export class ChatWindowComponent {
  chatWidthClass = 'w-full';

  setChatWidth(size: 'none' | 'half' | 'full') {
    switch (size) {
      case 'half':
        this.chatWidthClass = 'w-1/2';
        break;
      case 'full':
        this.chatWidthClass = 'w-full';
        break;
    }
  }
}
