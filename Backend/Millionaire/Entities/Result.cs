using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Millionaire.Entities
{
    public class Result
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int WinMoney { get; set; }
        public string Nick { get; set; }
        public DateTime Date { get; set; }
        // TODO : Sign in
        // public int UserId { get; set; }
        // public virtual User User { get; set; }
    }
}
