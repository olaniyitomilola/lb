using Microsoft.AspNetCore.Mvc;
using German.Persistence;
using German.Core.Interfaces;
using German.Core.Entities;

namespace German.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorController : Controller
    {
        private readonly IAppDbContext _db;
        private readonly ILogger<AuthorController> _logger;
        public AuthorController(IAppDbContext db, ILogger<AuthorController> logger) {
            _db = db;
            _logger = logger;
        }

        [HttpGet]

        public async Task<IActionResult> Get()
        {
            var authors = await _db.SelectAllAuthorsAsync();

            return Ok(authors);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            try
            {
                var authors = await _db.SelectAuthorByIdAsync(id);
                return Ok(authors);


            } catch(Exception ex) { 

                if(ex is ApplicationException)
                {
                    return NotFound();
                }
                else
                {
                    _logger.LogError(ex.Message);
                    return BadRequest(ex.Message);

                }
            }

        }

        [HttpPost]

        public async Task<IActionResult> Post(Author author)
        {
            var response = await _db.CreateAuthorAsync(author);

            return CreatedAtAction(nameof(GetById), new { id = author.Id}, author);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var author = await _db.SelectAuthorByIdAsync(id);

                try
                {
                   var response = await _db.DeleteAuthorAsync(author);
                   return Ok(response);
                }
                catch(Exception ex)
                {
                    _logger.LogError(ex.Message);
                    return BadRequest(ex.Message);
                }
                
            } catch(Exception ex)
            {
                if (ex is ApplicationException)
                {
                    return NotFound();
                }
                else
                {
                    _logger.LogError(ex.Message);
                    return BadRequest(ex.Message);

                }
            }
        }

        [HttpPut("{id}")]

        public async Task<IActionResult> Put(int id)
        {
            try
            {
                var author = await _db.SelectAuthorByIdAsync(id);

                try
                {
                    var response = await _db.UpdateAuthorAsync(author);
                    return Ok(response);
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex.Message);
                    return BadRequest(ex.Message);
                }

            }
            catch (Exception ex)
            {
                if (ex is ApplicationException)
                {
                    return NotFound();
                }
                else
                {
                    _logger.LogError(ex.Message);
                    return BadRequest(ex.Message);

                }
            }

        }
    }
}
