using MVC.Budget.Models;

namespace MVC.Budget.Interfaces;

public interface IAccountRepository
{
    Task<List<Account>> GetAllAsync();
    Task<Account> GetByIdAsync(int id);
    Task<bool> AddAsync(Account account);
    Task<bool> UpdateAsync(Account account);
    Task<bool> DeleteAsync(int id);
}
