using System;
using System.Collections.Generic;

namespace ChatBot.Models;

public partial class ChatMessage
{
    public int Id { get; set; }

    public string UserId { get; set; } = null!;

    public string Message { get; set; } = null!;

    public DateTime CreatedOn { get; set; }
}
