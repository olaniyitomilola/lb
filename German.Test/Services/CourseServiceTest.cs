using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using German.Application.Services;
using German.Core.Interfaces;
using German.Core.Entities;
using Moq;
using Xunit;
using FluentAssertions;

namespace German.Test.Services
{
   public class CourseServiceTest
    {
        private  Mock<IAppDbContext> _appDbContextMock;
        private  ICourseService _courseServiceMock;

        public CourseServiceTest() {
            this._appDbContextMock= new Mock<IAppDbContext>();
            this._courseServiceMock = new CourseService(this._appDbContextMock.Object);
        }

        [Fact]
        public async Task getCoursesList()
        {
            //arrange
            List<Course> database = new List<Course>
            {
                new Course
                {
                    Id = 1,
                    Name = "Course 1"
                },
                new Course
                {
                    Id = 2,
                    Name = "Course 2"
                }
            };

            this._appDbContextMock.Setup(db => 
                db.SelectAllCoursesAsync())
                .ReturnsAsync(database.ToList());

            //act
            List<Course> actualCourses = await _courseServiceMock.GetCoursesAsync();


            //assert
            //db should be cslled once.
            //returns a list of courses

            //actualCourses.Should().NotBeEmpty();
            actualCourses.Should().BeEquivalentTo(database);
            _appDbContextMock.Verify(db => db.SelectAllCoursesAsync(), Times.Once);
            _appDbContextMock.VerifyNoOtherCalls();



        }


    }
}
