using System;
using System.Collections.Generic;
using System.Text;

namespace Red_Social.Model.Models.Courses
{
    public class Courses:BaseModel
    {
        public string Name { get; set; }
        public virtual ICollection<MatterAssignment.MatterAssignment> MatterAssignments { get; set; }

    }
}
