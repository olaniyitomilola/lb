using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using German.Application.Services;
using German.Core.Interfaces;
using Moq;
using Xunit;

namespace German.Test.Services
{
    class CourseServiceTest : ICourseService
    {
        private readonly Mock<IAppDbContext> _appDbContextMock;
        private readonly ICourseService _courseServiceMock;

        public CourseServiceTest() {
            this._appDbContextMock= new Mock<IAppDbContext>();
            this._courseServiceMock = new CourseService(this._appDbContextMock.Object);
        }

        [Fact]



    }
}
