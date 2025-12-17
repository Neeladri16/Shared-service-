using ChatBot.Models;

namespace ChatBot.Services
{
    public class ChatService : IChatService
    {
        private readonly ChatServiceDBContext _context;

        public ChatService(ChatServiceDBContext context)
        {
            _context = context;
        }

        public List<ChatMessage> GetMessages()
        {
            var message =  _context.ChatMessages.ToList();
            return message;
        }

        public ChatMessage SendMessage(ChatMessage msg)
        {
            _context.ChatMessages.Add(msg);
            _context.SaveChanges();
            return msg;
        }
    }
}
