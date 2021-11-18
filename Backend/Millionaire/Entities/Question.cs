using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Millionaire.Entities
{
    public class Question
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(5000)]
        public String Asking { get; set; }
        [Required]
        [MaxLength(1000)]
        public String CorrectAnswer { get; set; }
        [Required]
        [MaxLength(1000)]
        public String IncorrectAnswer1 { get; set; }
        [Required]
        [MaxLength(1000)]
        public String IncorrectAnswer2 { get; set; }
        [Required]
        [MaxLength(1000)]
        public String IncorrectAnswer3 { get; set; }


    }
}
