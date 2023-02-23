﻿using German.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace German.Core.Entities
{
    public class User : IAuditableEntity
    {
        public int Id { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateUpdated { get; set; }
        public DateTime? DateDeleted { get; set; }
        public bool IsDeleted { get; set; }
        public string FirstName { get;set; }
        public string LastName { get;set; }
        public string MiddleName { get; set; }
        public string Email { get; set; }
        //core identity uses email as primary username
        public string Password { get; set; }
        public string UserName { get; set; }

        public string PhoneNumber { get; set; }
        public string Suffix { get; set; }
    }
}
