using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Millionaire.Models
{
    public class QuestionDto
    {
        public int Id { get; set; }
        public String Asking { get; set; }
        public String CorrectAnswer { get; set; }
        public String IncorrectAnswer1 { get; set; }
        public String IncorrectAnswer2 { get; set; }
        public String IncorrectAnswer3 { get; set; }
    }
}
