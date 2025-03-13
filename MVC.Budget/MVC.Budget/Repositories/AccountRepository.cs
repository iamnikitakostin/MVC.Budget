using Microsoft.EntityFrameworkCore;
using MVC.Budget.Data;
using MVC.Budget.Interfaces;
using MVC.Budget.Models;

namespace MVC.Budget.Repositories;

public class AccountRepository : IAccountRepository
{
    private readonly BudgetDbContext _context;
    public AccountRepository(BudgetDbContext context)
    {
        _context = context;
    }

    public async Task<List<Account>> GetAllAsync()
    {
        List<Account> accounts = await _context.Accounts.ToListAsync();
        return accounts;
    }

    public async Task<Account> GetByIdAsync(int id)
    {
        return await _context.Accounts.FindAsync(id);
    }

    public async Task<bool> AddAsync(Account account)
    {
        await _context.Accounts.AddAsync(account);
        await _context.SaveChangesAsync();

        return true;
    }

    public async Task<bool> UpdateAsync(Account account)
    {
        var savedAccount = await GetByIdAsync(account.Id);

        if (savedAccount == null)
        {
            return false;
        }

        savedAccount.Transactions = account.Transactions;
        savedAccount.Name = account.Name;
        savedAccount.Balance = account.Balance;

        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<bool> DeleteAsync(int id)
    {
        int affectedRows = await _context.Accounts.Where(a => a.Id == id).ExecuteDeleteAsync();
        return affectedRows > 0;
    }
}
