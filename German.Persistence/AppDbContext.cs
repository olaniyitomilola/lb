using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using German.Core.Interfaces;
namespace German.Persistence
{
	public class AppDbContext: DbContext,IAppDbContext
	{
		private readonly IConfiguration configuration;
		public AppDbContext(IConfiguration configuration)
		{
			this.configuration = configuration;
			this.Database.Migrate();

		}

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlServer(this.configuration.GetConnectionString("database"));
		}
	}
}

