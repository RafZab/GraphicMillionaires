using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Millionaire.Entities;
using Millionaire.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Millionaire.Controllers
{
    [Route("/api/result")]
    public class ResultController : Controller
    {
        private readonly MillionaireDbContext _dbContext;
        private readonly IMapper _mapper;

        public ResultController(MillionaireDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ResultDto>> GetTop10()
        {
            var resultTop10 = _dbContext.Results
                .OrderByDescending(r => r.WinMoney)
                .Take(10)
                .ToList();

            var resultDto = _mapper.Map<List<ResultDto>>(resultTop10);
            
            return Ok(resultDto);
        }

        
        [HttpPost]
        public ActionResult CreateResult([FromBody] CreateResultDto dto)
        {
            var newResult = _mapper.Map<Result>(dto);

            if (newResult == null)
                return BadRequest();

            newResult.Date = DateTime.UtcNow.Date;

            _dbContext.Results.Add(newResult);
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}
