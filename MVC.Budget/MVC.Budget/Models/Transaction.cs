using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace MVC.Budget.Models;

public class Transaction
{
    public int Id {  get; set; }
    public string Name { get; set; }
    public decimal Amount { get; set; }
    public decimal ExitBalance { get; set; }
    [BindNever]
    public DateTime CreatedDate { get; set; }
    [BindNever]
    public DateTime UpdatedDate { get; set; }
    [ForeignKey("Category")]
    public int CategoryId { get; set; }
    [ForeignKey("Account")]
    public int AccountId { get; set; }
    [BindNever]
    public Account Account { get; set; }
    [BindNever]
    public Category Category { get; set; }
}
