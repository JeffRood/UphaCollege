using Red_Social.Model.Models;
using Red_Social.Model.Models.Courses;
using Red_Social.Model.Models.MatterSelection;
using Red_Social.Repository;
using Red_Social.Services.Services.CoursesServices;
using Red_Social.Services.Services.StudentServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Red_Social.Services.Services.SelectionCoursesServices
{
    public interface ISelectionCoursesServices : IBaseService<MatterSelection>
    {
        public bool validateIfCourseIsAlreadySelected(MatterSelection Model);
        public object getSelectionCourses(int studentId);

    }
    public class SelectionCoursesServices : BaseService<MatterSelection>, ISelectionCoursesServices
    {
        private readonly ICourseService _courseService;
        private readonly IStudentServices _studentServices;

        public SelectionCoursesServices(IBaseRepository<MatterSelection> baseRepository, IStudentServices studentServices,ICourseService courseService) : base(baseRepository)
        {
            _courseService = courseService;
            _studentServices = studentServices;
        }

        public object getSelectionCourses(int studentId)
        {
            object validateMonday =
                (from selection in GetAll()
                 join courses in _courseService.GetAll() on selection.CoursesId equals courses.ID
                 join student in _studentServices.GetAll() on selection.StudentId equals student.ID
                 where selection.StudentId.Equals(studentId)
                 select new { courseId = courses.ID, id = selection.ID, courseName = courses.Name}).ToList();

            return validateMonday;
        }


        public bool validateIfCourseIsAlreadySelected(MatterSelection Model)
        {
            var getCurrentCourse = _courseService.GetAll().Where(x => x.ID.Equals(Model.CoursesId)).ToList();
            var getAlCourses =
                 (from selection in GetAll()
                  join courses in _courseService.GetAll() on selection.CoursesId equals courses.ID
                  where selection.StudentId.Equals(Model.StudentId)
                  select new { Name = courses.Name }).ToList();

            foreach (var data in getCurrentCourse)
            {
                foreach (var item in getAlCourses)
                {
                    if (data.Name.Equals(item.Name))
                    {
                        return false;
                    }
                }

            }
            Save(Model);
            return true;
        }



    }
}
