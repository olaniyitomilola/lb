﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using German.Core.Entities;
using German.Core.Interfaces;
using German.Core.Types;

namespace German.Core.Entities
{
    public class CourseLesson : IAuditableEntity
    {
        public CourseLesson() { 
           this.Authors = new HashSet<AuthorCourseLesson>();
        }
        public int Id { get; set ; }
        public DateTime DateCreated { get; set; }
        public DateTime DateUpdated { get; set; }
        public DateTime? DateDeleted { get; set; }
        public bool IsDeleted { get; set; }

        //navigation property to parent course
        [Required]
        public Course course { get; set; }  
        public int CourseId { get; set; }

        public string CourseName { get; set; }
        public string CourseDescription { get;set;}

        public SubscriptionType SubscriptionType { get; set; }

        public String Attachments { get; set; }

        public ICollection <AuthorCourseLesson> Authors { get; set; }   



    }
}
