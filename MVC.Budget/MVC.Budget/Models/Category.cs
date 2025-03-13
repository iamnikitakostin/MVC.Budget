using System.ComponentModel.DataAnnotations;

namespace MVC.Budget.Models;

public class Category
{
    public int Id { get; set; }
    [Required]
    public string Name { get; set; }
    public List<Transaction>? Transactions { get; set; } = new List<Transaction>();
}
