using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Millionaire.Entities;
using Millionaire.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Millionaire.Controllers
{
    [Route("/api/user")]
    public class UserController : Controller
    {
        private readonly MillionaireDbContext _dbContext;
        private readonly IMapper _mapper;

        public UserController(MillionaireDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult GetUserByNick([FromBody] UserDto dto)
        {
            var user = _dbContext.Users.FirstOrDefault(u => u.Nick == dto.Nick && u.Password == dto.Password);

            if (user == null)
                return NotFound();

            return Ok();
        }

        [HttpPost]
        public ActionResult CreateUser([FromBody] UserDto dto)
        {
            var newUser = _mapper.Map<User>(dto);

            if (newUser == null)
                return BadRequest();

            _dbContext.Users.Add(newUser);
            _dbContext.SaveChanges();

            return Ok();
        }
    }
}
