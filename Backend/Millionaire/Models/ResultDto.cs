using Millionaire.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Millionaire.Models
{
    public class ResultDto
    {
        public int Id { get; set; }
        public int WinMoney { get; set; }
        public string Nick { get; set; }
        public string Date { get; set; }
    }
}
