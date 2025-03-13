using MVC.Budget.Models;

namespace MVC.Budget.Interfaces;

public interface IAccountService
{
    Task<List<Account>> GetAllAsync();
    Task<Account> GetByIdAsync(int id);
    Task<bool> AddAsync(Account account);
    Task<bool> UpdateAsync(Account account);
    Task<bool> DeleteAsync(int id);
    Task<bool> AccountExists(int id);
}
