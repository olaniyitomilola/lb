using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using German.Core.Entities;

namespace German.Core.Interfaces
{
	public partial interface IAppDbContext
	{
        //had to remove the public declarations here becauyse all members are public natuyrally and adding it will trigger an error
		 Task<User> CreateUserAsync(User user);
         Task<User> SelectUserByIdAsync(int  userId);
         Task<List<User>> SelectAllUsersAsync();
         Task<User> UpdateCourseAsync(User user);
         Task<User> DeleteUserAsync(User user);



    }
}

