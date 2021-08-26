using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Red_Social.Model.Models;
using Red_Social.Model.Models.MatterSelection;
using Red_Social.Services.Services.SelectionCoursesServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Red_Social.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class SelectionController : ControllerBase
    {
        private readonly ISelectionCoursesServices _selectionCoursesServices;
        public SelectionController(ISelectionCoursesServices selectionCoursesServices)
        {
            _selectionCoursesServices = selectionCoursesServices;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id) 
        {
            var data =_selectionCoursesServices.getSelectionCourses(id);
            return Ok(data);
        }

        [HttpPost]
        public IActionResult Post(MatterSelection model)
        {
            var validateData= _selectionCoursesServices.validateIfCourseIsAlreadySelected(model);
            if(!validateData) return Ok(new MessageControl() {Message= "Esta materia ya ha sido seleccionada" });
            return Ok(new MessageControl() { Message="Guardado con exito" });
        }

        [HttpGet("{studentId}")]
        public IActionResult GetById(int studentId)
        {
            var data = _selectionCoursesServices.GetById(studentId);
            return Ok(data);
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            _selectionCoursesServices.Delete(id);
            return Ok();
        }
    }
}
