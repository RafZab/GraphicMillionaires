using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Millionaire.Models
{
    public class UserDto
    {
        [Required]
        [MaxLength(100)]
        public String Nick { get; set; }
        [Required]
        [MaxLength(500)]
        public String Password { get; set; }
    }
}
