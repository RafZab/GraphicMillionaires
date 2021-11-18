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
    [Route("api/question")]
    public class QuestionController : Controller
    {
        private readonly MillionaireDbContext _dbContext;
        private readonly IMapper _mapper;

        public QuestionController(MillionaireDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<QuestionDto>> GetAll()
        {
            var questions = _dbContext
                .Questions
                .ToList();

            var rnd = new Random();
            var randomized = questions.OrderBy(item => rnd.Next()).Take(12);

            var questionsDto = _mapper.Map<List<QuestionDto>>(randomized);

            return Ok(questionsDto);
        }

        [HttpPost]
        public ActionResult CreateQuestion([FromBody] CreateQuestionDto dto)
        {
            var newQuestion = _mapper.Map<Question>(dto);

            if (newQuestion == null)
                return BadRequest();

            _dbContext.Questions.Add(newQuestion);
            _dbContext.SaveChanges();

            return Ok();  
        }

    }
}
