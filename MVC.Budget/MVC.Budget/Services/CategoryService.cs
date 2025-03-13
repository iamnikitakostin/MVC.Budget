using MVC.Budget.Interfaces;
using MVC.Budget.Models;

namespace MVC.Budget.Services;

public class CategoryService : ICategoryService
{
    private readonly ICategoryRepository _categoryRepository;

    public CategoryService(ICategoryRepository categoryRepository)
    {
        _categoryRepository = categoryRepository;
    }

    public async Task<List<Category>> GetAllAsync()
    {
        return await _categoryRepository.GetAllAsync();
    }
    public async Task<Category> GetByIdAsync(int id)
    {
        return await _categoryRepository.GetByIdAsync(id);
    }
    public async Task<bool> AddAsync(Category category)
    {
        return await _categoryRepository.AddAsync(category);
    }
    public async Task<bool> UpdateAsync(Category category)
    {
        return await _categoryRepository.UpdateAsync(category);
    }
    public async Task<bool> DeleteAsync(int id)
    {
        return await _categoryRepository.DeleteAsync(id);
    }

    public async Task<bool> CategoryExists(int id)
    {
        return await _categoryRepository.GetByIdAsync(id) != null;
    }
}
