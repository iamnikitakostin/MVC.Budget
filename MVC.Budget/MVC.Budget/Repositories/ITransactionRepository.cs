using MVC.Budget.Models;

namespace MVC.Budget.Repositories;

public interface ITransactionRepository
{
    Task<List<Transaction>> GetAllAsync();
    Task<Transaction> GetByIdAsync(int id);
    Task<bool> AddAsync(Transaction transaction);
    Task<bool> UpdateAsync(Transaction transaction);
    Task<bool> DeleteAsync(int id);
    Task<List<Transaction>> GetAllByAccountAsync(int id);

}
