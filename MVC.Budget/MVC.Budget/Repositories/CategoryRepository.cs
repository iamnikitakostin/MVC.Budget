using Microsoft.EntityFrameworkCore;
using MVC.Budget.Data;
using MVC.Budget.Models;

namespace MVC.Budget.Repositories;

public class CategoryRepository : ICategoryRepository
{
    private readonly BudgetDbContext _context;
    public CategoryRepository(BudgetDbContext context)
    {
        _context = context;
    }

    public async Task<List<Category>> GetAllAsync()
    {
        List<Category> categories = await _context.Categories.ToListAsync();
        return categories;
    }

    public async Task<Category> GetByIdAsync(int id)
    {
        return await _context.Categories.FindAsync(id);
    }

    public async Task<bool> AddAsync(Category category)
    {
        await _context.Categories.AddAsync(category);
        await _context.SaveChangesAsync();

        return true;
    }

    public async Task<bool> UpdateAsync(Category category)
    {
        var savedCategory = await GetByIdAsync(category.Id);

        if (savedCategory == null)
        {
            return false;
        }

        savedCategory.Transactions = category.Transactions;
        savedCategory.Name = category.Name;

        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<bool> DeleteAsync(int id)
    {
        int affectedRows = await _context.Categories.Where(t => t.Id == id).ExecuteDeleteAsync();
        return affectedRows > 0;
    }
}
