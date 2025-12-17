import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: any[] = [];
  newMessage: string = '';
  loading = false;
  error: string | null = null;
  constructor(private chatService: ChatService) {}
  ngOnInit(): void {
    this.loadMessages();
  }
  loadMessages(): void {
    this.loading = true;
    this.error = null;
    
    this.chatService.getMessages().subscribe({
      next: (messages) => {
        this.messages = messages.map(msg => ({
          content: msg.message,
          time: new Date(msg.createdOn).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isSent: msg.userId === 'current-user' // Adjust this based on your auth
        }));
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading messages:', err);
        this.error = 'Failed to load messages. Please try again.';
        this.loading = false;
      }
    });
  }
  sendMessage(): void {
    const message = this.newMessage.trim();
    if (!message) return;
    this.chatService.sendMessage(message).subscribe({
      next: (savedMessage) => {
        this.messages.push({
          content: savedMessage.message,
          time: new Date(savedMessage.createdOn).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isSent: true
        });
        this.newMessage = '';
      },
      error: (err) => {
        console.error('Error sending message:', err);
        this.error = 'Failed to send message. Please try again.';
      }
    });
  }
}
