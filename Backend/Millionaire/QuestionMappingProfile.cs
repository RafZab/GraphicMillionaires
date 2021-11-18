using AutoMapper;
using Millionaire.Entities;
using Millionaire.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Millionaire
{
    public class QuestionMappingProfile : Profile
    {
        public QuestionMappingProfile()
        {
            CreateMap<Question, QuestionDto>();
            CreateMap<Result, ResultDto>()
                 .ForMember(dto => dto.Date, r => r.MapFrom(u => u.Date.ToString("dd/MM/yyyy")));

            CreateMap<CreateQuestionDto, Question>();
            CreateMap<CreateResultDto, Result>();
            CreateMap<UserDto, User>();
        }
    }
}
