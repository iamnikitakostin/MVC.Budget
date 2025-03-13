using MVC.Budget.Models;

namespace MVC.Budget.Interfaces;

public interface ICategoryService
{
    Task<List<Category>> GetAllAsync();
    Task<Category> GetByIdAsync(int id);
    Task<bool> AddAsync(Category category);
    Task<bool> UpdateAsync(Category category);
    Task<bool> DeleteAsync(int id);
    Task<bool> CategoryExists(int id);
}
