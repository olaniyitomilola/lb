﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using German.Core.Interfaces;
using German.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.VisualBasic;

namespace German.Persistence
{
    public partial class AppDbContext : IAppDbContext
    {
        public DbSet<Author> Authors { get; set; }
        public DbSet<User> users { get; set; }  

        public async Task<Author> CreateAuthorAsync(Author author)
        {
            EntityEntry<Author> newAuthor = await this.Authors.AddAsync(author);
            await this.SaveChangesAsync();
            return newAuthor.Entity;
        }
        public async Task<Author> SelectAuthorByIdAsync(int authorId)
        {
            var author = this.Authors
                        .AsNoTracking() 
                        .FirstOrDefault(p => p.Id == authorId);
            if(author == null) throw new NullReferenceException(nameof(author));

            return author;
        }
        public async Task<List<Author>> SelectAllAuthorsAsync()
        {
            return await this.Authors.ToListAsync();
        }
        public async Task<Author> UpdateAuthorAsync(Author author)
        {
            EntityEntry<Author> entityEntry =  this.Authors.Update(author);
            await this.SaveChangesAsync();
            return entityEntry.Entity;
        }
        public async Task<Author> DeleteAuthorAsync(Author author)
        {
            EntityEntry<Author> entityEntry = this.Authors.Remove(author);
            await this.SaveChangesAsync();
            return entityEntry.Entity;
        }


    }
}
