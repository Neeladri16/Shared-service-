// src/app/chat/services/chat.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ChatMessage {
  id: number;
  userId: string;
  message: string;
  createdOn: string;
  isRead?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'https://localhost:7283/api/Chat';

  constructor(private http: HttpClient) { }

  getMessages(): Observable<ChatMessage[]> {
    return this.http.get<ChatMessage[]>(this.apiUrl);
  }

  sendMessage(message: string): Observable<ChatMessage> {
    return this.http.post<ChatMessage>(this.apiUrl, { 
      userId: 'current-user', // You might want to get this from auth service
      message,
      createdOn: new Date().toISOString()
    });
  }
}