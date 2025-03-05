using Microsoft.EntityFrameworkCore;
using MVC.Budget.Models;

namespace MVC.Budget.Data;

public class BudgetDbContext : DbContext
{
    public BudgetDbContext(DbContextOptions<BudgetDbContext> options) : base(options) { }

    public DbSet<Category> Categories { get; set; }
    public DbSet<Transaction> Transactions { get; set; }
}
