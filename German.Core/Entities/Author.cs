using System;
using System.Collections.Generic;
using System.Text;

namespace German.Core.Entities
{
    public class Author : User
    {
        public string Usertype { get; set; }
        public Author()
        {
            Usertype = "Educator";
        }

        public int UserID { get; set; } 
        public User User { get; set; }
    }
}
