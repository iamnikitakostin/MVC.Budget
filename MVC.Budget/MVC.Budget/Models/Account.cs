using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace MVC.Budget.Models;

public class Account
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Balance { get; set; } = 0;
    [BindNever]
    public List<Transaction> Transactions { get; set; } = new List<Transaction>();
}
