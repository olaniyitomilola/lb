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
using Microsoft.Extensions.Logging;

namespace German.Test.Services
{
   public class CourseServiceTest
    {
        private Mock<ILogger<CourseService>> logger;
        private  Mock<IAppDbContext> _appDbContextMock;
        private  ICourseService _courseServiceMock;

        public CourseServiceTest() {
            this._appDbContextMock= new Mock<IAppDbContext>();
            this.logger = new Mock<ILogger<CourseService>>();
            this._courseServiceMock = new CourseService(this.logger.Object, this._appDbContextMock.Object);
        }
        //report, the test didnt run until I added xunit as a package. [Fact] only added
        [Fact]
        public async Task ShouldReturnAllCourses()
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
                .ReturnsAsync(database);

            //act
            List<Course> actualCourses = await _courseServiceMock.GetCoursesAsync();


            //assert
            //db should be called once.
            //returns a list of courses
            

            database.Should().NotBeEmpty();
            actualCourses.Should().BeEquivalentTo(database);
          
            _appDbContextMock.Verify(db => db.SelectAllCoursesAsync(), Times.Once);
            _appDbContextMock.VerifyNoOtherCalls();
            logger.VerifyNoOtherCalls();



        }

        [Fact]
        public async Task ShouldReturnSingleCourse()
        {
            //given
            Course databaseCourse = new()
            {
                Id = 1,
                Name = "Introduction to Remote Sensing"
            };

            this._appDbContextMock.Setup(db => 
                db.SelectCourseByIdAsync(databaseCourse.Id))
                    .ReturnsAsync(databaseCourse);
            //when
            Course actualCourse = await _courseServiceMock.GetCourseAsync(databaseCourse.Id);

            //assert
            //1. Actual Course == Expected Course
            // Db hit once
            //logger was not hit

            actualCourse.Should().BeEquivalentTo(databaseCourse);
            _appDbContextMock.Verify(db => db.SelectCourseByIdAsync(databaseCourse.Id), Times.Once);
            _appDbContextMock.VerifyNoOtherCalls();
            logger.VerifyNoOtherCalls();

        }
    }
}
