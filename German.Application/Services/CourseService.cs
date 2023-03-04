﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using German.Core.Entities;
using German.Core.Interfaces;

namespace German.Application.Services
{

    public class CourseService : ICourseService
    {
        private readonly IAppDbContext db;

        public CourseService(IAppDbContext db) { 
            this.db = db;
        }

        public async Task<List<Course>> GetCoursesAsync()
        {
           return  await db.SelectAllCoursesAsync(); 
        }
    }
}
