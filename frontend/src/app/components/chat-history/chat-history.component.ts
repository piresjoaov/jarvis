import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-history',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css'],
})
export class ChatHistoryComponent {
  chatList = [
    { title: 'Recent Chat 1' },
    { title: 'Recent Chat 2' },
    { title: 'Recent Chat 3' },
    { title: 'Recent Chat 4' },
  ];
}
