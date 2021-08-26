using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Red_Social.Model.Models.MatterAssignment;
using Red_Social.Services.Services.MatterAssignent;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Red_Social.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MatterAssigmentController : ControllerBase
    {
        private readonly IMatterAssigmentService _matterAssigmentService;
        public MatterAssigmentController(IMatterAssigmentService matterAssigmentService)
        {
            _matterAssigmentService = matterAssigmentService;
        }

        [HttpPost]
        public IActionResult Post(MatterAssignment model)
        {
             _matterAssigmentService.Save(model);
            return Ok();
        }

        [HttpGet("{studentId:int}")]
        public IActionResult GetById(int studentId)
        {
            var data = _matterAssigmentService.GetById(studentId);
            return Ok(data);
        }

        [HttpGet]
        public IActionResult Get()
        {
            var data = _matterAssigmentService.GetAll();
            return Ok(data);
        }

        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id)
        {
            _matterAssigmentService.Delete(id);
            return Ok();
        }
    }
}
