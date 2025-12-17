using ChatBot.Models;

namespace ChatBot.Services
{
    public interface IChatService
    {
        List<ChatMessage> GetMessages();
        ChatMessage SendMessage(ChatMessage msg);
    }
}
