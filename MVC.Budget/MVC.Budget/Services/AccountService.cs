using MVC.Budget.Interfaces;
using MVC.Budget.Models;

namespace MVC.Budget.Services;

public class AccountService : IAccountService
{
    private readonly IAccountRepository _accountRepository;

    public AccountService(IAccountRepository accountRepository)
    {
        _accountRepository = accountRepository;
    }

    public async Task<List<Account>> GetAllAsync()
    {
        return await _accountRepository.GetAllAsync();
    }
    public async Task<Account> GetByIdAsync(int id)
    {
        return await _accountRepository.GetByIdAsync(id);
    }
    public async Task<bool> AddAsync(Account account)
    {
        return await _accountRepository.AddAsync(account);
    }
    public async Task<bool> UpdateAsync(Account account)
    {
        return await _accountRepository.UpdateAsync(account);
    }
    public async Task<bool> DeleteAsync(int id)
    {
        return await _accountRepository.DeleteAsync(id);
    }

    public async Task<bool> AccountExists(int id)
    {
        return await _accountRepository.GetByIdAsync(id) != null;
    }
}
