﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using German.Core.Interfaces;
using German.Core.Entities;

namespace German.Persistence
{
	public partial class AppDbContext: DbContext,IAppDbContext
	{
		private readonly IConfiguration configuration;
		public AppDbContext(IConfiguration configuration)
		{
			this.configuration = configuration;
			this.Database.Migrate();

		}
		public DbSet<AuthorCourseLesson> AuthorCourseLessons { get; set; }

     
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlServer(this.configuration.GetConnectionString("database"));
		}
		//soft delete - more research
		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
            #region SoftDeletes
			//wont show the deleted data when not queried
			//global query filter
            modelBuilder.Entity<Course>().HasQueryFilter(e => e.IsDeleted == false);
            modelBuilder.Entity<CourseLesson>().HasQueryFilter(e => e.IsDeleted == false);
            modelBuilder.Entity<Author>().HasQueryFilter(e => e.IsDeleted == false);
            #endregion

            //Many to Many table

            #region many to many
			modelBuilder.Entity<AuthorCourseLesson>()
				.HasKey(p => new {p.AuthorId,p.CourseLessonId});

			modelBuilder.Entity<AuthorCourseLesson>()
				.HasOne(p => p.Author)
				.WithMany(p => p.CourseLessons)
				.HasForeignKey(p => p.AuthorId);

			modelBuilder.Entity<AuthorCourseLesson>()
				.HasOne(p => p.courseLessons)
				.WithMany(p => p.Authors)
				.HasForeignKey(p => p.CourseLessonId);
            #endregion
        }

		//override saveChanges to automatically add course creation date on add, delete and update

		private void HandleIAuditableEntities()
		{
			var entities = ChangeTracker.Entries().Where(entry => (entry.State == EntityState.Added || entry.State == EntityState.Modified || entry.State == EntityState.Deleted));
			foreach (var entity in entities)
			{
				if (typeof(IAuditableEntity).IsAssignableFrom(entity.Entity.GetType()))
				{
					var modificationDate = DateTime.UtcNow;

					if(entity.State == EntityState.Added)
					{
						entity.CurrentValues["DateCreated"] = modificationDate;
					}

                    if (entity.State == EntityState.Deleted)
                    {
						entity.State = EntityState.Modified;
                        entity.CurrentValues["DateDeleted"] = modificationDate;
						entity.CurrentValues["isDeleted"] = true;
                    }

					entity.CurrentValues["DateUpdated"] = modificationDate;
                }
			}
		}

		public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
		{
			HandleIAuditableEntities();
			return await base.SaveChangesAsync(cancellationToken);
		}
        public override int SaveChanges()
        {
			HandleIAuditableEntities();
            return base.SaveChanges();
        }
    }
}

