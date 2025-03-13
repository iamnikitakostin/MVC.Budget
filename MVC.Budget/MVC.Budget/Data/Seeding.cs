using Microsoft.EntityFrameworkCore;
using MVC.Budget.Models;

namespace MVC.Budget.Data;

public class Seeding
{
    public static void Initialize (IServiceProvider serviceProvider)
    {
        using (var context = new BudgetDbContext(
            serviceProvider.GetRequiredService<DbContextOptions<BudgetDbContext>>()))
        {
            if (context.Transactions != null && context.Transactions.Any())
            {
                return;
            }

            context.Accounts.AddRange(
                    new Models.Account
                    {
                        Name = "Chequing"
                    },
                    new Models.Account
                    {
                        Name = "Savings",
                        Balance = 500m
                    }
                );

            context.Categories.AddRange(
                    new Models.Category
                    {
                        Name = "Personal"
                    },
                    new Models.Category
                    {
                        Name = "Work"
                    }
                );

            context.SaveChanges();

            Category personalCategory = context.Categories.FirstOrDefault(c => c.Name == "Personal");
            Category workCategory = context.Categories.FirstOrDefault(c => c.Name == "Work");

            Account chequingAccount = context.Accounts.FirstOrDefault(a => a.Id == 1);
            Account savingsAccount = context.Accounts.FirstOrDefault(a => a.Id == 2);

            context.Transactions.AddRange(
                    new Models.Transaction
                    {
                        Name = "BANK #3 WTH",
                        AccountId = chequingAccount.Id,
                        Account = chequingAccount,
                        Amount = 31.1m,
                        ExitBalance = 531.1m,
                        CreatedDate = DateTime.Now,
                        UpdatedDate = DateTime.Now,
                        CategoryId = personalCategory.Id,
                        Category = personalCategory
                    },
                    new Models.Transaction
                    {
                        Name = "SUBWAY @ PARK RD.",
                        AccountId = chequingAccount.Id,
                        Account = chequingAccount,
                        Amount = 20m,
                        ExitBalance = 551.1m,
                        CreatedDate = DateTime.Now,
                        UpdatedDate = DateTime.Now,
                        CategoryId = personalCategory.Id,
                        Category = personalCategory
                    },
                    new Models.Transaction
                    {
                        Name = "RONA @ PARK RD.",
                        AccountId = savingsAccount.Id,
                        Account = savingsAccount,
                        Amount = -11.1m,
                        ExitBalance = -11.1m,
                        CreatedDate = DateTime.Now,
                        UpdatedDate = DateTime.Now,
                        CategoryId = workCategory.Id,
                        Category = workCategory
                    },
                    new Models.Transaction
                    {
                        Name = "SUBWAY @ PARK RD.",
                        AccountId = savingsAccount.Id,
                        Account = savingsAccount,
                        Amount = 100m,
                        ExitBalance = 88.92m,
                        CreatedDate = DateTime.Now,
                        UpdatedDate = DateTime.Now,
                        CategoryId = workCategory.Id,
                        Category = workCategory
                    }
                );

            
            context.SaveChanges();

        }
    }
}
