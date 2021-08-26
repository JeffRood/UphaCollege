using Red_Social.Model.Models;
using Red_Social.Model.Models.Courses;
using Red_Social.Model.Models.MatterAssignment;
using Red_Social.Repository;
using Red_Social.Services.Services.CoursesServices;
using Red_Social.Services.Services.TeacherService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Red_Social.Services.Services.MatterAssignent
{
    public interface IMatterAssigmentService : IBaseService<MatterAssignment>
    {

    }
    public class MatterAssigmentService : BaseService<MatterAssignment>, IMatterAssigmentService
    {


        public MatterAssigmentService(IBaseRepository<MatterAssignment> baseRepository, ICourseService courseService, ITeacherService studentServices) : base(baseRepository)
        {

        }

        
    }
}
