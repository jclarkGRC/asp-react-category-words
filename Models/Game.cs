using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CategoryWords.Models
{
    public class Game
    {
        public int Id { get; set; }
        public string currentWord { get; set; }
        public string currentCategory { get; set; }
        public int currentScore { get; set; }
        public string[] usedWords { get; set; }
    }
}
