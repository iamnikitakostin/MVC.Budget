using Microsoft.EntityFrameworkCore;
using MVC.Budget.Data;
using MVC.Budget.Interfaces;
using MVC.Budget.Models;

namespace MVC.Budget.Repositories;

public class TransactionRepository : ITransactionRepository
{
    private readonly BudgetDbContext _context;
    public TransactionRepository (BudgetDbContext context)
    {
        _context = context;
    }

    public async Task<List<Transaction>> GetAllAsync()
    {
        List<Transaction> transactions = await _context.Transactions.Include(t => t.Category).Include(t => t.Account).ToListAsync();
        return transactions;
    }

    public async Task<List<Transaction>> GetAllByAccountAsync(int id)
    {
        List<Transaction> transactions = await _context.Transactions.Include(t => t.Category).Include(t => t.Account).Where(t => t.AccountId == id).ToListAsync();
        return transactions;
    }

    public async Task<Transaction> GetByIdAsync(int id)
    {
        return await _context.Transactions.FindAsync(id);
    }

    public async Task<bool> AddAsync(Transaction transaction)
    {
        await _context.Transactions.AddAsync(transaction);

        var account = await _context.Accounts.FindAsync(transaction.AccountId);
        var category = await _context.Categories.FindAsync(transaction.CategoryId);

        if (category == null || account == null) {
            return false;
        }

        transaction.Category = category;
        transaction.Account = account;

        account.Balance += transaction.Amount;
        account.Transactions.Add(transaction);

        transaction.ExitBalance = account.Balance;
        transaction.CreatedDate = DateTime.Now;
        transaction.UpdatedDate = DateTime.Now;

        _context.Entry(account).State = EntityState.Modified;

        await _context.SaveChangesAsync();

        return true;
    }

    public async Task<bool> UpdateAsync(Transaction transaction)
    {
        var savedTransaction = await GetByIdAsync(transaction.Id);

        if (savedTransaction == null) 
        {
            return false;
        }

        savedTransaction.Name = transaction.Name;
        savedTransaction.ExitBalance = transaction.ExitBalance;
        savedTransaction.Amount = transaction.Amount;
        savedTransaction.Category = transaction.Category;
        savedTransaction.UpdatedDate = DateTime.Now;

        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var transaction = await _context.Transactions.FirstOrDefaultAsync(t => t.Id == id);

        if (transaction != null)
        {
            _context.Transactions.Remove(transaction);

            await _context.SaveChangesAsync();

            return true;
        }
        return false;
    }
}
