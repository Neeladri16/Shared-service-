using Microsoft.AspNetCore.Mvc;
using ChatBot.Models;
using ChatBot.Services;

namespace ChatBot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChatController : ControllerBase
    {
        private readonly IChatService _chatService;

        public ChatController(IChatService chatService)
        {
            _chatService = chatService;
        }

        [HttpGet]
        public IActionResult GetMessages()
        {
            var messages = _chatService.GetMessages();
            return Ok(messages);
        }

        [HttpPost]
        public IActionResult SendMessage([FromBody] ChatMessage msg)
        {
            var message = _chatService.SendMessage(msg);
            return Ok(message);
        }
    }
}
