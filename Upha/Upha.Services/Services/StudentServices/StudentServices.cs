using Red_Social.Model.Models.Students;
using Red_Social.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Red_Social.Services.Services.StudentServices
{

    public interface IStudentServices : IBaseService<Students>
    {
    }
    public class StudentServices : BaseService<Students>, IStudentServices
    {
        public StudentServices(IBaseRepository<Students> baseRepository) : base(baseRepository)
        {

        }


    }
}
