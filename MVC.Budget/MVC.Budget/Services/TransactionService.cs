using MVC.Budget.Interfaces;
using MVC.Budget.Models;
using MVC.Budget.Repositories;

namespace MVC.Budget.Services;

public class TransactionService : ITransactionService
{
    private readonly ITransactionRepository _transactionRepository;

    public TransactionService(ITransactionRepository transactionRepository)
    {
        _transactionRepository = transactionRepository;
    }

    public async Task<List<Transaction>> GetAllAsync()
    {
        return await _transactionRepository.GetAllAsync();
    }

    public async Task<List<Transaction>> GetAllByAccountAsync(int id)
    {
        return await _transactionRepository.GetAllByAccountAsync(id);
    }

    public async Task<Transaction> GetByIdAsync(int id)
    {
        return await _transactionRepository.GetByIdAsync(id);
    }
    public async Task<bool> AddAsync(Transaction transaction)
    {
        return await _transactionRepository.AddAsync(transaction);
    }
    public async Task<bool> UpdateAsync(Transaction transaction)
    {
        return await _transactionRepository.UpdateAsync(transaction);
    }
    public async Task<bool> DeleteAsync(int id)
    {
        return await _transactionRepository.DeleteAsync(id);
    }

    public async Task<bool> TransactionExists(int id)
    {
        return await _transactionRepository.GetByIdAsync(id) != null;
    }
}
